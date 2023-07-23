import axios from "axios";

const API_URL = "http://localhost:8080";
const request = axios.create({
  baseURL: `${API_URL}/`,
  timeout: 300000, // 300s
  headers: {
    "Content-Type": "application/json",
  },
  // cancelToken: source.token
});

export { request };
