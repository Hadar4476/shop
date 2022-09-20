import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: headers,
});

export default instance;
