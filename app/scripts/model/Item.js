function Item(barcode, name, unit, price,type,count,savecount) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.type = type;
    this.count = count || 0;
    this.savecount = savecount || 0;
}

Item.get_promotion=function(barcode,count){
    if(_.find(loadPromotions()[0].barcodes,function(message){return message==barcode})){
        return Math.floor(count/3);
    }
};

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

Item.init_date=function(){
    localStorage.getItem('haveItems') || (localStorage.haveItems = JSON.stringify({}));
    localStorage.getItem('totalCount') || (localStorage.totalCount = JSON.stringify(0));
};