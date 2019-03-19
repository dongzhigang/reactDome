import React from 'react';
// import {HashRouter as Router,Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import RouterDome from './router';
// import List from './view/list';
import * as serviceWorker from './serviceWorker';
const APP = document.getElementById("APP");
//获取视窗宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//设置适配
// let htmlDom = document.getElementsByTagName('html')[0];
if(htmlWidth > 750){
  document.documentElement.style.fontSize  = 50 + "px";
}else{
  document.documentElement.style.fontSize = htmlWidth/7.5 + "px";
}
//路由
ReactDOM.render(
  <RouterDome></RouterDome>, APP
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
