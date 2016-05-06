import React, { Component } from 'react';
import {Icon } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');

class Temp extends Component {
  constructor(props) {
    super(props);
    this.onClickReturn = this.onClickReturn.bind(this);
  }
  componentDidMount(){
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
  }
  onClickReturn(){
    this.props.returnfun();
  }
  render() {
    return <div className="subpagefullscreen">
            <div id="backup">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">机房温度</p>
              </div>
            </div>
           </div>;
  }
}

export default Temp;
