var label=require('../models/label_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    label.getAllLabel(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
 
    label.addLabel(req.body,function(err,count){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
      });
     });


     router.delete('/:id',function(req,res,next){
 
        label.delLabel(req.params.id,function(err,count){
         
        if(err)
          {
          res.json(err);
          }
          else
          {
          res.json(count);
          }
         
        });
         });

         router.put('/:id',function(req,res,next){
 
            label.updateLabel(req.params.id,req.body,function(err,rows){
             
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