var db=require('../dbconnection');

var item={
    getAllItem:function(callback){
        return db.query("select * from item_tbl",callback);
    },

    getItemByCatId:function(iname,callback)
    {
        return db.query("select i.*,c.* from item_tbl i,category_tbl c where c.category_id=i.fk_category_id and i.item_name=?",[iname],callback);
    },
    addItem:function(item,callback){
        return db.query("insert into item_tbl values(?,?,?,?,?,?,?,?,?)",[item.item_id,item.item_name,item.fk_category_id,item.price,item.qty,item.description,item.item_img,item.size,item.colours],callback);
    },

    getItemById:function(id,callback)
    {
        return db.query("select * from item_tbl where item_id=?",[id],callback);
    },

    updateItem:function(id,item,callback){
            return db.query("update item_tbl set item_name=?,fk_category_id=?,price=?,qty=?,description=?,item_img=?,size=?,colours=? where item_id=?",[item.item_name,item.fk_category_id,item.price,item.qty,item.description,item.item_img,item.size,item.colours,id],callback);
    },

    delItem:function(id,callback){
        return db.query("delete from item_tbl where item_id=?",[id],callback);
    },

};

module.exports=item;