import axios from "axios";
const URL = "https://namanh-exe.monoinfinity.net";
const VERSION = 1;

const instance = axios.create({
  baseURL: URL,
  // withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance, VERSION };
