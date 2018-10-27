var express = require('express');
var router = express.Router();
var visitingcardjoin=require('../models/visitingcards_model');
router.get('/:id',function(req,res,next){
    visitingcardjoin.getCardByUserId(req.params.id,function(err,rows){
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