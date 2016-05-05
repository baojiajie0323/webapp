import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';

const Store = require("../flux/stores/vssStore");

class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  componentDidMount(){
    var _this = this;
    var _animatetime = 0;
    var firstlogin = Store.getfirstlogin();
    if(firstlogin){
      setTimeout(function(){_this.setState({showstateblock:true});},_animatetime); _animatetime += 400;
      setTimeout(function(){_this.setState({showdeviceblock1:true});},_animatetime);
      setTimeout(function(){_this.setState({showserverblock:true});},_animatetime); _animatetime += 100;
      setTimeout(function(){_this.setState({showtempblock:true});},_animatetime); _animatetime += 100;
      setTimeout(function(){_this.setState({showbackupblock:true});},_animatetime); _animatetime += 350;
      setTimeout(function(){_this.setState({showdeviceblock2:true});},_animatetime); _animatetime += 200;
    }
    setTimeout(function(){_this.setState({showtemptext:true});},_animatetime); _animatetime += 100;
    setTimeout(function(){_this.setState({showservertext:true});},_animatetime); _animatetime += 100;
    setTimeout(function(){_this.setState({showbackuptext:true});},_animatetime);
    Store.setfirstlogin(false);
  }
  render() {
    var firstlogin = Store.getfirstlogin();
    return <div id="operation" className="weui_tab_bd">
              <div id="stateblock" style={{top:this.state.showstateblock || !firstlogin ?'0':'100%'}}>
              </div>
              <div id="deviceblock" style={{top:this.state.showdeviceblock1 || !firstlogin ?'47%':'100%',
                bottom:this.state.showdeviceblock2?'175px':'55px'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showdevicetext?'1':'0',
                  transform:this.state.showdevicetext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">安防设备</p>
                </div>
              </div>
              <div id="serverblock" style={{bottom:this.state.showserverblock || !firstlogin ?'55px':'100%',
                height:this.state.showserverblock?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showservertext?'1':'0',
                  transform:this.state.showservertext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">系统服务</p>
                  <p id="serverpanel_percent">4<span id="serverpanel_percent_all">/5</span></p>
                </div>
              </div>
              <div id="tempblock" style={{bottom:this.state.showtempblock || !firstlogin ?'55px':'100%',
                height:this.state.showtempblock?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showtemptext?'1':'0',
                  transform:this.state.showtemptext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">机房温度</p>
                  <p id="temppanel_text">20<span id="temppanel_text_fh">&nbsp;℃</span></p>
                </div>
              </div>
              <div id="backupblock" style={{bottom:this.state.showbackupblock || !firstlogin ?'55px':'100%',
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
