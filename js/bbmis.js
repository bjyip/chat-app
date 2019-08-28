/**
 * Created by Wonderchief on 2017/1/12.
 */
var service = "http://test.legle.cc:8080/lovesudy";
// var service = "http://new-h5-love-chat.oss-cn-shenzhen.aliyuncs.com/app";

function getQueryString(){

    var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+","g"));

    if(result == null){

        return "";

    }

    for(var i = 0; i < result.length; i++){
        result[i] = result[i].substring(1);
    }

    return result;

}

//根据QueryString参数名称获取值

function getQueryStringByName(name){

    var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));

    if(result == null || result.length < 1){
        return "";
    }

    return result[1];

}

//根据QueryString参数索引获取值

function getQueryStringByIndex(index){

    if(index == null){

        return "";

    }

    var queryStringList = getQueryString();

    if (index >= queryStringList.length){

        return "";

    }

    var result = queryStringList[index];

    var startIndex = result.indexOf("=") + 1;

    result = result.substring(startIndex);

    return result;

}
//兼容字段不存在时报错
// function haha(element){
//     if(typeof element == 'undefined'){
//         return false;
//     }else{
//         return element;
//     }
// }
