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
    if(Store.getfirstlogin()){
      var _this = this;
      setTimeout(function(){
        $('#starttip').css({
          transform:'scale(1)'
        })
      },200);

      setTimeout(function(){
        _this.setState({
          showtipelement:true
        })
      },400);
    }
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
                <div id="state_device" className="stateblock"></div>
                <div id="state_service" className="stateblock"></div>
                <div id="state_backup" className="stateblock"></div>
                <div id="state_temp" className="stateblock"></div>
              </div>
              {Store.getfirstlogin()?[
                <div className="mask"></div>,
                <div id="starttip">
                  {this.state.showtipelement?
                    <div id="starttipokbtn" onClick={this.onClickStarttipOK} className="weui_btn weui_btn_primary">确 定</div>
                    :null
                  }
                </div>
              ]:null}
           </div>;
  }
}

export default Operation;
