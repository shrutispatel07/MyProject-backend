var visitingcard=require('../models/visitingcards_model');
var express=require('express');
var router=express.Router();


router.get("/:cname",function(req,res,next){
    visitingcard.getCardByCname(req.params.cname,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;