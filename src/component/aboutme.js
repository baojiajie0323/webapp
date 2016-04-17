import React, { Component } from 'react';
import {QueueAnim,Icon } from 'antd';
import './App.less';

const Store = require('../flux/stores/vssStore');
const Setting = require('./setting');
const Modifyphone = require('./modifyphone');

class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showsetting:false,
      showmodifyphone:false,
    };
    this.onClickSetting = this.onClickSetting.bind(this);
    this.onClickReturnSetting = this.onClickReturnSetting.bind(this);

    this.onClickModifyphone = this.onClickModifyphone.bind(this);
    this.onClickReturnModifyphone = this.onClickReturnModifyphone.bind(this);
  }
  onClickSetting(){
    this.setState({showsetting:true});
  }
  onClickReturnSetting(){
    this.setState({showsetting:false});
  }
  onClickModifyphone(){
    this.setState({showmodifyphone:true});
  }
  onClickReturnModifyphone(){
    this.setState({showmodifyphone:false});
  }
  onClickLogout(){
    Store.setloginsuccess(false);
  }
  onClickQuery(){
    navigator.vibrate([200, 200, 200]);
    var $dialog = $('#querylogout');
    $dialog.show();
    $dialog.find('.weui_btn_dialog').one('click', function () {
                        $dialog.hide();
    });
  }
  render() {
    var subpage = null;
    if(this.state.showsetting){
      subpage = <Setting key="setting" returnfun={this.onClickReturnSetting}/>;
    }else if(this.state.showmodifyphone){
      subpage = <Modifyphone key="modifyphone" returnfun={this.onClickReturnModifyphone}/>;
    }
    return <div className="weui_tab_bd">
            <div className="titlebar">
              <p className="titlebar_title">个人中心</p>
            </div>
            <div id="user_bd">
              <QueueAnim type="scaleBig">
              <div id="user_photo_bg" key="user_photo_bg">
                <div id="user_photo">
                </div>
              </div>
              </QueueAnim>
              <p id="user_name">鲍嘉捷</p>
            </div>
            <div className="info_panel">
              <div className="info_panel_content">
                <p className="info_pannel_content_key">单位</p>
                <p className="info_pannel_content_value">上海市第三看守所</p>
              </div>
              <div className="panel_line"></div>
              <div className="info_panel_content">
                <p className="info_pannel_content_key">部门</p>
                <p className="info_pannel_content_value">指挥中心</p>
              </div>
              <div className="panel_line"></div>
              <div className="info_panel_content">
                <p className="info_pannel_content_key">警号</p>
                <p className="info_pannel_content_value">6742</p>
              </div>
              <div className="panel_line"></div>
              <div onClick={this.onClickModifyphone} className="info_panel_content info_panel_content_active">
                <p className="info_pannel_content_key">手机</p>
                <p className="info_pannel_content_value">15026489683</p>
              </div>
            </div>
            <div className="info_panel">
              <div onClick={this.onClickSetting} className="info_panel_content info_panel_content_active">
                <p className="info_pannel_content_key">设置</p>
                <Icon className="info_pannel_content_last" type="setting" />
              </div>
            </div>
            <a href="javascript:;" id="logoutbtn" onClick={this.onClickQuery} className="weui_btn weui_btn_warn">退出登录</a>
            <div className="weui_dialog_confirm" id="querylogout" style={{display: 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd"><strong className="weui_dialog_title">提示</strong></div>
                    <div className="weui_dialog_bd">您确定要退出登录吗？</div>
                    <div className="weui_dialog_ft">
                        <a href="javascript:;" className="weui_btn_dialog default">取消</a>
                        <a href="javascript:;" onClick={this.onClickLogout} className="weui_btn_dialog primary">确定</a>
                    </div>
                </div>
            </div>
            <QueueAnim className="subpage" animConfig={[
            { opacity: [1, 0], translateX: [0, '100%'] },
            { opacity: [1, 0], translateX: [0, '100%'] }
            ]}>
            {subpage}
            </QueueAnim>
          </div>;
  }
}

export default Aboutme;
