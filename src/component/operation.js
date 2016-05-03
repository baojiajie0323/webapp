import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';

const Store = require("../flux/stores/vssStore");

class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstlogin:true,
      showstateblock:false,
      showdeviceblock1:false,
      showdeviceblock2:false,
      showserverblock:false,
      showtempblock:false,
      showbackupblock:false,
      showdevicetext:false,
      showservertext:false,
      showtemptext:false,
      showbackuptext:false,
    };
    this.onClickStarttipOK = this.onClickStarttipOK.bind(this);
  }
  componentDidMount(){
    var _this = this;
    setTimeout(function(){_this.setState({showstateblock:true});},0);
    setTimeout(function(){_this.setState({showdeviceblock1:true});},400);
    setTimeout(function(){_this.setState({showserverblock:true});},400);
    setTimeout(function(){_this.setState({showtempblock:true});},500);
    setTimeout(function(){_this.setState({showbackupblock:true});},600);
    setTimeout(function(){_this.setState({showdeviceblock2:true});},950);
    setTimeout(function(){_this.setState({showtemptext:true});},1150);
    setTimeout(function(){_this.setState({showservertext:true});},1250);
    setTimeout(function(){_this.setState({showbackuptext:true});},1350);
  }
  onClickStarttipOK(){
    Store.setfirstlogin();
    this.setState({
      firstlogin:false
    })
  }
  render() {
    return <div id="operation" className="weui_tab_bd">
              <div id="stateblock" style={{top:this.state.showstateblock?'0':'100%'}}>
              </div>
              <div id="deviceblock" style={{top:this.state.showdeviceblock1?'47%':'100%',
                bottom:this.state.showdeviceblock2?'175px':'55px'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showdevicetext?'1':'0',
                  transform:this.state.showdevicetext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">安防设备</p>
                </div>
              </div>
              <div id="serverblock" style={{bottom:this.state.showserverblock?'55px':'100%',
                height:this.state.showserverblock?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showservertext?'1':'0',
                  transform:this.state.showservertext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">系统服务</p>
                  <p id="serverpanel_percent">4<span id="serverpanel_percent_all">/5</span></p>
                </div>
              </div>
              <div id="tempblock" style={{bottom:this.state.showtempblock?'55px':'100%',
                height:this.state.showtempblock?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showtemptext?'1':'0',
                  transform:this.state.showtemptext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">机房温度</p>
                  <p id="temppanel_text">20<span id="temppanel_text_fh">&nbsp;℃</span></p>
                </div>
              </div>
              <div id="backupblock" style={{bottom:this.state.showbackupblock?'55px':'100%',
                height:this.state.showbackupblock?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showbackuptext?'1':'0',
                  transform:this.state.showbackuptext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">数据备份</p>
                  <p id="backuppanel_text">1<span id="backuppanel_text_small">天前</span></p>
                </div>
              </div>
           </div>
  }
}

export default Operation;
