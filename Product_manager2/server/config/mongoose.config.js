const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost/productDB", {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('connected to db')})
.catch((err)=>{
    console.log("problem with connectiing the db. The error:", err)});