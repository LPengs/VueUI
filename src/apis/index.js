import Vue from 'vue'
import { get } from '../vendor/axios'
const apis = {
    baseURL: "http://127.0.0.1:3000",
    //接口  参数P    url,p  get请求(url,params)
    // getIndex: () => get();
}

//注册到原型里 全局使用 this.apis
Vue.prototype.apis = apis;