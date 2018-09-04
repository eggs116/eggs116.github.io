---
title: 页面布局--居中问题
date: 2018-08-16 11:22:40
categories: 页面布局
tags: 页面布局 html css
description: 本篇文章将列举水平居中、垂直居中、水平垂直居中的各种方法
---
## 1 水平居中
### 1.1 行内或类行内元素（比如图片、文本、链接等）
块级父容器设置text-align:center;
### 1.2 块级元素
#### 1.2.1 固定宽度(注：in代表子元素，out代表父元素)
1. in----margin-left:(out.width-in.width)/2;
2. in----margin:0 auto;---------------auto
3. out----position:relative;|in----position:absolute;left:50%;margin-left:-in.width/2;---------------定位
4. out----display:flex;justify-content:center;(关于flex请看后续文章)---------------flex
5. out----display:table-cell;|in----margin:0 auto;---------------table-cell
6. out----display:inline-block;|in----margin:0 auto;text-align:center;---------------inline-block
7. 在in前增加隐藏节点hide和in均float:left且hide.width:(out.width-in.width)/2;hide的高度为非0任意值---------------增加节点
8. in----position:relative;left:50%;transform:translateX(-50%);---------------transform

#### 1.2.2 不定宽度
1. out----text-align:certer;|in----display:inline-block;---------------inline-block
2. in----width:fit-content(宽度收缩到内容);margin:0 auto;---------------fit-content
3. out----position:relative|in----position:absolute;left:50%;transform:translateX(-50%);---------------transform
-------------------------
## 2. 垂直居中
### 2.1 行内或类行内元素
#### 2.1.1 不定高度
padding-top==padding-bottom(注：一般行内元素不能给height)
#### 2.1.2 固定高度
##### 单行
line-height==height
##### 多行
1. 父容器设置display:table-cell;vertical-align:middle;(注：若块级嵌套父容器嵌套多行文字，则外层块级元素也需设置display:table;)---------------table-cell
2. 父容器设置display:flex;flex-direction:column;justify-content:center;---------------flex
3. 两级父容器，文本嵌套在in里，out高固定，|out::before----content:"";display:inline-block;vertical-align:middle;height:100%;|in高不固定，in----display:inline-block;vertical-align:middle;
<!-- 注：ie6不兼容以上，ie6居中结合1中的写法：(css hack兼容) -->

### 2.2 块级元素
#### 2.2.1 固定高度
1. in----margin-top:(out.height-in.height)/2;
2. out----position:relative;|in----position:absolute;top:50%;margin-top:-in.height/2;---------------定位
3. 在in前增加隐藏节点hide且hide.height:(out.height-in.height)/2;hide的宽度为非0任意值---------------增加节点
4. out::before----content:"";display:inline-block;vertical-align:middle;height:100%;|in----display:inline-block;vertical-align:middle;---------------伪元素
5. in----position:relative;top:50%;transform:translateY(-50%);---------------transform

#### 2.2.2 不定高度
1. out----display:table-cell;vertical-align:middle;
2. 1. out----display:flex;align-items:center;
   2. out----display:flex;flex-direction:column;justify-content:center;
   3. out----display:flex;|in----align-self:center;

---------------flex
3. out----position:relative;|in----position:absolute;top:50%;transform:translateY(-50%);---------------transform
----------------------
## 3 水平垂直居中
### 3.1 固定宽高
1. in----margin-left:(out.width-in.width)/2;margin-top:(out.height-in.height)/2;
2. 1. out----position:relative;|in----position:absolute;top:50%;left:50%;margin-top:-in.height/2;margin-left:-in.width/2;
   2. out----position:relative;|in----position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;
---------------定位
3. 1. out----display:flex;justify-content:center;align-items:center;
   2. out----display:flex;justify-content:center;|in----align-self:center;
---------------flex
4. out----display:table-cell;vertical-align:middle;|in----margin:auto;---------------table-cell
5. in----position:relative;left:50%;top:50%;transform:translate(-50%,-50%);---------------transform
6. in----margin:calc(50% - in.height/2) auto;(注：cala()内的计算符号前后必须有空格)

### 3.2 不定宽高
out----position:relative;|in----position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
> 注：以上transform方法当计算结果含小数位时，会导致整个元素变模糊，解决方案是父级元素设置transform-style:preserve-3d;


