var category=require('../models/category_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    category.getAllCat(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
 
    category.addCat(req.body,function(err,count){
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
 
        category.delCat(req.params.id,function(err,count){
         
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
 
            category.updateCat(req.params.id,req.body,function(err,rows){
             
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