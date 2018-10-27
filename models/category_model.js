var db=require('../dbconnection');

var category={
    getAllCat:function(callback){
        return db.query("select * from category_tbl",callback);
    },

    getCatById:function(id,callback)
    {
        return db.query("select * from category_tbl where category_id=?",[id],callback);
    },
    addCat:function(item,callback){
        return db.query("insert into category_tbl values(?,?)",[item.category_id,item.category_name],callback);
    },

    updateCat:function(id,item,callback){
            return db.query("update category_tbl set category_name=? where category_id=?",[item.category_name,id],callback);
    },

    delCat:function(id,callback){
        return db.query("delete from category_tbl where category_id=?",[id],callback);
    },

    delMulCat:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].category_id;
        }
        return db.query("delete from category_tbl where category_id in (?)",[delarr],callback);
    }

};

module.exports=category;