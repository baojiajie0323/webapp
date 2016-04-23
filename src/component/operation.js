import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';

const Store = require("../flux/stores/vssStore");

class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstlogin:true,
      showtipelement:false,
    };
    this.onClickStarttipOK = this.onClickStarttipOK.bind(this);
  }
  componentDidMount(){
  }
  onClickStarttipOK(){
    Store.setfirstlogin();
    this.setState({
      firstlogin:false
    })
  }
  render() {
    return <div id="operation" className="weui_tab_bd">
              <div className="titlebar">
                <p className="titlebar_title">运维管理</p>
              </div>
              <div id="stategird">
                <div id="state_device" className="stateblock">
                  <p className="statetitle">系统后台</p>
                </div>
                <div id="state_service" className="stateblock">
                  <p className="statetitle">安防设备</p>
                </div>
                <div id="state_backup" className="stateblock">
                  <p className="statetitle">机房温度</p>
                </div>
                <div id="state_temp" className="stateblock">
                  <p className="statetitle">数据备份</p>
                </div>
              </div>
              {Store.getfirstlogin()?[
                <div className="mask"></div>,
                <div id="starttip">
                  <div id="starttipokbtn" onClick={this.onClickStarttipOK} className="weui_btn weui_btn_primary">确 定</div>
                </div>
              ]:null}
           </div>;
  }
}

export default Operation;
