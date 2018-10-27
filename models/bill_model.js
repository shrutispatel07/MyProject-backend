var db=require('../dbconnection');

var bill={
    getAllBill:function(callback){
        return db.query("select * from bill_tbl",callback);
    },

    getOrderByUserId:function(id,callback)
    {
     return db.query("select o.*,u.* from order_tbl o,user_tbl u where u.email_id=o.fk_email_id and o.order_id=?",[id],callback);
    },
    addOrder:function(item,callback){
        return db.query("insert into order_tbl values(?,?,?,?,?,?,?)",[item.order_id,item.qty,item.price,item.status,item.date,item.fk_email_id,item.fk_item_id],callback);
    },

    getOrderById:function(id,callback)
    {
        return db.query("select * from order_tbl where order_id=?",[id],callback);
    },

    updateOrder:function(id,item,callback){
            return db.query("update order_tbl set qty=?,price=?,status=?,date=?,fk_email_id=?,fk_item_id=? where order_id=?",[item.qty,item.price,item.status,item.date,item.fk_email_id,item.fk_item_id,id],callback);
    },

    delOrder:function(id,callback){
        return db.query("delete from order_tbl where order_id=?",[id],callback);
    },

};

module.exports=order;