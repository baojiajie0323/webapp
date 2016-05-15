import React, { Component } from 'react';
import {Icon } from 'antd';
import './App.less';
import './device.less';

const Store = require('../flux/stores/vssStore');
const IScroll = require('./iscroll.js');
const InkButton = require('./inkbutton');

var datalist = [
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'警报',news:{time:'1分钟前',events:'产生智能警戒线告警'},color:1},
  {name:'办公楼大门门禁',type:'门禁',area:'办公楼',company:'精工',state:'警报',news:{time:'20秒前',events:'产生外力开启告警'},color:1},
  {name:'三监区一监舍对讲点',type:'对讲',area:'三监区',company:'来邦',state:'离线',news:{time:'20秒前',events:'产生智能警戒线告警'},color:3},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'离线',news:{time:'20秒前',events:'产生智能警戒线告警'},color:3},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'离线',news:{time:'20秒前',events:'产生智能警戒线告警'},color:3},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
  {name:'一监区东南角枪机',type:'智能',area:'一监区',company:'科达',state:'正常',news:{time:'20秒前',events:'产生智能警戒线告警'},color:2},
];

class Device extends Component {
  constructor(props) {
    super(props);
    this.onClickReturn = this.onClickReturn.bind(this);
    this.state = {
      checkall:true,
      checkvideo:false,
      checkdoor:false,
      checkspeak:false,
      checkalert:false,
      checkpatrol:false,
      checkboard:false,
      checkbayonet:false,
      checkhighgrid:false,
    }
    this.onClickAll = this.onClickAll.bind(this);
    this.onClickVideo = this.onClickVideo.bind(this);
    this.onClickDoor = this.onClickDoor.bind(this);
    this.onClickSpeak = this.onClickSpeak.bind(this);
    this.onClickAlert = this.onClickAlert.bind(this);
    this.onClickPatrol = this.onClickPatrol.bind(this);
    this.onClickBoard = this.onClickBoard.bind(this);
    this.onClickBayonet = this.onClickBayonet.bind(this);
    this.onClickHighgrid = this.onClickHighgrid.bind(this);
  }
  componentDidMount(){
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
    this.initscroll();
  }
  initscroll(){
    if(document.getElementById('devicecontainer') != null){
        new IScroll('#devicecontainer', { mouseWheel: true ,tap: true});
    }
    if(document.getElementById('flitercontainer') != null){
        new IScroll('#flitercontainer', { mouseWheel: true ,scrollX: true, scrollY: false,tap: true});
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    document.getElementById('fliter_checkall').addEventListener('tap',this.onClickAll);
    document.getElementById('fliter_checkvideo').addEventListener('tap',this.onClickVideo);
    document.getElementById('fliter_checkdoor').addEventListener('tap',this.onClickDoor);
    document.getElementById('fliter_checkspeak').addEventListener('tap',this.onClickSpeak);
    document.getElementById('fliter_checkalert').addEventListener('tap',this.onClickAlert);
    document.getElementById('fliter_checkpatrol').addEventListener('tap',this.onClickPatrol);
    document.getElementById('fliter_checkboard').addEventListener('tap',this.onClickBoard);
    document.getElementById('fliter_checkbayonet').addEventListener('tap',this.onClickBayonet);
    document.getElementById('fliter_checkhighgrid').addEventListener('tap',this.onClickHighgrid);

    var scrollmapobj = new Map();
    var scrolldistmpobj = new Map();
    var scrolldisobj = new Map();
    var lastobj = null;
    var lastindex = -1;
    var validscroll = -1;
    var lilist = document.getElementsByClassName('devicepanel');
    for (let i = 0; i < lilist.length; i++) {
      lilist[i].addEventListener('touchstart', function (e) {
        scrollmapobj.set(i,e.touches[0]);
        if(lastobj != null && lastobj != e.target){
          $(lastobj).addClass("deviceanimate");
          $(lastobj).css("transform","translate("+0+"px)");
          scrolldisobj.set(lastindex,0);
          lastindex = -1;
          lastobj = null;
        }
        validscroll = -1;
        $(e.target).removeClass("deviceanimate");
        //console.log('touchstart:'+i + '_' +e.touches[0].pageX+':'+e.touches[0].pageY);
       }, false);
      lilist[i].addEventListener('touchmove', function (e) {
         var currentscrolldis = 0;
         if(scrolldisobj.get(i) != undefined){
           currentscrolldis = scrolldisobj.get(i);
         }
         //console.log('touchmove:'+i + '_' +e.touches[0].pageX+':'+e.touches[0].pageY);
         //console.log('touchmove - currentscrolldis:'+i + '_' +currentscrolldis);
         if(validscroll == -1 && e.touches[0].pageX < scrollmapobj.get(i).pageX && lastobj != e.target){
           var ydis = e.touches[0].pageY - scrollmapobj.get(i).pageY;
           if(ydis >= 2 || ydis <= -2){
             validscroll = 0;
           }else{
             validscroll = 1;
           }
         }
         var scrolldis = e.touches[0].pageX - scrollmapobj.get(i).pageX + currentscrolldis;
         if(scrolldis > 0 || validscroll == 0){
           scrolldis = 0;
         }
         //console.log('touchmove - scrolldis:'+i + '_' +scrolldis);
         scrolldistmpobj.set(i,scrolldis);
         $(e.target).css("transform","translate("+scrolldis+"px)");
        }, false);
      lilist[i].addEventListener('touchend', function (e) {
        //console.log('touchend:'+i + '_' +scrolldistmpobj.get(i));
        var dis = scrolldistmpobj.get(i);
        if(dis < -90){
          dis = -180;
          lastobj = e.target;
          lastindex = i;
        }else{
          dis = 0;
        }
        $(e.target).addClass("deviceanimate");
        $(e.target).css("transform","translate("+dis+"px)");
        scrolldisobj.set(i,dis);
       }, false);
    }
  }
  onClickReturn(){
    this.props.returnfun();
  }
  onClickAll(){
    this.setState({checkall:!this.state.checkall});
  }
  onClickVideo(){
    this.setState({checkvideo:!this.state.checkvideo});
  }
  onClickDoor(){
    this.setState({checkdoor:!this.state.checkdoor});
  }
  onClickSpeak(){
    this.setState({checkspeak:!this.state.checkspeak});
  }
  onClickAlert(){
    this.setState({checkalert:!this.state.checkalert});
  }
  onClickPatrol(){
    this.setState({checkpatrol:!this.state.checkpatrol});
  }
  onClickBoard(){
    this.setState({checkboard:!this.state.checkboard});
  }
  onClickBayonet(){
    this.setState({checkbayonet:!this.state.checkbayonet});
  }
  onClickHighgrid(){
    this.setState({checkhighgrid:!this.state.checkhighgrid});
  }
  render() {
    var dataelelist = [];
    dataelelist.push(<div id="prespace"></div>);
    var _this = this;
    datalist.map(function(data){

      var deviceele = <div className="devicepanel" >
                        <div className={"devicestateline devicebkcolor" + data.color}></div>
                        <p className="devicetext1">{data.type}</p>
                        <p className="devicetext2">{data.name}</p>
                        <i className={data.typeicon} />
                        <p className="devicetext4">{data.area}</p>
                        <p className="devicetext5">{data.company}</p>
                        <p className={"devicetext3 devicecolor" + data.color}>{data.state}</p>
                        <p className="devicemore1">呼叫</p>
                        <p className="devicemore2">接警</p>
                      </div>;
      dataelelist.push(deviceele);
    })

    return <div className="subpagefullscreen">
            <div id="device">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">安防设备</p>
              </div>
              <div className="weui_search_bar" id="search_bar">
                  <form className="weui_search_outer">
                      <div className="weui_search_inner">
                          <i className="weui_icon_search"></i>
                          <input type="search" className="weui_search_input" id="search_input" placeholder="搜索" required/>
                          <a href="javascript:" className="weui_icon_clear" id="search_clear"></a>
                      </div>
                      <label className="weui_search_text" id="search_text">
                          <i className="weui_icon_search"></i>
                          <span>搜索</span>
                      </label>
                  </form>
                  <a href="javascript:" className="weui_search_cancel" id="search_cancel">取消</a>
              </div>
                <div id="flitercontainer" className="wrapper">
                  <div className="scroller_hor">
                    <ul>
                     <div id="fliter_checkall" onClick={this.onClickAll} className={"fliterblock " + (this.state.checkall?"flitercheck":"")}>
                     {this.state.checkall?<Icon type="check" className="flitercheckicon"/>:null}全部</div>
                     <div id="fliter_checkvideo" onClick={this.onClickVideo} className={"fliterblock " + (this.state.checkvideo?"flitercheck":"")}>
                     {this.state.checkvideo?<Icon type="check" className="flitercheckicon"/>:null}摄像头</div>
                     <div id="fliter_checkdoor" onClick={this.onClickDoor} className={"fliterblock " + (this.state.checkdoor?"flitercheck":"")}>
                     {this.state.checkdoor?<Icon type="check" className="flitercheckicon"/>:null}门禁</div>
                     <div id="fliter_checkspeak" onClick={this.onClickSpeak} className={"fliterblock " + (this.state.checkspeak?"flitercheck":"")}>
                     {this.state.checkspeak?<Icon type="check" className="flitercheckicon"/>:null}对讲</div>
                     <div id="fliter_checkalert" onClick={this.onClickAlert} className={"fliterblock " + (this.state.checkalert?"flitercheck":"")}>
                     {this.state.checkalert?<Icon type="check" className="flitercheckicon"/>:null}报警</div>
                     <div id="fliter_checkpatrol" onClick={this.onClickPatrol} className={"fliterblock " + (this.state.checkpatrol?"flitercheck":"")}>
                     {this.state.checkpatrol?<Icon type="check" className="flitercheckicon"/>:null}巡更</div>
                     <div id="fliter_checkboard" onClick={this.onClickBoard} className={"fliterblock " + (this.state.checkboard?"flitercheck":"")}>
                     {this.state.checkboard?<Icon type="check" className="flitercheckicon"/>:null}广播</div>
                     <div id="fliter_checkbayonet" onClick={this.onClickBayonet} className={"fliterblock " + (this.state.checkbayonet?"flitercheck":"")}>
                     {this.state.checkbayonet?<Icon type="check" className="flitercheckicon"/>:null}出入口</div>
                     <div id="fliter_checkhighgrid" onClick={this.onClickHighgrid} className={"fliterblock " + (this.state.checkhighgrid?"flitercheck":"")}>
                     {this.state.checkhighgrid?<Icon type="check" className="flitercheckicon"/>:null}电网</div>
                    </ul>
                  </div>
                </div>
              <div id="devicecontainer">
                <div className="scroller">
                  <ul>
                  {dataelelist}
                  </ul>
                </div>
              </div>
            </div>
           </div>;
  }
}

export default Device;
