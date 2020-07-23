import axios from "axios";
import qs from "qs";

const service = axios.create({
  baseURL: 'https://api.okzy.tv/api.php/provide/vod/at/json/',
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
});

service.interceptors.request.use(
  (config) => {
	config.data = qs.stringify(config.data);
	console.log(config.data)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
	return response;
  },
  (error) => {
    /*网络连接过程异常处理*/
    let { message } = error;
    switch (message) {
      case "Network Error":
        message = "后端接口连接异常";
        break;
      case "timeout":
        message = "后端接口请求超时";
        break;
      case "Request failed with status code":
        message = "后端接口" + message.substr(message.length - 3) + "异常";
        break;
    }
    console.log(message || "后端接口未知异常");
    return Promise.reject(error);
  }
);
export default service;