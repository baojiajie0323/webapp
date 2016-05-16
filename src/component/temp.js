import React, { Component } from 'react';
import {Icon } from 'antd';
import './App.less';
import './temp.less';

const Store = require('../flux/stores/vssStore');

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp:18
    }
    this.onClickReturn = this.onClickReturn.bind(this);
    this.OnTouchStartUp = this.OnTouchStartUp.bind(this);
    this.OnTouchEndUp = this.OnTouchEndUp.bind(this);
    this.OnTouchStartDown = this.OnTouchStartDown.bind(this);
    this.OnTouchEndDown = this.OnTouchEndDown.bind(this);
  }
  componentDidMount(){
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
  }
  onClickReturn(){
    this.props.returnfun();
  }
  OnTouchStartUp(e){
    var newtemp = this.state.temp + 1;
    if(newtemp >= 25){
      newtemp = 25;
    }
    this.setState({temp:newtemp});
    e.target.style.backgroundColor = "rgba(0,0,0,0.2)";
  }
  OnTouchEndUp(e){
    e.target.style.backgroundColor = "rgba(0,0,0,0.1)";
  }
  OnTouchStartDown(e){
    var newtemp = this.state.temp - 1;
    if(newtemp <= 6){
      newtemp = 6;
    }
    this.setState({temp:newtemp});
    e.target.style.backgroundColor = "rgba(0,0,0,0.2)";
  }
  OnTouchEndDown(e){
    e.target.style.backgroundColor = "rgba(0,0,0,0.1)";
  }
  render() {
    var temp_c = this.state.temp;
    var temp_f = parseInt(this.state.temp * 9 / 5 + 32);
    return <div className="subpagefullscreen">
            <div id="temp">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">机房温度</p>
              </div>
              <div id="tempcontainer">
                <div id="tempup" onTouchStart={this.OnTouchStartUp} onTouchEnd={this.OnTouchEndUp}>
                  <div id="arrowup"></div>
                </div>
                <div id="tempshow">
                  <p id="temptext_c">{temp_c}<span className="temptext_fh">°C</span></p>
                  <p id="temptext_f">{temp_f}<span className="temptext_fh">°F</span></p>
                </div>
                <div id="tempdown" onTouchStart={this.OnTouchStartDown} onTouchEnd={this.OnTouchEndDown}>
                  <div id="arrowdown"></div>
                </div>
              </div>
            </div>
           </div>;
  }
}

export default Temp;
