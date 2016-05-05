import React, { Component } from 'react';
import {QueueAnim,Icon } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');
const InkButton = require('./inkbutton');

class ModifyPhone extends Component {
  constructor(props) {
    super(props);
    this.onClickReturn = this.onClickReturn.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  componentDidMount(){
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
  }
  onClickReturn(){
    this.props.returnfun();
  }
  onClickPhone(){
    var customer = document.getElementById('newphone');
    customer.select();
  }
  onClickSave(){
    this.props.returnfun();
  }
  render() {
    return <div className="subpagefullscreen">
            <div id="modifyphone">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">修改手机号</p>
                <InkButton id="savebtn" clickfun={this.onClickSave} clsname="titlebar_save" value="保存" />
              </div>
              <br />
              <div className="info_panel">
                <div className="info_panel_content">
                  <p className="info_pannel_content_key">请填写新手机号</p>
                  <div className="info_pannel_content_edit">
                    <input onClick={this.onClickPhone} id="newphone" className="weui_input" defaultValue="15026489683" type="number" pattern="[0-9]*" placeholder="请填写新手机号"/>
                  </div>
                </div>
              </div>
            </div>
           </div>;
  }
}

export default ModifyPhone;
