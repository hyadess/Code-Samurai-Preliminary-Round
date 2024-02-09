const express=require('express');
const app=express();
const port=8000;
const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

module.exports = {server};