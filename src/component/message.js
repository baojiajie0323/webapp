import React, { Component } from 'react';
import './App.less';

class Message extends Component {
  render() {
    var style = {
        textAlign: 'center',
        fontSize: '14vh',
        marginTop: '50%'
    }
    return <div className="weui_tab_bd">
              <div className="titlebar">
                <p className="titlebar_title">消息中心</p>
              </div>
           </div>;
  }
}

export default Message;
