var express=require('express');
var router=express.Router();
var user=require('../models/user_model');
router.get('/',function(req,res,next){
    user.getAllusers(function(err,rows){
        if(err){
            res.json(err);
          }
          else
          {
            res.json(rows);
          }
    });
});
router.post('/',function(req,res,next){
    user.LogIn(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else
      {
        res.json(rows);
      }
    });
  });

  router.delete('/:id', function(req, res, next) {
    user.deleteUser(req.params.id,function(err,rows){
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

  router.put('/:id', function(req, res, next) {
    user.updateUser(req.params.id,req.body,function(err,rows){
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
module.exports=router;