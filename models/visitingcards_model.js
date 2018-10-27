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
        return db.query("insert into visitingcard values(?,?,?,?,?,?,?,?,?)",[item.cname,item.ownername,item.tagline,item.phone,item.Address,item.email,item.web,item.requirements,item.fk_email_id],callback);
    },

    getCardByCname:function(cname,callback)
    {
        return db.query("select * from visitingcard where cname=?",[cname],callback);
    },

    updateCard:function(cname,item,callback){
            return db.query("update visitingcard set ownername=?,tagline=?,phone=?,Address=?,email=?,web=?,requirements=?,fk_email_id=? where cname=?",[item.ownername,item.tagline,item.phone,item.Address,item.email,item.web,item.requirements,item.fk_email_id,cname],callback);
    },

    delCard:function(cname,callback){
        return db.query("delete from visitingcard where cname=?",[cname],callback);
    },

};

module.exports=visitingcard;