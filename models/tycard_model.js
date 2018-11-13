var db=require('../dbconnection');

var tycard={
    getAllTycard:function(callback){
        return db.query("select * from tycard",callback);
    },

    getTycardByUserId:function(id,callback)
    {
        return db.query("select t.*,u.* from tycard t,user_tbl u where u.email_id=t.fk_email_id And u.email_id=?",[id],callback);
    },
    addTycard:function(item,callback){
        return db.query("insert into tycard values(?,?,?,?,?)",[item.id,item.cname,item.yourtext,item.requirements,item.fk_email_id],callback);
    },

    getTycardById:function(id,callback)
    {
        return db.query("select * from tycard where id=?",[id],callback);
    },

    updateTycard:function(id,item,callback)
    {
        return db.query("update tycard set cname=?,yourtext=?,requirements=?,fk_email_id=? where id=?",[item.cname,item.yourtext,item.requirements,item.fk_email_id,id],callback);
    },

    delTycard:function(id,callback){
        return db.query("delete from tycard where id=?",[id],callback);
    },

};

module.exports=tycard;