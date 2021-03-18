
const mongoose=require('mongoose')



const schema =new mongoose.Schema({ //定义模型字段
   title: {type:String},
   categories:[{type: mongoose.SchemaTypes.ObjectId,ref:'Category'}],
   body:{type:String}
})

  module.exports = mongoose.model('article',schema) 