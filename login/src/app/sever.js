
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = new express()
const users = require('./schema/user')


app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json())
app.use('/login',(req,res)=>{
  console.log(req.body)
  let {username,password}=req.body
  users.findOne({
    username,
    password
  }).then((user)=>{
    if(user){
      res.send({
        errno:0
      })
    }else{
      res.send({
        errno:1
      })
    }
  })
})
app.use('/register',(req,res)=>{
  console.log(req.body);
  let {username,password}=req.body
  users.findOne({
    username
  }).then((user)=>{
    if(user){
      res.send({
        errno:1
      })
    }else{
    res.send({
      errno:0
    })}
    new users({
      username,
      password,
      age:~~(Math.random()*40+10)
    }).save()
  })
})
app.get('/userlist',(req,res)=>{
  users.find().then(users=>{
    res.send(users)
  })
})
app.listen(3343,()=>{
  console.log("监听3343端口成功")
})
mongoose
  .connect('mongodb://localhost:27017/Vuex',{userNewUrlParser:true})
  .then(()=>{console.log('数据库连接成功');})
  .catch(()=>{console.log('数据库连接失败');})


