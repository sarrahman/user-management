import api from "../../utils/api";

export const getUsers = () => (dispatch) => {
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
      .get("/user")
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

export const getUser = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addUser = (data) => (dispatch) => {
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
      .post("/user", data)
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

export const updateUser = (id, data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .patch(`/user/${id}`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteUser = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`/user/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
