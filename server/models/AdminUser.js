//模型？？

const mongoose=require('mongoose')



 const schema =new mongoose.Schema({ //定义模型字段
    username: String,
    select:false,
    password:{type:String,set(val){
       return require('bcrypt').hashSync(val,10)
    }}
   
})

   module.exports = mongoose.model('AdminUser',schema) 