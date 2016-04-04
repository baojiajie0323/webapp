import React, { Component } from 'react';
import './App.less';

class Aboutme extends Component {
  render() {
    var style = {
        textAlign: 'center',
        fontSize: '14vh',
        marginTop: '50%'
    }
    return <div style={{backgroundColor:'gray'}} className="weui_tab_bd">
            <p style={style}>我的</p>
           </div>;
  }
}

export default Aboutme;
