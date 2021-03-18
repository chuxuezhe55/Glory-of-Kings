//模型？？

const mongoose=require('mongoose')



 const schema =new mongoose.Schema({ //定义模型字段
    name: String,
    parent:{type: mongoose.SchemaTypes.ObjectId,ref:'Category'}
})

   module.exports = mongoose.model('Category',schema) 