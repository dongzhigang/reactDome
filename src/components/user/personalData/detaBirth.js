// 用户信息-日期选择
import React, { Component } from 'react';
import "./detaBirth.scss";

import Deta from "../../../assets/srcipt/deta";

class DetaBirth extends Component{
     //构造方法,初始化
     constructor(props) {
        super(props);
        this.state = {
            yearData:[],
            monthData:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            dayData:[],
            Year:"",
            Month:"",
            Day:"",
            deta:"",
        }
    }
    //  //日期数组
     timeLoad() {
        //日期数据
        let Year = Deta.time.Year
        let Month = Deta.time.Month
        let Day  = Deta.time.Day;
        let array = [];
        for(let i=0;i < Year; i++) {
            if((Year - i) > 1900){
                array.push(Year - i)
            }
        }
        //数组
        this.setState({
            yearData:array,
            dayData:Deta.time.dayList(Year,Month),
            Year:Year,
            Month:Month,
            Day:Day
        })
    }
    //日期初始化
    startDate(id){
        if(this.props.hasDate){
            let parent = document.getElementById(id);
            let child = parent.children;
            let childH = child[0].clientHeight;
            let arrayData,valData;
            switch (id){
                case "Year":
                    arrayData = this.state.yearData;
                    valData = this.state.Year;
                    break;
                case "Month":
                    arrayData = this.state.monthData;
                    valData = this.state.monthData[this.state.Month];
                    break;
                case "Day":
                    arrayData = this.state.dayData;
                    valData = this.state.Day;
                    break;
                default:
                    break;
            }
            let topY = 0;
            for(let i=0;i< child.length;i++) {
                child[i].style.height = childH + "px";
                child[i].setAttribute("data-deta",i);
                if(arrayData[i] === valData){
                    if(id === "Month"){
                        parent.setAttribute("data-deta",i);
                    }else{
                        parent.setAttribute("data-deta",arrayData[i]);
                    }
                    parent.style.transform = "translate3d(0,"+(topY- (i-2)*childH)+"px,0)";
                    parent.setAttribute("data-top",(topY- (i-2)*childH));
                    child[i].classList.add(id + "Sel");
                }
            }
        }
    }
    //手指触摸到屏幕会触发
    ontouchstart(event){
        let that = event.currentTarget;
        this.setState({
            topY:parseInt(that.getAttributeNode("data-top").value),
            startY:event.changedTouches[0].clientY
        })
    }
    //当手指在屏幕上移动时，会触发
    ontouchmove(event){
        let that = event.currentTarget
        let child = that.children;
        let topY = this.state.topY;
        let childH = child[0].clientHeight;
        let endY = event.changedTouches[0].clientY;
        let valY = Math.abs(endY - this.state.startY);
        let leng = Math.round(valY/childH);
        if(endY - this.state.startY > 0){ //向下
            if((topY + leng*childH) > childH*2){
                that.style.transform = "translate3d(0,"+(childH*3)+"px,0)";
                that.setAttribute("data-top",childH*3);
            }else{                 
                that.style.transform = "translate3d(0,"+(topY + leng*childH)+"px,0)";
                that.setAttribute("data-top",(topY + leng*childH));
            }	
        }else{//向上
            if (Math.abs(topY - leng*childH) > childH*(child.length - 3)) {
                that.style.transform = "translate3d(0,"+(-childH*(child.length - 2))+"px,0)";
                that.setAttribute("data-top",-childH*(child.length - 2));
            }else{
                that.style.transform = "translate3d(0,"+(topY - leng*childH)+"px,0)";
                that.setAttribute("data-top",(topY - leng*childH)) 
            }
        }	
    }
    // //当手指离开屏幕时，会触发
    ontouchend(event){
        let endY = event.changedTouches[0].clientY;
        let that = event.currentTarget;
        let id = event.currentTarget.id;
        let child = that.children;
        let Year = document.getElementById("Year");
        let Month = document.getElementById("Month");
        let Day = document.getElementById("Day");
        let topY = this.state.topY;
        let childH = child[0].clientHeight;
        let valY = Math.abs(endY - this.state.startY);	
        let leng = Math.round(valY/childH);
        if(endY - this.state.startY > 0){	//向下	
            if((topY + leng*childH) > childH*2){
                that.style.transform = "translate3d(0,"+(childH*2)+"px,0)";
                that.setAttribute("data-top",childH*2);

            }else{                 
                that.style.transform = "translate3d(0,"+(topY + leng*childH)+"px,0)";
                that.setAttribute("data-top",(topY + leng*childH));
            }
        }else{//向上
            if (Math.abs(topY - leng*childH) > childH*(child.length - 3)) {
                that.style.transform = "translate3d(0,"+(-childH*(child.length - 3))+"px,0)";
                that.setAttribute("data-top",-childH*(child.length - 3));
            }else{
                that.style.transform = "translate3d(0,"+(topY - leng*childH)+"px,0)";
                that.setAttribute("data-top",(topY - leng*childH)) 
            }
        }
        topY = parseInt(that.getAttributeNode("data-top").value);
        let index = topY>0?2-Math.abs(topY/childH):Math.abs(topY/childH) + 2;
        for(let i=0;i < child.length;i++){
            if(i === index){
                child[i].classList.add(id + "Sel");
                if(id === "Month"){
                    that.setAttribute("data-deta",i);
                }else{
                    that.setAttribute("data-deta",child[i].innerHTML);
                }						
                //设置data数据
                this.setState({
                    Year:parseInt(Year.getAttributeNode("data-deta").value),
                    Month:parseInt(Month.getAttributeNode("data-deta").value),
                    Day:parseInt(Day.getAttributeNode("data-deta").value)    
                })
                let  nextDayData = Deta.time.dayList(this.state.Year,this.state.Month);
                if(nextDayData.length < this.state.Day){
                    let dayY = parseInt(Day.getAttributeNode("data-top").value);
                    let num = this.state.Day - nextDayData.length
                    Day.style.transform = "translate3d(0,"+(dayY + num*childH)+"px,0)";
                    Day.setAttribute("data-deta",nextDayData.length)
                    this.setState({
                        Day:nextDayData.length    
                    })
                }
                this.setState({
                    dayData:nextDayData    
                })
            }else{
                child[i].classList.remove(id + "Sel");
            }
        }	
    }
    //取消
    cancelDate(){
        this.props.showDate()
    }
    //确定日期
    confirmDate(){
        this.setState({
            deta:this.state.Year + "-" + (this.state.Month+1>9?this.state.Month+1:"0"+(this.state.Month+1)) + "-" + (this.state.Day>9?this.state.Day:"0"+this.state.Day),
        },function(){
            this.props.showDate(this.state.deta)
        })
    }
    componentWillMount(){        
        this.timeLoad();
    }
    componentDidMount(){
        this.startDate("Month")
        this.startDate("Day")
        this.startDate("Year") 
    }
    render(){
        let yearData = this.state.yearData;
        let monthData = this.state.monthData;
        let dayData = this.state.dayData;
        return(
            <div className="detaBirth">
                <div className="deta_box">
                    {/* <div className="deta_title">生日日期</div> */}
                    <div className="deta_bt">
						<span onClick={this.cancelDate.bind(this)}>取消</span>			
						<span className="bt_active" onClick={this.confirmDate.bind(this)} >确定</span>
					</div>
                    <div className="deta_list">
                        <div className="deta_list_mask">
                            <div className="deta_item" id="Month" onTouchStart={this.ontouchstart.bind(this)} onTouchMove={this.ontouchmove.bind(this)} onTouchEnd={this.ontouchend.bind(this)} >
                            {   monthData.map((v,i)=>{
                                    return <div className="deta_h" key={v}>{v}</div>
                                })

                            }
                            </div>
                            <div className="deta_item" id="Day" onTouchStart={this.ontouchstart.bind(this)} onTouchMove={this.ontouchmove.bind(this)} onTouchEnd={this.ontouchend.bind(this)} >
                            {   dayData.map((v,i)=>{
                                    return <div className="deta_h" key={v}>{v}</div>
                                })

                            }
                            </div>
                            <div className="deta_item" id="Year" onTouchStart={this.ontouchstart.bind(this)} onTouchMove={this.ontouchmove.bind(this)} onTouchEnd={this.ontouchend.bind(this)}  >
                            {   yearData.map((v,i)=>{
                                    return <div className="deta_h" key={v}>{v}</div>
                                })

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetaBirth;