import React, { Component } from 'react';
import {Icon } from 'antd';
import './App.less';
import './server.less';

const echarts = require('echarts');
const IScroll = require('./iscroll.js');
const Store = require('../flux/stores/vssStore');

const data1 = [15,20,22,90,50,30,40,25,
      15,60,80,90,50,70,55,56,
      52,10,8,7,18,30,40,48,
    ];

const data2 = [52,10,8,7,18,30,40,48,
      15,20,22,90,50,30,40,25,
      15,60,80,90,50,70,55,56,
    ];

const data3 = [52,10,8,48,22,40,55,56,
      15,20,25,70,7,18,30,40,
      15,90,50,30,60,80,90,50,
    ];

const data4 = data1;

class Server extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showcspoperate:false,
      showchatoperate:false,
      showintoperate:false,
      showvisitoroperate:false,
    }
    this.onClickReturn = this.onClickReturn.bind(this);
    this.onClickcspbtn = this.onClickcspbtn.bind(this);
    this.onClickchatbtn = this.onClickchatbtn.bind(this);
    this.onClickintbtn = this.onClickintbtn.bind(this);
    this.onClickvisitorbtn = this.onClickvisitorbtn.bind(this);
  }
  componentDidMount(){
    this.initscroll();
    this.updatelinecharts('cspchart',data1);
    this.updatelinecharts('chatchart',data2);
    this.updatelinecharts('intchart',data3);
    this.updatelinecharts('visitorchart',data4);
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
  }
  initscroll(){
    if(document.getElementById('servercontainer') != null){
        new IScroll('#servercontainer', { mouseWheel: true ,tap: true});
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    document.getElementById('cspoperatebtn').addEventListener('tap',this.onClickcspbtn);
    document.getElementById('chatoperatebtn').addEventListener('tap',this.onClickchatbtn);
    document.getElementById('intoperatebtn').addEventListener('tap',this.onClickintbtn);
    document.getElementById('visitoroperatebtn').addEventListener('tap',this.onClickvisitorbtn);
  }
  updatelinecharts(element,data){
    var doc = document.getElementById(element);
    if(!doc)
      return;
    var countChart = echarts.getInstanceByDom(document.getElementById(element));
     if(!countChart){
        countChart = echarts.init(document.getElementById(element));
     }
     var countoption = {
             grid: {
              show:false,
          },
          xAxis :{
                  axisLabel:{
                    show:false
                  },
                  axisLine:{
                    show:false
                  },
                  axisTick:{
                    show:false
                  },
                  splitLine:{
                    show:false
                  },
                  type : 'category',
                  data:["1","2","3","4","5","6","7","8",
                        "9","10","11","12","13","14","15","16",
                        "17","18","19","20","21","22","23","24",
                      ],
                  boundaryGap : false,
          },
          yAxis : {
                  axisLabel:{
                    show:false
                  },
                  axisLine:{
                    show:false
                  },
                  axisTick:{
                    show:false
                  },
                  splitLine:{
                    show:false
                  },
                  type : 'value'
          },
          series : [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:data,
                  lineStyle:{
                    normal:{
                      color:'#fff'
                    }
                  },
                  showSymbol:false,
                  smooth:true,
              },
          ]
       }
     countChart.setOption(countoption);
  }
  onClickReturn(){
    this.props.returnfun();
  }
  onTouchStartOperbtn(e){
    $(e.target).css("background","rgba(0,0,0,0.2)");
  }
  onTouchEndOperbtn(e){
    $(e.target).css("background","");
  }
  onClickcspbtn(){
    this.setState({showcspoperate:!this.state.showcspoperate});
  }
  onClickchatbtn(){
    this.setState({showchatoperate:!this.state.showchatoperate});
  }
  onClickintbtn(){
    this.setState({showintoperate:!this.state.showintoperate});
  }
  onClickvisitorbtn(){
    this.setState({showvisitoroperate:!this.state.showvisitoroperate});
  }
  render() {
    return <div className="subpagefullscreen">
            <div id="server">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">系统后台</p>
              </div>
              <div id="servercontainer">
                <div className="scroller">
                  <ul>
                    <div className="serverpanel serverbkcolor1">
                      <p className="servername">CSP通用综合安防系统</p>
                      <div id="cspoperatebtn" className="serveroperatebtn" onTouchStart={this.onTouchStartOperbtn} onTouchEnd={this.onTouchEndOperbtn}>
                        <i className="operateimage"></i>
                      </div>
                      <span className="servertime"><Icon type="clock-circle-o" className="servertimeicon" /> 21天10小时</span>
                      <div id="cspchart" className="valuechart">
                      </div>
                      <div className="valuepanel">
                        <div className="valuepanel_block">
                          <p className="block_value">26%<i className="badge_high"></i></p>
                          <p className="block_key">CPU使用率</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">657MB<i className="badge_high"></i></p>
                          <p className="block_key">运行内存</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">200GB</p>
                          <p className="block_key">剩余空间</p>
                        </div>
                      </div>
                      <div className="serveroperate" style={{height:this.state.showcspoperate?'90px':'0'}}>
                        <div className="serveroperate_block" >
                          <Icon className="operateIcon servercolor1" type="poweroff" />
                          <p className="operate_key">远程重启</p>
                        </div>
                        <div className="serveroperate_block">
                          <Icon className="operateIcon servercolor1" type="phone" />
                          <p className="operate_key">负责人：张工</p>
                        </div>
                      </div>
                    </div>
                    <div className="serverpanel serverbkcolor2">
                      <p className="servername">监所谈话业务系统</p>
                      <div id="chatoperatebtn" className="serveroperatebtn" onTouchStart={this.onTouchStartOperbtn} onTouchEnd={this.onTouchEndOperbtn}>
                        <i className="operateimage"></i>
                      </div>
                      <span className="servertime"><Icon type="clock-circle-o" className="servertimeicon" /> 13天2小时</span>
                      <div id="chatchart" className="valuechart">
                      </div>
                      <div className="valuepanel">
                        <div className="valuepanel_block">
                          <p className="block_value">5%</p>
                          <p className="block_key">CPU使用率</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">122MB</p>
                          <p className="block_key">运行内存</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">3GB<i className="badge_alarm"></i></p>
                          <p className="block_key">剩余空间</p>
                        </div>
                      </div>
                      <div className="serveroperate" style={{height:this.state.showchatoperate?'90px':'0'}}>
                        <div className="serveroperate_block">
                          <Icon className="operateIcon servercolor2" type="poweroff" />
                          <p className="operate_key">远程重启</p>
                        </div>
                        <div className="serveroperate_block">
                          <Icon className="operateIcon servercolor2" type="phone" />
                          <p className="operate_key">负责人：张工</p>
                        </div>
                      </div>
                    </div>
                    <div className="serverpanel serverbkcolor2">
                      <p className="servername">监所智能视频分析系统</p>
                      <div id="intoperatebtn" className="serveroperatebtn" onTouchStart={this.onTouchStartOperbtn} onTouchEnd={this.onTouchEndOperbtn}>
                        <i className="operateimage"></i>
                      </div>
                      <span className="servertime"><Icon type="clock-circle-o" className="servertimeicon" /> 44天15小时</span>
                      <div id="intchart" className="valuechart">
                      </div>
                      <div className="valuepanel">
                        <div className="valuepanel_block">
                          <p className="block_value">10%</p>
                          <p className="block_key">CPU使用率</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">352MB</p>
                          <p className="block_key">运行内存</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">103GB</p>
                          <p className="block_key">剩余空间</p>
                        </div>
                      </div>
                      <div className="serveroperate" style={{height:this.state.showintoperate?'90px':'0'}}>
                        <div className="serveroperate_block">
                          <Icon className="operateIcon servercolor2" type="poweroff" />
                          <p className="operate_key">远程重启</p>
                        </div>
                        <div className="serveroperate_block">
                          <Icon className="operateIcon servercolor2" type="phone" />
                          <p className="operate_key">负责人：张工</p>
                        </div>
                      </div>
                    </div>
                    <div className="serverpanel serverbkcolor2">
                      <p className="servername">监所访客业务系统</p>
                      <div id="visitoroperatebtn" className="serveroperatebtn" onTouchStart={this.onTouchStartOperbtn} onTouchEnd={this.onTouchEndOperbtn}>
                        <i className="operateimage"></i>
                      </div>
                      <span className="servertime"><Icon type="clock-circle-o" className="servertimeicon" /> 1天15小时</span>
                      <div id="visitorchart" className="valuechart">
                      </div>
                      <div className="valuepanel">
                        <div className="valuepanel_block">
                          <p className="block_value">3%</p>
                          <p className="block_key">CPU使用率</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">105MB</p>
                          <p className="block_key">运行内存</p>
                        </div>
                        <div className="valuepanel_block">
                          <p className="block_value">600GB</p>
                          <p className="block_key">剩余空间</p>
                        </div>
                      </div>
                      <div className="serveroperate" style={{height:this.state.showvisitoroperate?'90px':'0'}}>
                        <div className="serveroperate_block" >
                          <Icon className="operateIcon servercolor2" type="poweroff" />
                          <p className="operate_key">远程重启</p>
                        </div>
                        <div className="serveroperate_block">
                          <Icon className="operateIcon servercolor2" type="phone" />
                          <p className="operate_key">负责人：张工</p>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>

              </div>
            </div>
           </div>;
  }
}

export default Server;
