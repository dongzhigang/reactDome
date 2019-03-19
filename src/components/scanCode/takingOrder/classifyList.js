//扫码点餐-分类列表
import React, { Component } from 'react';
import "./classifyList.scss";

class ClassifyList extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            classifyList:[],    //分类列表
            
        }
    }
    //滚动切换
    tabScroll(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let listDiv = document.getElementById('list');
        let categoryDiv = document.getElementById('category');
        let children = listDiv.children;
        let categoryChild = categoryDiv.children;
        for(let i=0;i<children.length;i++){
            if(scrollTop >= children[i].offsetTop){
                for(var j=0;j<categoryChild.length;j++){  
                    categoryChild[j].classList.remove("active");
                }  
                categoryChild[i].classList.add("active");
            }
        }
    }
    //点击指定位置
    clickScroll(index){
        let listDiv = document.getElementById('list');
        let categoryDiv = document.getElementById('category');
        let children = listDiv.children;
        let categoryChild = categoryDiv.children;
        for(let i=0;i<children.length;i++){
            if(index === i){
                window.scrollTo(0,children[i].offsetTop);
                for(var j=0;j<categoryChild.length;j++){  
                    categoryChild[j].classList.remove("active");
                }  
                categoryChild[i].classList.add("active");
            }
        } 
    }
    //添加事件监听
    regScroll(myHandler) {
        if (window.onscroll === null) {
            window.onscroll = myHandler
        } else if (typeof window.onscroll === 'function') {
            var oldHandler = window.onscroll;
            window.onscroll = function () {
                myHandler();oldHandler();
            }
        }
    }
    //删除所有事件监听
    removeScrollHandler(){
        window.onscroll=''
    }
    //第一次渲染后调用
    componentDidMount(){
        // 添加滚动事件，检测滚动到页面底部
        this.regScroll(this.tabScroll.bind(this));
    }
    //组件从 DOM 中移除之前立刻被调用
    componentWillUnmount(){
        window.onscroll = '';//取消页面滚动事件
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            classifyList: nextProps.ClassifyList,
        })
    }
    render(){
        let classifyList = this.state.classifyList;
        return(
            <div className="classifyList" id="category">
            {   classifyList.map((v,i)=>{
                    return <div className="item" key={i} onClick={this.clickScroll.bind(this,i)} >{v.classify_name}{v.gross_num>0 && <span className="gross_num">{v.gross_num}</span>}</div>
                })
            }
            </div>
        )
    }
}

export default ClassifyList;