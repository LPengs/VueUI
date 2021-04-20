import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import qs from 'qs';
//基础域名

// Vue.use(VueAxios, axios);

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url + "?" + qs.stringify(params)).then(res => {
            //返回的数据
            resolve(res.data);
        }).catch(err => {
            //如果有错误抛出
            reject(err.data);
        });
    })
}

//注册到原型 全局使用get
// Vue.prototype.get = get;