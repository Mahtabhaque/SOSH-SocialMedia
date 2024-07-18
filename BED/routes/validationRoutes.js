const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const postModel = require("../models/postModel")

authRoutes.get('/validateToken',async(req,res)=>{
    let authHeaders = req.headers.authorization;

    let token = authHeaders && authHeaders.split(" ")[1];

    // console.log(token);

   try {
    let result = jwt.verify(token,process.env.ACCESS_SECRET_KEY)

    let postData = await postModel.find();
    console.log(postData);

    res.json({result: result , data: postData, status:true})

   } catch (error) {
    console.log(error);
    res.json({msg:"Session Expired", status:false})
   }

})

authRoutes.get("/validate", (req,res)=>{
    let authHeaders = req.headers.authorization;
    let token = authHeaders && authHeaders.split(" ")[1];

    try {
        let result = jwt.verify(token,process.env.ACCESS_SECRET_KEY);
        res.json({msg:"Session Valid",status:true , data:result.user_name})
    } catch (error) {
        res.json({msg:"Session Expired", status:false})
    }
})

module.exports = authRoutes;