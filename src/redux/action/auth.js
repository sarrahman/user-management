import api from "../../utils/api";

export const loginApi = (username, password) => (dispatch) => {
  dispatch({
    type: "LOADING",
    value: true,
  });
  return new Promise(async (resolve, reject) => {
    try {
      const csrf = () => api.get("/csrf-cookie");
      await csrf();
    } catch {
      console.log("opps");
    }
    api
      .post("/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        window.sessionStorage.setItem("check", process.env.REACT_APP_SECRET_KEY);
        window.sessionStorage.setItem("token", res.data.data.token);
        dispatch({
          type: "AUTHENTICATED",
          value: true,
        });
        resolve(res);
      })
      .catch((err) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        reject(err);
      });
  });
};


export const logoutApi = () => (dispatch) => {
  dispatch({
    type: "AUTHENTICATED",
    value: false,
  });
  window.sessionStorage.removeItem("check");
  window.sessionStorage.removeItem("token");
}