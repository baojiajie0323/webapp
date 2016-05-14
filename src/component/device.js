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
    this.onClickFliter = this.onClickFliter.bind(this);
    this.state = {
      showfliter:false
    }
  }
  componentDidMount(){
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
    this.initscroll();
  }
  initscroll(){
    if(document.getElementById('devicecontainer') != null){
        var deviceScroll = new IScroll('#devicecontainer', { mouseWheel: true ,tap: true});
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

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
  onClickFliter(){
    this.setState({
      showfliter:!this.state.showfliter
    })
  }
  render() {
    var dataelelist = [];
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

    var fliterbtn = <Icon type="appstore" />;
    return <div className="subpagefullscreen">
            <div id="device">
              <div className="titlebar">
                <div onClick={this.onClickReturn} className="titlebar_back">
                  <Icon type="left" />
                </div>
                <div className="titlebar_line"></div>
                <p className="titlebar_title">安防设备</p>
                <InkButton id="fliterbtn" clickfun={this.onClickFliter} showanimate={false} clsname="titlebar_iconpanel" value={fliterbtn} />
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
              {this.state.showfliter?
                <div>
                </div>
                :null
              }
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
