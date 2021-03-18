module.exports = app  =>{   //作为函数去接受一个对象？？ 在index.js server中使用
  
    const mongoose=require('mongoose')
    
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
     
    })//但是是为什么？？   不逐步去分解错误的来源也挺不错的方法  但是根据编译器的提示去网上却找不到什么信息  还是自己开了 数据库然后才可以的 尴尬
   
   
 } 