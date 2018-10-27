var db=require('../dbconnection');
var User={
    getAllusers:function(callback)
    {
        return db.query("select * from user_tbl",callback);
    },
    LogIn:function(item,callback)
    {
        return db.query("select * from user_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },
    getUserById:function(id,callback)
    {
        return db.query("select * from user_tbl where email_id=?",[id],callback);
    },
    addUser:function(item,callback)
    {
        return db.query("insert into user_tbl values(?,?,?,?,?,?,?,?,?)",[item.email_id,item.password,item.name,item.address,item.mobile_no,item.state,item.gender,item.country,item.type],callback);
    },
    deleteUser:function(id,callback)
    {
        return db.query("delete from user_tbl where email_id=?",id,callback);
    },
    updateUser:function(id,item,callback)
    {
        return db.query("update user_tbl set name=?,address=?,mobile_no=?,state=?,gender=?,country=?,type=? where email_id=?",[item.name,item.address,item.mobile_no,item.state,item.gender,item.country,item.type,id],callback);
    },
    updatepass:function(item,callback){
        return db.query('update user_tbl set password=? where email_id=?',[item.password,item.email_id],callback);
     }

}

module.exports=User;