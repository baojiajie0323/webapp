import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';

const Store = require("../flux/stores/vssStore");
const Backup = require("./backup");
const Device = require("./device");
const Server = require("./server");
const Temp = require("./temp");

const echarts = require('echarts');

class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showstateblock:false,
      showdeviceblock1:false,
      showdeviceblock2:false,
      showserverblock:false,
      showtempblock:false,
      showbackupblock:false,
      showdevicetext:false,
      showservertext:false,
      showtemptext:false,
      showbackuptext:false,

      showbackup: false,
      showdevice: false,
      showserver: false,
      showtemp: false,
    };
    this.onClickbackup = this.onClickbackup.bind(this);
    this.onClickReturnBackup = this.onClickReturnBackup.bind(this);
    this.onClicktemp = this.onClicktemp.bind(this);
    this.onClickReturnTemp = this.onClickReturnTemp.bind(this);
    this.onClickserver = this.onClickserver.bind(this);
    this.onClickReturnServer = this.onClickReturnServer.bind(this);
    this.onClickdevice = this.onClickdevice.bind(this);
    this.onClickReturnDevice = this.onClickReturnDevice.bind(this);
  }
  componentDidMount(){
    var _this = this;
    var _animatetime = 0;
    var _starttexttime = 0;
    var firstlogin = Store.getfirstlogin();
    if(firstlogin){
      setTimeout(function(){_this.setState({showstateblock:true});},_animatetime + 0);
      setTimeout(function(){_this.setState({showdeviceblock1:true});},_animatetime + 400);
      setTimeout(function(){_this.setState({showserverblock:true});},_animatetime + 400);
      setTimeout(function(){_this.setState({showtempblock:true});},_animatetime + 500);
      setTimeout(function(){_this.setState({showbackupblock:true});},_animatetime + 600);
      setTimeout(function(){_this.setState({showdeviceblock2:true});},_animatetime + 950);
      _starttexttime = 1150;
    }
    setTimeout(function(){_this.setState({showdevicetext:true});},_starttexttime);
    setTimeout(function(){_this.setState({showtemptext:true});},_starttexttime);
    setTimeout(function(){_this.setState({showservertext:true});},_starttexttime + 100);
    setTimeout(function(){_this.setState({showbackuptext:true});},_starttexttime + 200);
    setTimeout(function(){_this.updatepiecharts();},_starttexttime + 300);

    setTimeout(function(){Store.setfirstlogin(false);},_animatetime + 1450);
  }
  updatepiecharts(){
    var doc = document.getElementById('devicechart');
    if(!doc)
      return;
    var countChart = echarts.getInstanceByDom(document.getElementById('devicechart'));
     if(!countChart){
        countChart = echarts.init(document.getElementById('devicechart'));
     }
     var countoption = {
       series: [
                      {
                          name:'异常设备',
                          type:'pie',
                          radius: ['0%', '70%'],
                          avoidLabelOverlap: false,
                          center:['35%','50%'],
                          label: {
                              normal: {
                                  show: false
                              },
                          },
                          labelLine: {
                              normal: {
                                  show: false
                              }
                          },
                          data:[
                              {value:6, name:'离线'},
                              {value:5, name:'报警'},
                              {value:4, name:'报修'}
                          ]
                      }
                  ]
       }
     countChart.setOption(countoption);
  }
  onClickbackup(){
    this.setState({showbackup:true});
  }
  onClickReturnBackup(){
    this.setState({showbackup:false});
  }
  onClickdevice(){
    this.setState({showdevice:true});
  }
  onClickReturnDevice(){
    this.setState({showdevice:false});
  }
  onClicktemp(){
    this.setState({showtemp:true});
  }
  onClickReturnTemp(){
    this.setState({showtemp:false});
  }
  onClickserver(){
    this.setState({showserver:true});
  }
  onClickReturnServer(){
    this.setState({showserver:false});
  }
  render() {
    var firstlogin = Store.getfirstlogin();

    var subpage = null;
    if(this.state.showbackup){
      subpage = <Backup key="Backup" returnfun={this.onClickReturnBackup}/>;
    }else if(this.state.showtemp){
      subpage = <Temp key="Temp" returnfun={this.onClickReturnTemp}/>;
    }else if(this.state.showserver){
      subpage = <Server key="Server" returnfun={this.onClickReturnServer}/>;
    }else if(this.state.showdevice){
      subpage = <Device key="Device" returnfun={this.onClickReturnDevice}/>;
    }
    return <div id="operation" className="weui_tab_bd">
              <div className="titlebar backgroundtransparent">
                <p className="titlebar_title">运维中心</p>
              </div>
              <div id="stateblock" style={{top:this.state.showstateblock || !firstlogin ?'0':'100%'}}>
              </div>
              <div id="deviceblock" onClick={this.onClickdevice} style={{top:this.state.showdeviceblock1 || !firstlogin ?'47%':'100%',
                bottom:this.state.showdeviceblock2 || !firstlogin?'175px':'55px'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showdevicetext?'1':'0'}}>
                  <p className="blockpanel_title">安防设备</p>
                  {/*<p id="devicepanel_title1">设备总数：</p>*/}
                  <p id="devicepanel_percent">725</p>
                  <div id="devicepanel_line"></div>
                  <div id="devicechart">
                  </div>
                  <div id="devicechart_number" style={{transform:this.state.showdevicetext?'scale(0.35)':'scale(0)'}}>
                    <p>15</p>
                  </div>
                </div>
              </div>
              <div id="serverblock" onClick={this.onClickserver} style={{bottom:this.state.showserverblock || !firstlogin ?'55px':'100%',
                height:this.state.showserverblock|| !firstlogin?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showservertext?'1':'0',
                  transform:this.state.showservertext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">系统服务</p>
                  <p id="serverpanel_percent">4<span id="serverpanel_percent_all">/5</span></p>
                </div>
              </div>
              <div id="tempblock" onClick={this.onClicktemp} style={{bottom:this.state.showtempblock || !firstlogin ?'55px':'100%',
                height:this.state.showtempblock|| !firstlogin?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showtemptext?'1':'0',
                  transform:this.state.showtemptext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">机房温度</p>
                  <p id="temppanel_text">20<span id="temppanel_text_fh">&nbsp;℃</span></p>
                </div>
              </div>
              <div id="backupblock" onClick={this.onClickbackup} style={{bottom:this.state.showbackupblock || !firstlogin ?'55px':'100%',
                height:this.state.showbackupblock|| !firstlogin?'120px':'200%'
                }}>
                <div className="blockpanel" style={{opacity:this.state.showbackuptext?'1':'0',
                  transform:this.state.showbackuptext?'scale(1)':'scale(0.9)'}}>
                  <p className="blockpanel_title">数据备份</p>
                  <p id="backuppanel_text">1<span id="backuppanel_text_small">天前</span></p>
                </div>
              </div>
              <QueueAnim className="subpage" animConfig={[
              { opacity: [1, 0], translateX: [0, '100%'] },
              { opacity: [1, 0], translateX: [0, '100%'] }
              ]}>
              {subpage}
              </QueueAnim>
           </div>
  }
}

export default Operation;
