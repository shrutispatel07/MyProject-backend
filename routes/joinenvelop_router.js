var express = require('express');
var router = express.Router();
var envelopjoin=require('../models/envelop_model');
router.get('/:id',function(req,res,next){
    envelopjoin.getEnvelopByUserId(req.params.id,function(err,rows){
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