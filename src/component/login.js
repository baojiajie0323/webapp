import React, { Component } from 'react';
import { QueueAnim,Icon,message } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');

class Login extends Component {
  componentDidMount(){
  }
  onClickLogin(){
    if($('#input_username').val() != 'baojiajie0323'){
      message.error('用户名不存在！');
      return;
    }
    if($('#input_password').val() != '123456'){
      message.error('用户名或密码错误！');
      return;
    }
    Store.setloginsuccess(true);
  }
  render() {
    return <div id="loginpanel" className="fullscreen">
            <div id="logo">
            </div>
            <div className="inputpanel">
                <div className="weui_cell_hd">
                  <Icon id="inputicon" type="user" />
                </div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input id="input_username" className="weui_input" placeholder="请输入用户名"/>
                </div>
            </div>
            <div className="inputpanel">
                <div className="weui_cell_hd">
                  <Icon id="inputicon" type="unlock" />
                </div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input id="input_password" className="weui_input" type="password" placeholder="请输入密码"/>
                </div>
            </div>
            <a href="javascript:;" id="loginbtn" onClick={this.onClickLogin} className="weui_btn weui_btn_primary">登 录</a>
           </div>;
  }
}

export default Login;
