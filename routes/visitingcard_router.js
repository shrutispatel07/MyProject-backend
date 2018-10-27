var visitingcard=require('../models/visitingcards_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    visitingcard.getAllCard(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
 
    visitingcard.addCard(req.body,function(err,count){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
      }
      });
     });


     router.delete('/:cname',function(req,res,next){
 
        visitingcard.delCard(req.params.cname,function(err,count){
         
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

         router.put('/:cname',function(req,res,next){
 
            visitingcard.updateCard(req.params.cname,req.body,function(err,rows){
             
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