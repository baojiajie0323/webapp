import React, { Component } from 'react';
import './App.less';

class Duty extends Component {
  render() {
    var style = {
        textAlign: 'center',
        fontSize: '14vh',
        marginTop: '50%'
    }
    return <div style={{backgroundColor:'blue'}} className="weui_tab_bd">
            <p style={style}>值班</p>
           </div>;
  }
}

export default Duty;
