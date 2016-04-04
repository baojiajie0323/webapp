import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';

class Login extends Component {
  componentDidMount(){
  }
  render() {
    var style = {
        textAlign: 'center',
        fontSize: '14vh',
        marginTop: '50%'
    }
    return <div id="loginpanel" className="fullscreen">
            <p style={style}>登录</p>
           </div>;
  }
}

export default Login;
