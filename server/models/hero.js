//模型？？

const mongoose=require('mongoose')



 const schema =new mongoose.Schema({ //定义模型字段
    name: String,
    avatar:{type:String},
    title:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
   scores:{
      difficult:{type:Number},
      skills:{type:Number},
      attack:{type:Number},
      survive:{type:Number},

   },
   skills:[{
      icon:{type:String},
      name:{type:String},
      description:{type:String},
      tips:{type:String}
     
   }],
   items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'item'}],
   items2:[{type:mongoose.SchemaTypes.ObjectId,ref:'item'}],
   usageTips:{type:String},
   battleTips:{type:String},
   teamTips:{type:String},
   partners:[{
      hero:{type:mongoose.SchemaTypes.ObjectId,ref:'hero'},
      description:{type:String}
   }],
})

   module.exports = mongoose.model('hero',schema) 