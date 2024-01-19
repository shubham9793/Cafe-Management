import { myAxios } from "./Helper";

const signUp = (user) => {
  return myAxios.post("/user/signup", user).then((response) => response.data);
};

export const logIn = (user) => {
  return myAxios.post("/user/login", user).then((response) => response.data);
};

export const forgotPassword = (email) => {
  return myAxios.post(
    "/user/forgotPassword",
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const checkToken = () => {
  return myAxios.get("/user/checkToken");
};

export default signUp;
