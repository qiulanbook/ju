/* 
* @Author: Administrator
* @Date:   2019-04-20 18:59:13
* @Last Modified by:   Administrator
* @Last Modified time: 2019-04-25 10:58:45
*/

'use strict';
// window.onload=function(){
// 	var obanner=document.getElementById('banner');
// fun1()
// function fun1(){
// obanner.style.backgroundColor='#E160C7';
// setTimeout(fun2(), 1000);

// }

// function fun2(){
// obanner.style.backgroundColor='#FFB2B0';
// setTimeout(fun2(), 1000);

// }
// function fun3(){
// obanner.style.backgroundColor='#91FBEF';
// setTimeout(fun4(), 1000);

// }
// function fun4(){
// obanner.style.backgroundColor='#20242F';
// setTimeout(fun5(), 1000);

// }
// function fun5(){
// obanner.style.backgroundColor='#FEBBC4';
// setTimeout(fun1(), 1000);

// }
// #E160C7  #91FBEF  #20242F  #FEBBC4
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
window.onload=function(){

// 登录窗口
 var a=document.getElementById("fix_a");
 var b=document.getElementById("dl");
 var c=document.getElementById("a_login");
 var c2=document.getElementById("a_login2");
 var oim1=document.getElementById("im1");
 var oim2=document.getElementById("im2");
 var odl_b_ta=document.getElementById("dl_b_ta");
 var odl2=document.getElementById("dl2");
 a.onclick=function(){
 	b.style.display="block";

 }

 c.onclick=function(){
 	b.style.display="none";

 }

 oim1.onmouseover=function(){
 	this.style.transform="translateX(-45px)";
 	oim2.style.display="block";

 }
  oim1.onmouseout=function(){
 	this.style.transform="translateX(0)";
 	oim2.style.display="none";
 	
 }
 odl_b_ta.onclick=function(){
 	
 	b.style.display="none";
 	odl2.style.display="block";
 }
 c2.onclick=function(){
 
 	odl2.style.display="none";

 }
 // 登录窗口结束      
 // 
 // 轮播和背景 轮播和背景
 var ul1=document.getElementById("ul");
 var li1=ul1.getElementsByTagName('li');

 var op=document.getElementById("p");
 var oem=op.getElementsByTagName('em');
 var oban=document.getElementById('banner');
 // 颜色数组
 var a=['#E160C7','#91FBEF','#20242F','#FEBBC4'];
 // 背景数组
 var b=['img/banner2.jpg','img/banner1.jpg','img/banner3.jpg','img/banner4.jpg']
 oban.style.backgroundColor=a[0];


 // 轮播和背景 轮播和背景结束














