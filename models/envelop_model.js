var db=require('../dbconnection');

var envelop={
    getAllEnvelop:function(callback){
        return db.query("select * from envelop",callback);
    },

    getEnvelopByUserId:function(id,callback)
    {
        return db.query("select e.*,u.* from envelop e,user_tbl u where u.email_id=e.fk_email_id And u.email_id=?",[id],callback);
    },
    addEnvelop:function(item,callback){
        return db.query("insert into envelop values(?,?,?,?,?,?)",[item.id,item.cname,item.Address,item.phone,item.requirements,item.fk_email_id],callback);
    },

    getEnvelopById:function(id,callback)
    {
        return db.query("select * from envelop where id=?",[id],callback);
    },

    updateEnvelop:function(id,item,callback)
    {
        return db.query("update envelop set cname=?,Address=?,phone=?,requirements=?,fk_email_id=? where id=?",[item.cname,item.Address,item.phone,item.requirements,item.fk_email_id,id],callback);
    },

    delEnvelop:function(id,callback){
        return db.query("delete from envelop where id=?",[id],callback);
    },

};

module.exports=envelop;