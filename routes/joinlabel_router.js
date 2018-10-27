var express = require('express');
var router = express.Router();
var label=require('../models/label_model');
router.get('/:id',function(req,res,next){
    label.getLabelByUserId(req.params.id,function(err,rows){
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