import { instance, VERSION } from "../api";

export const login = async (data: any) => {
  console.log(data);
  //   console.log("api" + "/v" + VERSION + "/User/Login");

  const response = await instance.post(
    "api" + "/v" + VERSION + "/User/Login",
    data
  );
  return response.data;
};

export const register = async (data: any) => {
  console.log(data);
  const response = await instance.post(
    "api" + "/v" + VERSION + "/User/Register",
    data
  );
  return response.data;
};

export const getUserById = async (ID: any) => {
  const response = await instance.get(
    "api" + "/v" + VERSION + "/User/Info" + "?id=" + ID
  );
  return response.data;
};

export const updateUserById = async (props: any) => {
  const { ID, data } = props;
  console.log(ID, data);

  const response = await instance.put(
    "api" + "/v" + VERSION + "/User/Update" + "?id=" + ID,
    data
  );
  return response.data;
};
