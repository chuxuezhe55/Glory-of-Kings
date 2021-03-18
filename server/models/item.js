//模型？？

const mongoose=require('mongoose')



 const schema =new mongoose.Schema({ //定义模型字段
    name: String,
    icon:{type:String}
})

   module.exports = mongoose.model('item',schema) 