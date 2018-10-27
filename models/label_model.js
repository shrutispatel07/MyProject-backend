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
        return db.query("insert into label values(?,?,?,?,?,?)",[item.cname,item.ownername,item.Address,item.phone,item.requirements,item.fk_email_id],callback);
    },

    getLabelByCname:function(cname,callback)
    {
        return db.query("select * from label where cname=?",[cname],callback);
    },

    updateLabel:function(cname,item,callback)
    {
        return db.query("update label set ownername=?,Address=?,phone=?,requirements=?,fk_email_id=? where cname=?",[item.ownername,item.Address,item.phone,item.requirements,item.fk_email_id,cname],callback);
    },

    delLabel:function(cname,callback){
        return db.query("delete from label where cname=?",[cname],callback);
    },

};

module.exports=label;