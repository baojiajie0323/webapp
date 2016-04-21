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

    $('#loginbtn').html("");
    $('#loginbtn').css({
      width:'50px',
      borderRadius:'25px'
    })

    setTimeout(function(){
      $('#loginbtn').css({
        transform:'scale(30)'
      })
    },400);

    setTimeout(function(){
      Store.setloginsuccess(true);
    },800);

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
            <div id="loginbtn" onClick={this.onClickLogin} className="weui_btn weui_btn_primary">登 录</div>

           </div>;
  }
}

export default Login;
