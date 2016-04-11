import React, { Component } from 'react';
import './App.less';
import { Tabs,Badge } from 'antd';
const TabPane = Tabs.TabPane;
const IScroll = require('./iscroll.js');
const Store = require('../flux/stores/vssStore');

class Message extends Component {
  componentDidMount() {
    this.initscroll();
    Store.addChangeListener(Store.notifytype.msgchange,this.onMsgchange);
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
    this.initscroll();
  }
  constructor(props) {
    super(props);
    this.state = {
      devicemsg:Store.getdevicemsg(),
      systemmsg:Store.getsysmsg(),
      dutymsg:Store.getdutymsg(),
    };
    this.onMsgchange = this.onMsgchange.bind(this);
    this.callback = this.callback.bind(this);
  }
  onMsgchange(){
    this.setState({
      devicemsg:Store.getdevicemsg(),
      systemmsg:Store.getsysmsg(),
      dutymsg:Store.getdutymsg(),
    });
  }
  initscroll(){
    var deviceScroll = new IScroll('#device_wrapper', { mouseWheel: true ,tap: true});
    var systemScroll = new IScroll('#system_wrapper', { mouseWheel: true ,tap: true});
    var dutyScroll = new IScroll('#duty_wrapper', { mouseWheel: true ,tap: true});
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  }
  callback(key) {
    this.setState({
      devicemsg:Store.getdevicemsg(),
      systemmsg:Store.getsysmsg(),
      dutymsg:Store.getdutymsg(),
    });
    if(key == "2"){
      var systemScroll = new IScroll('#system_wrapper', { mouseWheel: true ,tap: true});
      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    //this.initscroll();
    //console.log(key);
  }
  render() {
    var devicename = "设备";
    var systemname = <Badge dot>系统</Badge>;
    var dutyname = <Badge dot>值班</Badge>;

    var devicelist = [];
    var syslist = [];
    var dutylist = [];

    for (var i = 0; i < this.state.devicemsg.length; i++) {
      var msg = this.state.devicemsg[i];
      var linediv = <div className="panel_line"></div>;
      if(devicelist.length > 0){
        devicelist.push(linediv);
      }
      var msgdiv = <li className="li_device">
        <div style={{backgroundColor:'#d38a79'}} className="li_icon">{msg.iconname}</div>
        <div className="li_time">{msg.time}</div>
        <div className="li_type">{msg.type}</div>
        <div className="li_name">{msg.name}</div>
        <div className="li_state">{msg.desc}</div>
      </li>;
      devicelist.push(msgdiv);
    }

    for (var i = 0; i < this.state.systemmsg.length; i++) {
      var msg = this.state.systemmsg[i];
      var linediv = <div className="panel_line"></div>;
      if(syslist.length > 0){
        syslist.push(linediv);
      }
      var msgdiv = <li className="li_device">
        <div style={{backgroundColor:'rgb(68, 166, 121)'}} className="li_icon">{msg.iconname}</div>
        <div className="li_time">{msg.time}</div>
        <div className="li_type">{msg.type}</div>
        <div className="li_name">{msg.name}</div>
        <div className="li_state">{msg.desc}</div>
      </li>;
      syslist.push(msgdiv);
    }

    for (var i = 0; i < this.state.dutymsg.length; i++) {
      var msg = this.state.dutymsg[i];
      var linediv = <div className="panel_line"></div>;
      if(dutylist.length > 0){
        dutylist.push(linediv);
      }
      var msgdiv = <li className="li_device">
        <div style={{backgroundColor:'rgb(25, 95, 148)'}} className="li_icon">{msg.iconname}</div>
        <div className="li_time">{msg.time}</div>
        <div className="li_type">{msg.type}</div>
        <div className="li_name">{msg.name}</div>
        <div className="li_state">{msg.desc}</div>
      </li>;
      dutylist.push(msgdiv);
    }
    return <div className="weui_tab_bd">
              <div className="titlebar">
                <p className="titlebar_title">消息中心</p>
              </div>
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab={devicename} key="1">
                  <div id="device_wrapper" className="wrapper">
                    <div className="scroller">
                      <ul>
                      {devicelist}
                      </ul>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab={systemname} key="2">
                  <div id="system_wrapper" className="wrapper">
                    <div className="scroller">
                      <ul>
                      {syslist}
                      </ul>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab={dutyname} key="3">
                  <div id="duty_wrapper" className="wrapper">
                    <div className="scroller">
                      <ul>
                      {dutylist}
                      </ul>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
           </div>;
  }
}

export default Message;
