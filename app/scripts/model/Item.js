function Item(barcode, name, unit, price,type,count,savecount) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.type = type;
    this.count = count || 0;
    this.savecount = savecount || 0;
}
Item.prototype.single_price=function(){
    return 1;

};

Item.add_good_item=function(good_name){
    Item.update_have_items("add",good_name);
    Item.plus_cart_message();

};
Item.update_have_items=function(type,good_name){
    var items = count.get_all_messages();
    var good_barcode = Item.get_barcode_by_name(good_name);
    if(type=="add"){
        _.find(items,function(item){return item.name==good_name}).count++;
    }
    if(type=="minus"){
        _.find(items,function(item){return item.name==good_name}).count--;
    }
    _.find(items,function(item){return item.name==good_name}).savecount= Item.get_promotion(good_barcode,_.find(items,function(item){return item.name==good_name}).count) || 0;
    localStorage.haveItems = JSON.stringify(items);
};

Item.plus_cart_message=function(){
    var count = Item.get_totalCount();
    count++;
    localStorage.setItem("totalCount",count);
};
Item.minus_cart_message=function(){
    var count = Item.get_totalCount();
    count--;
    localStorage.setItem("totalCount",count);
};

Item.get_barcode_by_name = function(good_name){
    var items = count.get_all_messages();
    return _.find(items,function(item){return item.name==good_name}).barcode;

};

Item.get_totalCount=function(){
    return parseInt(localStorage.getItem("totalCount"));
};


Item.init_date=function(){
    localStorage.getItem('haveItems') || (localStorage.haveItems = JSON.stringify(Item.get_good_items()));
    localStorage.getItem('totalCount') || (localStorage.totalCount = JSON.stringify(0));
};

Item.get_good_items=function(){
    return loadAllItems();
};
Item.get_promotion=function(barcode,count){
    if(_.find(loadPromotions()[0].barcodes,function(message){return message==barcode})){
        return Math.floor(count/3);
    }
};
//////////////////////////////////////////////////


Item.display_small_count=function(goods,good_name){
    var good = _.find(goods,function(good){return good.name==good_name});
    try{
        var test = good.savecount;
    }
    catch(err){
        return 0;
    }
    if(test==0){
        return good.price*good.count+'元';
    }
    return good.price * (good.count-good.savecount)+'元'+'(原价：'+good.price*good.count+'元)';
};

Item.get_gift=function(){
    var buy_goods = count.get_no_null_messages();
    return _.filter(buy_goods,function(good){return good.savecount !=0});

};



