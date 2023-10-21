import axios from "axios";
const URL = "http://www.zunitutor.somee.com/";
const VERSION = 1;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance, VERSION };
