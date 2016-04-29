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
              </div>
              <div id="serverblock" style={{bottom:this.state.showserverblock?'55px':'100%',
                height:this.state.showserverblock?'120px':'200%'
                }}>
              </div>
              <div id="tempblock" style={{bottom:this.state.showtempblock?'55px':'100%',
                height:this.state.showtempblock?'120px':'200%'
                }}>
              </div>
              <div id="backupblock" style={{bottom:this.state.showbackupblock?'55px':'100%',
                height:this.state.showbackupblock?'120px':'200%'
                }}>
              </div>
           </div>
  }
}

export default Operation;
