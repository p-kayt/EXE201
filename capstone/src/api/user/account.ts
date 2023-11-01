import { instance, VERSION } from "../api";

export const login = async (data: any) => {
  // console.log(data);
  //   console.log("api" + "/v/User/Login");

  const response = await instance.post(
    "api/User/Login",
    data
  );
  return response.data;
};

export const register = async (data: any) => {
  // console.log(data);
  const response = await instance.post(
    "api/User/Register",
    data
  );
  // console.log(response);

  return response.data;
};

export const getUserById = async (ID: any) => {
  const response = await instance.get(
    "api/User/Info" + "?id=" + ID
  );
  return response.data;
};

export const updateUserById = async (props: any) => {
  const { ID, data } = props;
  console.log(ID, data);

  const response = await instance.put(
    "api/User/Update" + "?id=" + ID,
    data
  );
  return response.data;
};
