var express = require('express');
var router = express.Router();
var subcatjoin=require('../models/subcat_model');
router.get('/:sname',function(req,res,next){
    subcatjoin.getSubCatByCatId(req.params.id,function(err,rows){
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