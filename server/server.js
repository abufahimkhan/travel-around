const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const model=require('./PlaceModel')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/travelaround')

app.get('./getData',(request,response)=>{
    model.find()
    .then(places=>response.json(places))
    .catch(err=>console.log(err));
});

app.listen(5173,()=>{
    console.log("Server is Running");
})