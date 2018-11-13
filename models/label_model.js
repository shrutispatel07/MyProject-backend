var db=require('../dbconnection');

var label={
    getAllLabel:function(callback){
        return db.query("select * from label",callback);
    },

    getLabelByUserId:function(id,callback)
    {
        return db.query("select l.*,u.* from label l,user_tbl u where u.email_id=l.fk_email_id And u.email_id=?",[id],callback);
    },
    addLabel:function(item,callback){
        return db.query("insert into label values(?,?,?,?,?,?,?)",[item.id,item.cname,item.ownername,item.Address,item.phone,item.requirements,item.fk_email_id],callback);
    },

    getLabelById:function(id,callback)
    {
        return db.query("select * from label where id=?",[id],callback);
    },

    updateLabel:function(id,item,callback)
    {
        return db.query("update label set cname=?,ownername=?,Address=?,phone=?,requirements=?,fk_email_id=? where id=?",[item.cname,item.ownername,item.Address,item.phone,item.requirements,item.fk_email_id,id],callback);
    },

    delLabel:function(id,callback){
        return db.query("delete from label where id=?",[id],callback);
    },

};

module.exports=label;