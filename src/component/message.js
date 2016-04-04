import React, { Component } from 'react';
import './App.less';

class Message extends Component {
  render() {
    var style = {
        textAlign: 'center',
        fontSize: '14vh',
        marginTop: '50%'
    }
    return <div style={{backgroundColor:'green'}} className="weui_tab_bd">
            <p style={style}>消息</p>
           </div>;
  }
}

export default Message;
