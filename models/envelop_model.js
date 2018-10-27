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
        return db.query("insert into envelop values(?,?,?,?,?)",[item.cname,item.Address,item.phone,item.requirements,item.fk_email_id],callback);
    },

    getEnvelopByCname:function(cname,callback)
    {
        return db.query("select * from envelop where cname=?",[cname],callback);
    },

    updateEnvelop:function(cname,item,callback)
    {
        return db.query("update envelop set Address=?,phone=?,requirements=?,fk_email_id=? where cname=?",[item.Address,item.phone,item.requirements,item.fk_email_id,cname],callback);
    },

    delEnvelop:function(cname,callback){
        return db.query("delete from envelop where cname=?",[cname],callback);
    },

};

module.exports=envelop;