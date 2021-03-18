module.exports=options =>{
    const jwt=require('jsonwebtoken')

    const AdminUser=require('../models/AdminUser')
 
    const assert=require('http-assert')
    return async(req,res,next)=>{
        const token=String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'token')
       
        const {id}=jwt.verify(token,req.app.get('secret'))
        assert(id,401,'jwt id')
       req.user=await  AdminUser.findById(id)
      assert(user,401,'用户不存在')
        
        await next()
      }
    
}