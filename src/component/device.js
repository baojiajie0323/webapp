import React, { Component } from 'react';
import {Icon } from 'antd';
import './App.less';
import './device.less';

const Store = require('../flux/stores/vssStore');
const IScroll = require('./iscroll.js');

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

    var scrollmapobj = {};
    var scrolldisobj = {};
    var lilist = document.getElementsByClassName('devicepanel');
    for (let i = 0; i < lilist.length; i++) {
      lilist[i].addEventListener('touchstart', function (e) {
        scrollmapobj.i = e.touches[0].pageX;
       }, false);
      lilist[i].addEventListener('touchmove', function (e) {
         var currentscrolldis = 0;
         if(scrolldisobj.i != undefined){
           currentscrolldis = scrolldisobj.i;
         }
         var scrolldis = e.touches[0].pageX - scrollmapobj.i + currentscrolldis;
         scrolldisobj.i = scrolldis;
         $(e.target).css("transform","translate("+scrolldis+"px)");
        }, false);
      lilist[i].addEventListener('touchend', function (e) {
        console.log('touchend:',e);
       }, false);
    }
  }
  onClickReturn(){
    this.props.returnfun();
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
                        <p className="devicemore1">{data.company}</p>
                        <p className="devicemore2">{data.company}</p>
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
