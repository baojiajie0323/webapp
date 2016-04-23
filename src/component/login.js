import React, { Component } from 'react';
import { QueueAnim,Icon,message } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');
const InkButton = require('./inkbutton');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginbtnname:'登 录'
    };
    this.onClickLogin = this.onClickLogin.bind(this);
  }
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

    var _this = this;
    setTimeout(function(){
      $('#loginbtn').css({
        width:'50px',
        borderRadius:'25px'
      })
      _this.setState({loginbtnname:''})
    },400);

    setTimeout(function(){
      $('#loginbtn').css({
        transform:'scale(30)'
      })
    },800);

    setTimeout(function(){
      Store.setloginsuccess(true);
    },1200);

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
                    <input id="input_username" className="weui_input" defaultValue="baojiajie0323" placeholder="请输入用户名"/>
                </div>
            </div>
            <div className="inputpanel">
                <div className="weui_cell_hd">
                  <Icon id="inputicon" type="unlock" />
                </div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input id="input_password" className="weui_input" defaultValue="123456" type="password" placeholder="请输入密码"/>
                </div>
            </div>
            {/*<div id="loginbtn" onClick={this.onClickLogin} className="weui_btn weui_btn_primary">登 录</div>*/}
            <InkButton id="loginbtn" clickfun={this.onClickLogin} value={this.state.loginbtnname} clsname="weui_btn weui_btn_primary" />
           </div>;
  }
}

export default Login;
