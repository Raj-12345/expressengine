
const mongoose=require('mongoose');
const express=require('express');
const users=require('../modles/users.models');
const message=require('../message');
module.exports.usersregister=(req,res,next)=>
{
    const data= JSON.parse(req.body.toString());

  
       var user=new users(
        {
          
            user_name:data.user_name,
            user_email:data.user_email,
            user_password:data.user_password
        }
               );
               
         user.save( (error,result)=>{
             if(error)
             {
            res.status(500).json( {status:"failure", error:error.message});
             }
             else
             {
          res.status(200).json({status:"sucess",data:result});
               }
                              }
        
              
                      );

}

module.exports.userslogin=(req,res,next)=>
{
    const data= JSON.parse(req.body.toString());

    users.find({ user_name:data.user_name,user_password:data.user_password},(error,result)=>{
        
        if(result.length>0)
        {
        res.status(200).json({status:"sucess",message:message.sucess});
        }
        else
        {
            res.status(500).json({status:"failure",message:message.failure});
        }
                              });


}



module.exports.get=(req,res,next)=>
{
    

    users.find((error,result)=>{
        
        if(result.length>0)
        {
        res.status(200).json({status:"sucess",message:message.sucess,data:result});
        }
        else
        {
            res.status(500).json({status:"failure",message:"data not found"});
        }
                              });


}