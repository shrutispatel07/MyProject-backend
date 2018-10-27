var envelop=require('../models/envelop_model');
var express=require('express');
var router=express.Router();


router.get("/:cname",function(req,res,next){
    envelop.getEnvelopByCname(req.params.cname,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;