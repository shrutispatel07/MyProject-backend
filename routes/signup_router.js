var express = require('express');
 var router = express.Router();
 var Signup=require('../models/user_model');
 
router.post('/',function(req,res,next){
 
   Signup.addUser(req.body,function(err,rows){
    if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }  
    
   });
  });

  router.put('/',function(req,res,next){
    Signup.updatepass(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            console.log(req.body);
            res.json(rows);
        }
    });
});

router.get('/:id',function(req,res,next){
    if(req.params.id)
    {
        Signup.getUserById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
    Signup.getAllusers(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
    }
    });

 module.exports=router;