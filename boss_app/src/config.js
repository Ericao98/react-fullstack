// 使用axios拦截器

import axios from 'axios'
import { Toast } from 'antd-mobile'
// 必须引入此样式！否则无法使用antd-mobile中定义的样式
import 'antd-mobile/dist/antd-mobile.css'

axios.interceptors.request.use(function(config) {
    Toast.loading('loading...', 0);
    return config;
})

axios.interceptors.response.use(function(response) {
    Toast.hide();
    return response;
})
