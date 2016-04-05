import React, { Component } from 'react';
import './App.less';

const Store = require('../flux/stores/vssStore');

class Aboutme extends Component {
  onClickLogout(){
    Store.setloginsuccess(false);
  }
  onClickQuery(){
    var $dialog = $('#dialog1');
    $dialog.show();
    $dialog.find('.weui_btn_dialog').one('click', function () {
                        $dialog.hide();
    });
  }
  render() {
    return <div style={{backgroundColor:'gray'}} className="weui_tab_bd">
            <a href="javascript:;" id="showDialog1" onClick={this.onClickQuery} className="weui_btn weui_btn_warn">退出登录</a>
            <div className="weui_dialog_confirm" id="dialog1" style={{display: 'none'}}>
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
          </div>;
  }
}

export default Aboutme;
