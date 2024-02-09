const express=require('express');
const app=express();
const port=8000;
const pool=require('./db');
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});