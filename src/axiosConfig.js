import axios from "axios";
import queryString from "qs";

const instance = axios.create({
  baseURL: "http://localhost:4000"
});

instance.interceptors.request.use(
  request => {
    if (request.data instanceof FormData) return request;
    request.data = queryString.stringify(request.data, {
      arrayFormat: "repeat"
    });
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;

