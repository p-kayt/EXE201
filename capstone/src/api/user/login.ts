import { instance, VERSION } from "../api";

export const login = async (data: any) => {
  console.log(data);
  console.log("api" + "/v" + VERSION + "/User/Login");

  const response = await instance.post(
    "api" + "/v" + VERSION + "/User/Login",
    data
  );
  return response.data;
};
