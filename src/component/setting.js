import React, { Component } from 'react';
import {QueueAnim,Icon } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vibrate:true,
      devicealarm:true,
      servicealarm:true,
      dutytimeout:true,
    };
    this.onClickReturn = this.onClickReturn.bind(this);
    this.onClickvibrate = this.onClickvibrate.bind(this);
    this.onClickdevicealarm = this.onClickdevicealarm.bind(this);
    this.onClickservicealarm = this.onClickservicealarm.bind(this);
    this.onClickdutytimeout = this.onClickdutytimeout.bind(this);
  }
  componentDidMount(){
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
  }
  onClickReturn(){
    this.props.returnfun();
  }
  onClickvibrate(){
    var check = document.getElementById('vibrate').checked;
    this.setState({vibrate:check})
    if(check){
      navigator.vibrate([200, 200, 200]);
    }
  }
  onClickdevicealarm(){
    var check = document.getElementById('devicealarm').checked;
    this.setState({devicealarm:check});
  }
  onClickservicealarm(){
    var check = document.getElementById('servicealarm').checked;
    this.setState({servicealarm:check});
  }
  onClickdutytimeout(){
    var check = document.getElementById('dutytimeout').checked;
    this.setState({dutytimeout:check});
  }
  render() {
    return <div className="subpagefullscreen">
            <div id="setting">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">设置</p>
              </div>
              <br />
              <div className="info_panel">
                <div className="info_panel_content">
                  <p className="info_pannel_content_key">来消息时振动</p>
                  <div className="info_pannel_content_switch">
                    <input id="vibrate" onChange={this.onClickvibrate} checked={this.state.vibrate} className="weui_switch" type="checkbox"/>
                  </div>
                </div>
              </div>
              <div className="info_panel">
                <div className="info_panel_content">
                  <p className="info_pannel_content_key">设备报警提醒</p>
                  <div className="info_pannel_content_switch">
                    <input id="devicealarm" onChange={this.onClickdevicealarm} checked={this.state.devicealarm} className="weui_switch" type="checkbox"/>
                  </div>
                </div>
                <div className="panel_line"></div>
                <div className="info_panel_content">
                  <p className="info_pannel_content_key">服务异常提醒</p>
                  <div className="info_pannel_content_switch">
                    <input id="servicealarm" onChange={this.onClickservicealarm} checked={this.state.servicealarm} className="weui_switch" type="checkbox"/>
                  </div>
                </div>
                <div className="panel_line"></div>
                <div className="info_panel_content">
                  <p className="info_pannel_content_key">点名超时提醒</p>
                  <div className="info_pannel_content_switch">
                    <input id="dutytimeout" onChange={this.onClickdutytimeout} checked={this.state.dutytimeout} className="weui_switch" type="checkbox"/>
                  </div>
                </div>
              </div>
              <div className="info_panel">
                <div className="info_panel_content">
                  <p className="info_pannel_content_key">关于</p>
                  <p className="info_pannel_content_value">OperationS v1.01</p>
                </div>
              </div>
            </div>
           </div>;
  }
}

export default Setting;
