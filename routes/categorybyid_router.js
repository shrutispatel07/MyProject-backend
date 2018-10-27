var category=require('../models/category_model');
var express=require('express');
var router=express.Router();


router.get("/:id",function(req,res,next){
    category.getCatById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    category.delMulCat(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;