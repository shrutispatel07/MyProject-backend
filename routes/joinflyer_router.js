var express = require('express');
var router = express.Router();
var flyerjoin=require('../models/flyer_model');
router.get('/:id',function(req,res,next){
    flyerjoin.getFlyerByUserId(req.params.id,function(err,rows){
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