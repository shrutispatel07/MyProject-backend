var db=require('../dbconnection');

var visitingcard={
    getAllCard:function(callback){
        return db.query("select * from visitingcard",callback);
    },

    getCardByUserId:function(id,callback)
    {
        return db.query("select v.*,u.* from visitingcard v,user_tbl u where u.email_id=v.fk_email_id And u.email_id=?",[id],callback);
    },
    addCard:function(item,callback){
        return db.query("insert into visitingcard values(?,?,?,?,?,?,?,?,?,?)",[item.id,item.cname,item.ownername,item.tagline,item.phone,item.Address,item.email,item.web,item.requirements,item.fk_email_id],callback);
    },

    getCardById:function(id,callback)
    {
        return db.query("select * from visitingcard where id=?",[id],callback);
    },

    updateCard:function(id,item,callback){
            return db.query("update visitingcard set cname=?,ownername=?,tagline=?,phone=?,Address=?,email=?,web=?,requirements=?,fk_email_id=? where id=?",[item.cname,item.ownername,item.tagline,item.phone,item.Address,item.email,item.web,item.requirements,item.fk_email_id,id],callback);
    },

    delCard:function(id,callback){
        return db.query("delete from visitingcard where id=?",[id],callback);
    },

};

module.exports=visitingcard;