---
title: CSS之border详解
date: 2018-10-15 16:24:57
tags: 
    - css
    - border
urlname: CSS_border
categories: CSS
keyword:
    - CSS
    - border
    - box-shadow
description: 本篇详解CSS中border的各种属性，以及当属性值个数不同时代表的含义，另外还介绍了box-shadow属性
---
border是用来规定元素边框的样式，有三种默认属性：border-width(边框宽度)、border-style(边框样式)、border-color(边框颜色)，这三种属性都可以分开来写，同时CSS3还新加入了border-radius(圆角度)和border-image(边框背景图)，下面我们就分别来了解一下各个样式属性的取值和说明等
## border-width 边框宽度
border-width分四个属性：border-top-widht、border-right-width、border-bottom-width、border-left-width
取值：
    `<length>`:用长度值来定义边框的厚度，非负值
     medium:定义默认厚度的边框，值为3px
     thin:定义比默认厚度细的边框，值为1px
     thick:定义比默认厚度粗的边框，值为5px
说明：
4个值：按上、右、下、左的顺序分别作用于四个边
3个值：第一个值作用于上，第二个值作用于左右，第三个值作用于下
2个值：第一个作用于上下，第二个值作用于左右
1个值：同时作用于四个边
## border-style 边框样式
border-style分四个属性：border-top-style、border-right-style、border-bottom-style、border-left-style
取值：
    none:无轮廓,该值情况下border-color将不起作用，border-width取值为0，除非边框轮廓为图像，即border-image
    hidden:隐藏边框,IE7及以下不支持
    dotted:点状轮廓，IE6下显示为dashed效果
    dashed:虚线轮廓
    solid:实线轮廓
    double:双线轮廓，两条单线与其间隔之和等于指定的border-width的值
    groove:3D凹槽轮廓
    ridge:3D凸槽轮廓
    inset:3D凹边轮廓
    outset:3D凸边轮廓
说明：
4个值：按上、右、下、左的顺序分别作用于四个边
3个值：第一个值作用于上，第二个值作用于左右，第三个值作用于下
2个值：第一个作用于上下，第二个值作用于左右
1个值：同时作用于四个边
## border-color 边框颜色
border-color也跟前上面两个一样分上、右、下、左四个属性
取值：
    `<color>`:指定颜色（transparent:透明）
说明：
4个值：按上、右、下、左的顺序分别作用于四个边
3个值：第一个值作用于上，第二个值作用于左右，第三个值作用于下
2个值：第一个作用于上下，第二个值作用于左右
1个值：同时作用于四个边
## border-radius 圆角度
border-radius分四个属性：border-top-left-radius(左上角))、border-top-right-radius(右上角)、border-bottom-right-radius(右下角)、border-bottom-left-radius(左下角)
取值：
`<length>`:用长度设置对象的圆角半径长度，非负数
`<percentage>`:用百分比设置对象的圆角半径长度
说明：
设置或检索对象使用圆角边框。提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，若第2个参数省略，则默认等于第1个参数
水平半径：
4个值：按top-left(左上角)、top-right(右上角)、bottom-right(右下角)、bottom-left(左下角)顺序分别作用于四个角
3个值：第一个值作用于top-left(左上角)，第二个值作用于top-right(右上角)和bottom-left(左下角)，第三个值作用于bottom-right(右下角)
2个值：第一个值作用于top-left(左上角)和bottom-right(右下角)，第二个值作用于top-right(右上角)和bottom-left(左下角)
1个值：同时作用于全部4个角
注：如果想让2个值的时候表示相邻的两个角而不是对角，可以这样写：`border-radius:<length>/<length>`，其中第一个值表示左上角和右上角，第二个值表示右下角和左下角
垂直半径同上
## border-image 边框背景图
border-image分五个属性：border-image-source、border-image-slice、border-image-width、border-image-outset、border-image-repeat
取值：
border-image-source：设置或检索对象的边框是否用图像定义样式或图像来源路径
border-image-slice：设置或检索对象的边框背景图的分割方式
border-image-width：设置或检索对象的边框厚度
border-image-outset：设置或检索对象的边框背景图的扩展
border-image-repeat：设置或检索对象的边框图像的平铺方式
说明：
当此属性不生效或图片未加载成功时，border-style就会生效
## box-shadow 边框阴影
取值：
none:无阴影
`<length>`：第1个长度值--阴影水平偏移值，方向：右
`<length>`：第2个长度值--阴影垂直偏移值，方向：下
`<length>`：第3个长度值--阴影模糊值，非负数，可选
`<length>`：第4个长度值--阴影外延值，可为负，可选
`<color>`：阴影颜色
`inset`：阴影类型为内阴影，（当无此值时，默认为外阴影）
说明：
可以设置多组效果，每组以逗号分隔，应用顺序与上面相同
## 总结
本篇主要针对CSS的border属性进行详解，其实我写这篇博客的主要目的是为后面的用border属性写各种对话气泡和各种图形做铺垫，感兴趣的话可以多多关注哦！





