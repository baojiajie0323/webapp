import React, { Component } from 'react';
import {Icon} from 'antd';

class Footbar extends Component {
  render() {
    var _this2 = this;
    return <div className="weui_tabbar">
                <a href="javascript:;" onClick={function(){_this2.props.onsel(1)}}
                 className={this.props.tabindex == 1?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"} >
                    <div className="weui_tabbar_icon">
                        <Icon type="line-chart" />
                    </div>
                    <p className="weui_tabbar_label">运维</p>
                </a>
                <a href="javascript:;" onClick={function(){_this2.props.onsel(2)}}
                 className={this.props.tabindex == 2?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"} >
                    <div className="weui_tabbar_icon">
                        <Icon type="solution" />
                    </div>
                    <p className="weui_tabbar_label">值班</p>
                </a>
                <a href="javascript:;" onClick={function(){_this2.props.onsel(3)}}
                 className={this.props.tabindex == 3?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"} >
                    <div className="weui_tabbar_icon">
                        <Icon type="message" />
                    </div>
                    <p className="weui_tabbar_label">消息</p>
                </a>
                <a href="javascript:;" onClick={function(){_this2.props.onsel(4)}}
                 className={this.props.tabindex == 4?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"} >
                    <div className="weui_tabbar_icon">
                        <Icon type="user" />
                    </div>
                    <p className="weui_tabbar_label">我的</p>
                </a>
            </div>;
  }
}

export default Footbar;
