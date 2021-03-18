//模型？？

const mongoose=require('mongoose')



 const schema =new mongoose.Schema({ //定义模型字段
    name: String,
     items:[{
      image:{ type:String},
      url:{type:String}
   }]
})

   module.exports = mongoose.model('ad',schema) 