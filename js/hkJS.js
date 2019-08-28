
if(!window.APPJS){
    window.sendDataToIOS = function(method,args){
        var ios_str = "ios:" + method;
        for(i=0;i<args.length;i++){
            ios_str += "|" + args[i];
        }
        //alert(ios_str);
        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("src", ios_str);
        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
        return null;
    }

    window.dataFromAPP = function(ret,method){
      method = 'return_' + method;
      var fun = window[method] || $('#frm_'+ tab)[0].contentWindow[method];
      if(fun){
        fun(ret);
      }else{
        return;
      }
    }

    window.APPJS = {
        setTitleBarColor: function(){
            //var args = arguments;//Array.prototype.slice.call(arguments);
            return sendDataToIOS('setTitleBarColor',arguments);
        },
        saveData: function(){
            return sendDataToIOS('saveData',arguments);
        },
        initDataWithArray: function(){
            return sendDataToIOS('initDataWithArray',arguments);
        },
        leftBtnClick: function(){
            return sendDataToIOS('leftBtnClick',arguments);
        },
        rightBtnClick: function(){
            return sendDataToIOS('rightBtnClick',arguments);
        },
        post_action: function(){
            return sendDataToIOS('post_action',arguments);
        },
        leftBtnClick: function(){
            return sendDataToIOS('leftBtnClick',arguments);
        },
        pay_alert: function(){
            return sendDataToIOS('pay_alert',arguments);
        },
        html_jump_href: function(){
            return sendDataToIOS('html_jump_href',arguments);
        },
        msg_alert: function(){
            return sendDataToIOS('msg_alert',arguments);
        },
        post_photo: function(){
            return sendDataToIOS('post_photo',arguments);
        },
        notice_headImage: function(){
            return sendDataToIOS('notice_headImage',arguments);
        },
        notice_name: function(){
            return sendDataToIOS('notice_name',arguments);
        },
        bageNum: function(){
            return sendDataToIOS('bageNum',arguments);
        },
        return_sureMsg: function(){
            return sendDataToIOS('return_sureMsg',arguments);
        },
        leftback_rootvc: function(){
            return sendDataToIOS('leftback_rootvc',arguments);
        },
        setChatNavWithData: function(){
            return sendDataToIOS('setChatNavWithData',arguments);
        },
        return_keyboardWillShow: function(){
            return sendDataToIOS('return_keyboardWillShow',arguments);
        },
        return_keyboardWillHide: function(){
            return sendDataToIOS('return_keyboardWillHide',arguments);
        },
        openSettingsURLString: function(){
            return sendDataToIOS('openSettingsURLString',arguments);
        },
        tipMsg_alert: function(){
            return sendDataToIOS('tipMsg_alert',arguments);
        },
        highClassSearch: function(){
            return sendDataToIOS('highClassSearch',arguments);
        },
        bottom_alert: function(){
            return sendDataToIOS('bottom_alert',arguments);
        },
        action_info: function(){
            return sendDataToIOS('action_info',arguments);
        },
        bottom_alertWithJsonArray: function(){
            return sendDataToIOS('bottom_alertWithJsonArray',arguments);
        },
        getAPPInfo: function(){
            return sendDataToIOS('getAPPInfo',arguments);
        },
        getNewVersionAPP: function(){
            return sendDataToIOS('getNewVersionAPP',arguments);
        },
        hud_loading: function(){
            return sendDataToIOS('hud_loading',arguments);
        },
        hud_hide: function(){
            return sendDataToIOS('hud_hide',arguments);
        },
        seach_param: function(){
            return sendDataToIOS('seach_param',arguments);
        },
        reload_main: function(){
            return sendDataToIOS('reload_main',arguments);
        },
        mineBadgeNum: function(){
            return sendDataToIOS('mineBadgeNum',arguments);
        },
        get_searchSetParam: function(){
            return sendDataToIOS('get_searchSetParam',arguments);
        },
        copyMsg: function(){
            return sendDataToIOS('copyMsg',arguments);
        },
        exitButtom: function(){
            return sendDataToIOS('exitButtom',arguments);
        },
        upHeadImgTest: function(){
            return sendDataToIOS('upHeadImgTest',arguments);
        },
        webGetSysLanguage: function(){
            return sendDataToIOS('webGetSysLanguage',arguments);
        }


    };
}

function getInterface(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isiOS)
        return window.APPJS;
    else if(isAndroid && window.android!=null && typeof(window.android)!="undefined")
        return window.android;
}
