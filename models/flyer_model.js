var db=require('../dbconnection');

var flyer={
    getAllFlyer:function(callback){
        return db.query("select * from flyer",callback);
    },

    getFlyerByUserId:function(id,callback)
    {
        return db.query("select f.*,u.* from flyer f,user_tbl u where u.email_id=f.fk_email_id And u.email_id=?",[id],callback);
    },
    addFlyer:function(item,callback){
        return db.query("insert into flyer values(?,?,?,?,?,?,?,?)",[item.id,item.cname,item.hline,item.phone,item.Address,item.offer,item.requirements,item.fk_email_id],callback);
    },

    getFlyerById:function(id,callback)
    {
        return db.query("select * from flyer where id=?",[id],callback);
    },

    updateFlyer:function(id,item,callback)
    {
        return db.query("update flyer set cname=?,hline=?,phone=?,Address=?,offer=?,requirements=?,fk_email_id=? where id=?",[item.cname,item.hline,item.phone,item.Address,item.offer,item.requirements,item.fk_email_id,id],callback);
    },

    delFlyer:function(id,callback){
        return db.query("delete from flyer where id=?",[id],callback);
    },

};

module.exports=flyer;