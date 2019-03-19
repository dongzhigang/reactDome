import React, { Component } from 'react';
import "./storeComment.scss";

import Starddd from "../../assets/images/icon/starddd.png";
import Star from "../../assets/images/icon/star.png";

//接口
import {canteenComment} from "../../api/store";

class StoreComment extends Component{
     //构造方法
     constructor(props) {
        super(props);
        this.state = {
            grades:[0,1,2,3,4],
            grade:0,
            textareaValue:"",
            textareaLeng:200,
        }
    }
    //是否可以提交
    hasSubmit(){
        if(this.state.grade && this.state.textareaValue !==""){
            return true;
        }
        return false
    }
    //获取内容
    textaonreaChange(e){
        let leng = e.target.value.length;
        if(this.state.textareaLeng === 0){
            leng = 200;
        }
        this.setState({
            textareaValue:e.target.value,
            textareaLeng:(200 - leng)
        })
    }
    //选择评分
    selectGrade(index){
        this.setState({
            grade:index+1
        })
    }
    //餐厅评论
    canteenComment(){
        let data = {
            canteen_id:this.props.match.params.canteen_id,
            comment_content:this.state.textareaValue,
            comment_level:this.state.grade
        }
        canteenComment(data).then((res)=>{
            if(res.data.code === 200){
                alert(res.data.msg)
            }
        })
    }
    //生命周期
    componentWillMount(){
        document.title = '我要评论';
    }
    render() {
        let grades = this.state.grades;
        let grade = this.state.grade;
        let textareaLeng = this.state.textareaLeng;
        let hasSubmit = this.hasSubmit();
        return(
            <div className="storeComment">
                <div className="roof">给我来个评分吧</div>
                <div className="grades">
                    {grades.map((v,i)=>{
                        return <img key={v} src={v < grade?Starddd:Star} onClick={this.selectGrade.bind(this,i)} alt="评分" className="grade_icon" />
                    })}
                </div>
                <div className="redact">
                    <textarea maxLength="200" className="textarea" placeholder="您好,欢迎留下宝贵意见,谢谢！" onInput={this.textaonreaChange.bind(this)} />
                    <div className="number">{textareaLeng}</div>
                </div>
                <div className={`submit ${hasSubmit?"active":""}`} onClick={this.canteenComment.bind(this)}>提交</div>
            </div>
        )
    }
}
export default StoreComment;