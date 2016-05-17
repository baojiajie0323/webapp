import React, { Component } from 'react';
import { QueueAnim,Badge } from 'antd';
import './operation.less';

const Store = require("../flux/stores/vssStore");
const Backup = require("./backup");
const Device = require("./device");
const Server = require("./server");
const Temp = require("./temp");

class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdevicetext:false,
      showservertext:false,
      showtemptext:false,
      showbackuptext:false,

      showbackup: false,
      showdevice: false,
      showserver: false,
      showtemp: false,
    };
    this.onClickbackup = this.onClickbackup.bind(this);
    this.onClickReturnBackup = this.onClickReturnBackup.bind(this);
    this.onClicktemp = this.onClicktemp.bind(this);
    this.onClickReturnTemp = this.onClickReturnTemp.bind(this);
    this.onClickserver = this.onClickserver.bind(this);
    this.onClickReturnServer = this.onClickReturnServer.bind(this);
    this.onClickdevice = this.onClickdevice.bind(this);
    this.onClickReturnDevice = this.onClickReturnDevice.bind(this);
  }
  componentDidMount(){
    var _this = this;
    var _starttexttime = 0;

    setTimeout(function(){_this.setState({showdevicetext:true});},_starttexttime);
    setTimeout(function(){_this.setState({showtemptext:true});},_starttexttime + 100);
    setTimeout(function(){_this.setState({showservertext:true});},_starttexttime + 200);
    setTimeout(function(){_this.setState({showbackuptext:true});},_starttexttime + 300);
  }
  onClickbackup(){
    this.setState({showbackup:true});
  }
  onClickReturnBackup(){
    this.setState({showbackup:false});
  }
  onClickdevice(){
    this.setState({showdevice:true});
  }
  onClickReturnDevice(){
    this.setState({showdevice:false});
  }
  onClicktemp(){
    this.setState({showtemp:true});
  }
  onClickReturnTemp(){
    this.setState({showtemp:false});
  }
  onClickserver(){
    this.setState({showserver:true});
  }
  onClickReturnServer(){
    this.setState({showserver:false});
  }
  render() {
    var firstlogin = Store.getfirstlogin();

    var subpage = null;
    if(this.state.showbackup){
      subpage = <Backup key="Backup" returnfun={this.onClickReturnBackup}/>;
    }else if(this.state.showtemp){
      subpage = <Temp key="Temp" returnfun={this.onClickReturnTemp}/>;
    }else if(this.state.showserver){
      subpage = <Server key="Server" returnfun={this.onClickReturnServer}/>;
    }else if(this.state.showdevice){
      subpage = <Device key="Device" returnfun={this.onClickReturnDevice}/>;
    }
    return <div id="operation" className="weui_tab_bd">
              <div className="titlebar">
                <p className="titlebar_title">运维中心</p>
              </div>
              <div id="stateblock">
              </div>
              <div id="operateinfo">
                <p id="operationinfo_title">监所运维数据统计</p>
                <div className="operateblock" onClick={this.onClickdevice} >
                  <div className="blockpanel" style={{opacity:this.state.showdevicetext?'1':'0',
                    transform:this.state.showservertext?'scale(1)':'scale(0.9)'}}>
                    <p className="blockpanel_title"><Badge dot>设备</Badge></p>
                    <p className="blockpanel_value">725<span className="blockpanel_value_small">个</span></p>
                  </div>
                </div>
                <div className="operateline"></div>
                <div className="operateblock" onClick={this.onClickserver} >
                  <div className="blockpanel" style={{opacity:this.state.showservertext?'1':'0',
                    transform:this.state.showservertext?'scale(1)':'scale(0.9)'}}>
                    <p className="blockpanel_title"><Badge dot>服务</Badge></p>
                    <p className="blockpanel_value">4<span className="blockpanel_value_small">个</span></p>
                  </div>
                </div>
                <div className="operateblock" onClick={this.onClicktemp} >
                  <div className="blockpanel" style={{opacity:this.state.showtemptext?'1':'0',
                    transform:this.state.showtemptext?'scale(1)':'scale(0.9)'}}>
                    <p className="blockpanel_title">温度</p>
                    <p className="blockpanel_value">20<span className="blockpanel_value_small">℃</span></p>
                  </div>
                </div>
                <div className="operateline"></div>
                <div className="operateblock" onClick={this.onClickbackup}>
                  <div className="blockpanel" style={{opacity:this.state.showbackuptext?'1':'0',
                    transform:this.state.showbackuptext?'scale(1)':'scale(0.9)'}}>
                    <p className="blockpanel_title">备份</p>
                    <p className="blockpanel_value">1<span className="blockpanel_value_small">天</span></p>
                  </div>
                </div>
              </div>
              <QueueAnim className="subpage" animConfig={[
              { opacity: [1, 0], translateX: [0, '100%'] },
              { opacity: [1, 0], translateX: [0, '100%'] }
              ]}>
              {subpage}
              </QueueAnim>
           </div>
  }
}

export default Operation;
