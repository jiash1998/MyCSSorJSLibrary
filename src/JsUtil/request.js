import axios from "axios";
const service = axios.create({
  baseURL: "/",
  timeout: 5000 // 默认请求超时时间
});

/**
 * request 拦截器
 * 可以在请求发送前对请求进行一些处理
 * 如：统一在请求头上加上token
 * 对请求参数进行统一加密
 */
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    //请求异常
    // 请求报错的情况下, http请求异常，不是数据异常，是系统异常
    console.log(error);

    return Promise.reject(error);
  }
);

/**
 * response 拦截器
 * 可以在接口响应之后，页面响应结果之前
 * 对响应结果统一进行处理
 * 如：对返回结果进行解密
 */
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === 200) {
      //code是两百的情况下，表示接口正常通信，直接返回res
      return res;
    } else {
      //code不是两百的情况下，表示接口异常
      console.log(res.msg);
    }
  },
  error => {
    // 请求报错的情况下, http请求异常，不是数据异常，是系统异常
    console.log("响应出错");
  }
);

export default service;
