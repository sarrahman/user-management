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
