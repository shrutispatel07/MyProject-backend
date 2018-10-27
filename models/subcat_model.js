var db=require('../dbconnection');

var subcategory={
    getAllSubCat:function(callback){
        return db.query("select * from subcat_tbl",callback);
    },

    getSubCatByCatId:function(sname,callback)
    {
        return db.query("select s.*,c.* from subcat_tbl s,category_tbl c where c.category_id=s.fk_cat_id and s.subcat_name=?",[sname],callback);
    },
    addSubCat:function(item,callback){
        return db.query("insert into subcat_tbl values(?,?,?)",[item.subcat_id,item.subcat_name,item.fk_cat_id],callback);
    },

    getSubCatById:function(id,callback)
    {
        return db.query("select * from subcat_tbl where subcat_id=?",[id],callback);
    },

    updateSubCat:function(id,item,callback){
            return db.query("update subcat_tbl set subcat_name=? where subcat_id=?",[item.subcat_name,id],callback);
    },

    delSubCat:function(id,callback){
        return db.query("delete from subcat_tbl where subcat_id=?",[id],callback);
    },

};

module.exports=subcategory;