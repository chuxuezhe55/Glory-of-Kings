import axios from 'axios'
import Vue from 'vue'
import router from '../admin/src/router/index'//引用组件

//功能：创建根路径是为了减少代码的书写 直接写http就可以带上前缀了

const http=axios.create({
    baseURL:'http://localhost:3000/admin/api'//用axios创建了跟路径？？
})
//请求拦截器 没有token不能通过
http.interceptors.request.use(function(config){
    if(localStorage.token){
        config.headers.Authorization= 'Bearer ' + localStorage.token
        
    }
    return config
 
})

//响应拦截器 对401的错误调回登录页
 http.interceptors.response.use(res=>{
    return res
},
err=>{
    if(err.response.data.message){
        Vue.prototype.$message({
            type:'error',
            message:err.response.data.message
        })
        if(err.response.status===401){
            router.push('/login')
        }
        
    }

    return Promise.reject(err)
})


export default http