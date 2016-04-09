import React, { Component } from 'react';
import './App.less';

import {Icon } from 'antd';
const NumberShow = require('./numbershow');

const prisonCount = 8;
class Duty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      count:0
    };
    this.onClickCall = this.onClickCall.bind(this);
    this.onClickQuery = this.onClickQuery.bind(this);
  }
  onClickCall(){
    var _this = this;
  }
  onClickQuery(){
    var count = this.state.count;
    this.setcount(count + 1000);
    //this.setState({count:count + 300});
    // navigator.vibrate([200, 200, 200]);
    // var $dialog = $('#querycall');
    // $dialog.show();
    // $dialog.find('.weui_btn_dialog').one('click', function () {
    //                     $dialog.hide();
    // });
  }
  setcount(newcount){
    var count = this.state.count;
    count += 1;
    if(count > newcount){
      count = newcount;
    }
    this.setState({count:count});
    var _this = this;
    if(count < newcount){
      var time = 1;
      if(newcount - count <= 100){
        time = 10;
      }
      if(newcount - count <= 80){
        time = 30;
      }
      if(newcount - count <= 40){
        time = 50;
      }
      if(newcount - count <= 10){
        time = 200;
      }
      if(newcount - count <= 3){
        time = 400;
      }
      setTimeout(function(){
        _this.setcount(newcount);
      },time)
    }

  }
  render() {
    return <div className="weui_tab_bd">
            <div className="titlebar">
              <p className="titlebar_title">值班管理</p>
              <div onClick={this.onClickQuery} className="titlebar_iconpanel">
                <Icon type="calendar" />
              </div>
            </div>
            <div id="dutycount">
            {this.state.count}
            </div>
            <div className="weui_dialog_confirm" id="querycall" style={{display: 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd"><strong className="weui_dialog_title">提示</strong></div>
                    <div className="weui_dialog_bd">您确定要立刻开始点名吗？</div>
                    <div className="weui_dialog_ft">
                        <a href="javascript:;" className="weui_btn_dialog default">取消</a>
                        <a href="javascript:;" onClick={this.onClickCall} className="weui_btn_dialog primary">确定</a>
                    </div>
                </div>
            </div>
           </div>;
  }
}

export default Duty;
