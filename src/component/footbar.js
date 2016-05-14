import React, { Component } from 'react';
import {Icon,Badge} from 'antd';

const InkButton = require('./inkbutton');

class Footbar extends Component {
  render() {
    var _this2 = this;
    var value1 = [<div className="weui_tabbar_icon">
           <Icon type="line-chart" />
       </div>,
       <p className="weui_tabbar_label">运维</p>
     ];

    var value2 = [<div className="weui_tabbar_icon">
            <Icon type="solution" />
        </div>,
        <p className="weui_tabbar_label">值班</p>
      ];

    var value3 = [<div className="weui_tabbar_icon">
             <Icon type="message" />
         </div>,
         <p className="weui_tabbar_label">消息</p>
       ];

    var value4 = [<div className="weui_tabbar_icon">
              <Icon type="user" />
          </div>,
          <p className="weui_tabbar_label">我的</p>
        ];
    return <div className="weui_tabbar">
                <InkButton showanimate={false} id="taboperation" clickfun={function(){_this2.props.onsel(1)}} clsname={this.props.tabindex == 1?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value1}
                />
                <InkButton showanimate={false} id="tabduty" clickfun={function(){_this2.props.onsel(2)}} clsname={this.props.tabindex == 2?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value2}
                />
                <InkButton showanimate={false} id="tabmessage" clickfun={function(){_this2.props.onsel(3)}} clsname={this.props.tabindex == 3?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value3}
                />
                <InkButton showanimate={false} id="tababoutme" clickfun={function(){_this2.props.onsel(4)}} clsname={this.props.tabindex == 4?"weui_tabbar_item weui_bar_item_on":"weui_tabbar_item"}
                 value= {value4}
                />
            </div>;
  }
}

export default Footbar;
