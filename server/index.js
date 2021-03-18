const express =require("express")

const app=express()

app.set('secret','asdasd2156asd')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

 require('./routers/admin')(app)
 require('./plugins/db')(app)//导致出错连接数据库的问题啊



app.listen(3000,()=>{
    console.log('http://localhost:3000')
    //端口配置 后面写路由 
})