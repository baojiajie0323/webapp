import React, { Component } from 'react';
import {Icon,Badge} from 'antd';

const InkButton = require('./inkbutton');

class Footbar extends Component {
  render() {
    var _this2 = this;
    var value1 = [<div className="weui_tabbar_icon">
           <i className="icon iconfont">&#xe6b2;</i>
       </div>,
       <p className="weui_tabbar_label">运维</p>
     ];

    var value2 = [<div className="weui_tabbar_icon">
            <i className="icon iconfont">&#xe68f;</i>
        </div>,
        <p className="weui_tabbar_label">值班</p>
      ];

    var value3 = [<div className="weui_tabbar_icon">
             <i className="icon iconfont">&#xe6a4;</i>
         </div>,
         <p className="weui_tabbar_label">消息</p>
       ];

    var value4 = [<div className="weui_tabbar_icon">
              <i className="icon iconfont">&#xe69c;</i>
          </div>,
          <p className="weui_tabbar_label">我的</p>
        ];
    return <div className="weui_tabbar">
                <InkButton id="taboperation" clickfun={function(){_this2.props.onsel(1)}} clsname={this.props.tabindex == 1?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value1}
                />
                <InkButton id="tabduty" clickfun={function(){_this2.props.onsel(2)}} clsname={this.props.tabindex == 2?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value2}
                />
                <InkButton id="tabmessage" clickfun={function(){_this2.props.onsel(3)}} clsname={this.props.tabindex == 3?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value3}
                />
                <InkButton id="tababoutme" clickfun={function(){_this2.props.onsel(4)}} clsname={this.props.tabindex == 4?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value4}
                />
            </div>;
  }
}

export default Footbar;
