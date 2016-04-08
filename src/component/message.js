import React, { Component } from 'react';
import './App.less';
import { Tabs,Badge } from 'antd';
const TabPane = Tabs.TabPane;
const IScroll = require('./iscroll.js');
class Message extends Component {
  componentDidMount() {
    this.initscroll();
  }
  componentDidUpdate(){
    this.initscroll();
  }
  initscroll(){
    var myScroll = new IScroll('#device_wrapper', { mouseWheel: true ,tap: true});
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  }
  callback(key) {
    console.log(key);
  }
  render() {
    var devicename = "设备";
    var systemname = <Badge dot>系统</Badge>;
    var dutyname = <Badge dot>值班</Badge>;

    var devicelist = <div id="device_wrapper" className="wrapper">
                      <div className="scroller">
                      <ul>
                        <li className="li_device">
                          <div className="li_icon">门</div>
                          <div className="li_time">上午9:52</div>
                          <div className="li_title">
                            <span className="li_title_type">门禁</span>
                            <span className="li_title_name">档案中心大门</span>
                            <span className="li_title_state">产生外力开启报警</span>
                          </div>
                        </li>
                        <div className="panel_line"></div>
                        <li className="li_device">
                          <div className="li_icon">报</div>
                          <div className="li_time">上午6:33</div>
                          <div className="li_title">
                            <span className="li_title_type">报警点</span>
                            <span className="li_title_name">二监区走廊报警点</span>
                            <span className="li_title_state">产生紧急报警</span>
                          </div>
                        </li>
                        <div className="panel_line"></div>
                        <li className="li_device">
                          <div className="li_icon">监</div>
                          <div className="li_time">昨天</div>
                          <div className="li_title">
                            <span className="li_title_type">监控点</span>
                            <span className="li_title_name">一监区走廊东</span>
                            <span className="li_title_state">下线</span>
                          </div>
                        </li>
                        <div className="panel_line"></div>
                        <li className="li_device">
                          <div className="li_icon">监</div>
                          <div className="li_time">昨天</div>
                          <div className="li_title">
                            <span className="li_title_type">监控点</span>
                            <span className="li_title_name">一监区走廊东</span>
                            <span className="li_title_state">下线</span>
                          </div>
                        </li>
                        <div className="panel_line"></div>
                        <li className="li_device">
                          <div className="li_icon">监</div>
                          <div className="li_time">昨天</div>
                          <div className="li_title">
                            <span className="li_title_type">监控点</span>
                            <span className="li_title_name">一监区走廊东</span>
                            <span className="li_title_state">下线</span>
                          </div>
                        </li>
                        <div className="panel_line"></div>
                        <li className="li_device">
                          <div className="li_icon">监</div>
                          <div className="li_time">昨天</div>
                          <div className="li_title">
                            <span className="li_title_type">监控点</span>
                            <span className="li_title_name">一监区走廊东</span>
                            <span className="li_title_state">下线</span>
                          </div>
                        </li>
                      </ul>
                      </div>
                     </div>;
    return <div className="weui_tab_bd">
              <div className="titlebar">
                <p className="titlebar_title">消息中心</p>
              </div>
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab={devicename} key="1">{devicelist}</TabPane>
                <TabPane tab={systemname} key="2">选项卡二内容</TabPane>
                <TabPane tab={dutyname} key="3">选项卡三内容</TabPane>
              </Tabs>
           </div>;
  }
}

export default Message;
