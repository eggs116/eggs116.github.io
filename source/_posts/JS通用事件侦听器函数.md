---
title: JS通用事件侦听器函数
date: 2018-10-22 15:11:11
tags: JS
urlname: JS_addEventListener_event
categories: JS
keyword: 
    - JS
    - event
    - addEventListener
    - attachEvent
description: 介绍了JS通用的事件侦听器函数，兼容IE和W3C浏览器，同时也列举了阻止冒泡和默认事件的方法
---

```JS
// JS通用事件侦听器函数
    var EventUtil = {
        // 页面加载完成之后执行
        readyEvent: function (fn) {
            if (document.addEventListener) {//标准浏览器
                document.addEventListener('DOMContentLoaded', function () {
                    document.removeEventListener('DOMContentLoaded', arguments.callee, false);//注销事件，避免反复触发
                    fn();// 执行函数
                }, false);
            } else if (document.attachEvent) {// IE浏览器
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState == 'complete') {//加载完成
                        document.detachEvent('onreadystatechange', arguments.callee);
                        fn();//执行函数
                    }
                });
            }
        },
        /*
     *attachEvent可以使用匿名函数，但这样之后，detachEvent将无法卸载它。
     *detachEvent所卸载的函数必须使用函数名。
     */
        //添加事件
        addEvent:function(element,type,fn){
            if(element.addEventListener){// 标准浏览器
                element.addEventListener(type,fn,false);//事件类型、需要执行的函数、是否捕获
            }else if(element.attachEvent){//IE浏览器
                element.attachEvent('on'+type,fn);
            }else{
                element['on'+type]=fn;//DOM0
            }
        },
        //移除事件
        removeEvent:function(element,type,fn){
            if(element.removeEventListener){
                element.removeEventListener(type,fn,false);
            }else if(element.detachEvent){
                element.detachEvent('on'+type,fn);
            }else{
                element['on'+type]=null;
            }
        },
        //阻止事件冒泡（主要是阻止冒泡，因为IE不支持事件捕获，用于停止事件在DOM层中传播，即进一步取消事件的捕获或者冒泡）
        stopPropagation:function(event){
            if(event.stopPropagation){
                event.stopPropagation();//标准浏览器
            }else{
                event.cancelBubble=ture;//IE
            }
        },
        //阻止事件默认行为（如url跳转等）
        preventDefault:function(event){
            if(event.preventDefault){
                event.preventDefaule();//标准浏览器
            }else{
                event.returnValue=false;//IE
            }
        },
        //获取event对象的引用，获取事件的所有信息，确保随时能使用event
        getEvent:function(event){
            var event=event||window.event;//在DOM0级事件添加，event作为window对象的一个属性存在
        },
        //获取事件目标
        getTarget:function(event){
            return event.target||event.srcElement;
        }
    };
```
