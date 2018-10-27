var express = require('express');
var router = express.Router();
var itemjoin=require('../models/item_model');
router.get('/:sname',function(req,res,next){
    itemjoin.getItemByCatId(req.params.id,function(err,rows){
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