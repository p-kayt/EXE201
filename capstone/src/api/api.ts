import axios from "axios";
const URL = "https://zunitutor.azurewebsites.net";
const VERSION = 1;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance, VERSION };
