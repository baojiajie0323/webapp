import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');

class Login extends Component {
  componentDidMount(){
  }
  onClickLogin(){
    Store.setloginsuccess(true);
  }
  render() {
    var style = {
        textAlign: 'center',
        fontSize: '14vh',
        marginTop: '50%'
    }
    return <div id="loginpanel" className="fullscreen">
            <a href="javascript:;" onClick={this.onClickLogin} className="weui_btn weui_btn_primary">登录</a>
            <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">qq</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="number" pattern="[0-9]*" placeholder="请输入qq号"/>
                </div>
            </div>
           </div>;
  }
}

export default Login;
