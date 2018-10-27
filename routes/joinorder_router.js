var express = require('express');
var router = express.Router();
var orderjoin=require('../models/order_model');
router.get('/:id',function(req,res,next){
    orderjoin.getOrderByUserId(req.params.id,function(err,rows){
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