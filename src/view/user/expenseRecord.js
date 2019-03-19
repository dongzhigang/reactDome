// 储值消费记录
import React, { Component } from 'react';
import "./expenseRecord.scss";

class ExpenseRecord extends Component{
    render(){
        return(
            <div className="expenseRecord">
                <div className="rows">
                    <div className="col">
                        <div className="col_box">
                            <label>余额</label>
                            <span>¥0</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col_box col_font">
                            <label>累计充值</label>
                            <span>¥0</span>
                        </div>
                        <div className="col_box col_font">
                            <label>累计消费</label>
                            <span>¥0</span>
                        </div>
                    </div>
                </div>
                <div className="bt">
                    <div className="bt_a">
                        <label>累计充值</label>
                        <span>0次</span>
                        <label>,累计消费</label>
                        <span>0次</span>
                    </div>
                    <div className="bt_a">
                        <label>累计获得商家充值赠送金额:</label>
                        <span>0次</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseRecord;