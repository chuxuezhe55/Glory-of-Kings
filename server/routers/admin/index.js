const { query } = require('express')

module.exports= app =>{   //作为函数去接受一个对象？？ 在index.js server中使用
  
   const jwt=require('jsonwebtoken')

   const express=require('express')

   const assert=require('http-assert')

   const AdminUser=require('../../models/AdminUser')
   const router= express.Router(
   {  mergeParams:true}//合并 params参数
   ) //子路由挂载
//创建资源
   router.post('/',async (req,res) => {
  
     const model =await req.Model.create(req.body)
   
     res.send(model) //功能通知客户端已经完成
   })
   //修改资源
   router.put('/:id',async (req,res) => {
    const model =await req.Model.findByIdAndUpdate(req.params.id,req.body)
  
    res.send(model)
  })
  router.delete('/:id',async (req,res) => {
  await req.Model.findByIdAndDelete(req.params.id,req.body)

  
    res.send({
      success:true
    })
  })
  //资源列表接口
   router.get('/',async (req,res) => {
    const queryOptions={}
    if (req.Model.modelName==='Category'){
      queryOptions.populate='parent'
    }
    const items =await req.Model.find().setOptions(queryOptions).limit(10)
  
    res.send(items) //功能通知客户端已经完成
  })
  //资源详情
  router.get('/:id',async (req,res) => {
    const model  =await req.Model.findById(req.params.id)
  
    res.send(model) 
  })
   app.use('/admin/api/rest/:resource',router) 
   const multer=require('multer')
   const upload=multer({ dest:__dirname + '/../../uploads'})
   app.post('/admin/api/upload',upload.single('file'),async(req,res)=>{
     const file=req.file
     file.url=`http://localhost:3000/uploads/${file.filename}`
     res.send(file)
   })
   app.post('/admin/api/login',async(req,res)=>{
    const {username,password}=req.body
   
    const user=await AdminUser.findOne({username:username}).select('+password')//是没有找到还是没有？？
    // assert(user,442,'用户不存在')//没办法用
    if(!user){
      return res.status(422).send({
        message:'用户不存在'
      })

    }
    const isValid=require('bcrypt').compareSync(password,user.password)
    if(!isValid){
      return res.status(422).send({
        message:'密码错误'
      })
    }
    //3.返回token
    const jwt=require('jsonwebtoken')
    const token=jwt.sign({id:user._id},app.get('secret'))
    res.send({token})

   })

  // 错误处理函数
  app.use(async(err,req,res,next)=>{
    res.status(err.status).send({
      message:err.message
    })
  })
}