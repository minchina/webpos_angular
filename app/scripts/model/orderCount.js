function count(){

}
count.change_format=function(){
    return count.get_no_null_messages();
};

count.get_no_null_messages=function(){
    var messages = count.get_all_messages();
    return _.filter(messages,function(obj){return obj.count != 0});

};
count.get_all_messages = function(){
    return JSON.parse(localStorage['haveItems']);
};

count.get_total_cart=function(){
    return JSON.parse(localStorage["totalCount"]);
};

count.total_price=function(){
    var total_price = 0;
    var Goods = count.change_format();
    _.each(Goods,function(good){total_price += (good.price*good.count)});
    return total_price.toFixed(2);
};

count.gift_price=function(){
    var total_price=0;
    var gifts=Item.get_gift();
    _.each(gifts,function(good){total_price += (good.price*good.savecount)});
    return total_price.toFixed(2);
};

dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
};


function get_data(){
    var currentDate = new Date();
    var year = dateDigitToString(currentDate.getFullYear());
    var month = dateDigitToString(currentDate.getMonth() + 1);
    var date = dateDigitToString(currentDate.getDate());
    var hour = dateDigitToString(currentDate.getHours());
    var minute = dateDigitToString(currentDate.getMinutes());
    var second = dateDigitToString(currentDate.getSeconds());
    return  year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
}

