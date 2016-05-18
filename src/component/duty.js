import React, { Component } from 'react';
import './App.less';
import './duty.less';

import {Icon,Progress  } from 'antd';
const ProgressCircle = Progress.Circle;

const echarts = require('echarts');
const Store = require('../flux/stores/vssStore');
const Action = require('../flux/actions/vssActions');
const IScroll = require('./iscroll.js');
const InkButton = require('./inkbutton');

const prisonCount = 10;
var currentprisonsel = -1;

function convertIndex2Chn(index){
  var data = ['一','二','三','四','五','六','七','八','九','十'];
  return data[index - 1];
}

function getprisonCount(index){
  var data = [120, 132, 101, 134, 90, 230, 210, 90, 230, 210];
  return data[index];
}

class Duty extends Component {
  currentprisonsel:null;
  componentDidMount(){
    this.updatepiecharts();
    //this.updatebarcharts();
    Store.addChangeListener(Store.notifytype.dutychange,this.onDutyChange);

    var prisonScroll = new IScroll('#prison_wrapper', { scrollX: true, scrollY: false, mouseWheel: true ,tap: true});
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var lilist = document.getElementsByClassName('li_prison');
    var _this = this;
    for (let i = 0; i < lilist.length; i++) {
      lilist[i].addEventListener('tap', function (e) {
          console.log('tap index:',i);
          if(this != _this.currentprisonsel){
            if(_this.currentprisonsel != null){
              _this.currentprisonsel.style.background = '';
            }
            _this.currentprisonsel = this;
            currentprisonsel = i;
            _this.setState({showdutyinfo:true});
            this.style.background = 'white'
          }else{
            _this.setState({showdutyinfo:false});
            _this.currentprisonsel = null;
            this.style.background = 'rgb(204,204,204)';
          }
       }, false);
    }
  }
  updatepiecharts(){
    var doc = document.getElementById('piechart');
    if(!doc)
      return;
    var countChart = echarts.getInstanceByDom(document.getElementById('piechart'));
     if(!countChart){
        countChart = echarts.init(document.getElementById('piechart'));
     }
     var countoption = {
         tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         color:['rgb(238,69,40)','rgb(250,189,122)', 'rgb(3,164,169)', 'rgb(243,154,19)', 'rgb(124,17,20)','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
         series: [
             {
                 name:'在押人员',
                 type:'pie',
                 radius: ['73%', '94%'],
                 hoverAnimation :false,
                 label: {
                     normal: {
                         show: false,
                         position: 'center'
                     },
                     emphasis: {
                         show: false,
                         textStyle: {
                             fontSize: '30',
                             fontWeight: 'bold'
                         }
                     }
                 },
                 labelLine: {
                     normal: {
                         show: false
                     }
                 },
                 data:[
                     {value:Store.getAllPrionserCount('jshj'), name:'家属会见'},
                     {value:Store.getAllPrionserCount('jcwd'), name:'警察外带'},
                     {value:Store.getAllPrionserCount('ynjy'), name:'狱内就医'},
                     {value:Store.getAllPrionserCount('thcs'), name:'提回重审'},
                     {value:Store.getAllPrionserCount('zglc'), name:'在管留仓'}
                 ]
             }
         ]
       }
     countChart.setOption(countoption);
  }
  updatebarcharts(){
    var _this = this;
    var prisonChart = echarts.getInstanceByDom(document.getElementById('barchart'));
     if(!prisonChart){
        prisonChart = echarts.init(document.getElementById('barchart'));
        prisonChart.on('click', function (params) {
          console.log(params);
          currentprisonsel = params.dataIndex;
          if(currentprisonsel >= 0){
            _this.setState({showdutyinfo:true});
          }
          _this.updatebarcharts();
        });
     }
     var xAxisdata = [];
     for (let i = 0; i < prisonCount; i++) {
       var data = {};
       data.value = convertIndex2Chn(i) + '监';
       if(currentprisonsel == i){
         var textStyle = {
           color:'white'
         }
         data.textStyle = textStyle;
       }
       xAxisdata.push(data);
     }
     var seriesdata = [];
     for (let i = 0; i < prisonCount; i++) {
       var data = {};
       data.value = getprisonCount(i);
       if(currentprisonsel == i){
         var itemStyle = {
           normal:{
             color:'white'
           }
         }
         data.itemStyle = itemStyle;
       }
       seriesdata.push(data);
     }
     var prisonoption = {
        backgroundColor:'rgba(31, 47, 62, 0.96)',
        title:{
          text:'监区人员数据概览',
          textStyle:{
              color:'white',
              fontSize:15,
              fontWeight:'normal'
          }
        },
          tooltip : {
              show:false,
              showContent:false,
                trigger: 'axis',
                triggerOn:'click',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line',        // 默认为直线，可选为：'line' | 'shadow'
                    lineStyle:{
                        color:'transparent',

                    }
                }
            },
            grid: {
              left: '0%',
              right: '0%',

                top:'4%',
                bottom: '25px',
              containLabel: false
            },
            xAxis : [
                {
                    splitLine:false,
                    axisLine:{
                        show:false
                    },
                    axisTick:{
                      show:false
                    },
                    axisLabel:{
                      textStyle:{
                          color:'rgba(255,255,255,0.2)',
                          fontSize:11,
                      },
                      margin:6,
                    },
                    max:'dataMax',
                    type : 'category',
                    data : xAxisdata,
                }
            ],
            yAxis : [
                {
                    splitLine:false,
                    axisLine:{
                        show:false
                    },
                    axisTick:{
                      show:false
                    },
                    axisLabel:{
                      show:false
                    },
                    type : 'value'
                }
            ],
            series : [
                {
                    barWidth:26,
                    name:'人员统计',
                    type:'bar',
                    barGap:'50%',
                    itemStyle:{
                      normal:{
                        color:'rgba(255,255,255,0.2)'
                      }
                    },
                    data:seriesdata
                }
            ]
      };
     prisonChart.setOption(prisonoption);
  }
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      showdutyinfo:false,
      curselprison:-1,
      dutyinfo:Store.getdutyinfo(),
    };
    this.onClickCall = this.onClickCall.bind(this);
    this.onClickQuery = this.onClickQuery.bind(this);
    this.onDutyChange = this.onDutyChange.bind(this);
    this.cancelshowduty = this.cancelshowduty.bind(this);
  }
  onDutyChange(){
    this.setState({dutyinfo:Store.getdutyinfo()});

    if(!this.isCalling()){
      $('#toast').show();
      setTimeout(function () {
        $('#toast').hide();
      }, 2000);
    }
  }
  cancelshowduty(){
    if(this.currentprisonsel != null){
      this.setState({showdutyinfo:false});
      this.currentprisonsel.style.background = 'rgb(42,55,79)';
      this.currentprisonsel = null;
    }
  }
  onClickCall(){
    Store.cleardutyinfo();
    Action.testCall(false);
  }
  onClickQuery(){

    //this.setState({showdutyinfo:!this.state.showdutyinfo});
     var $dialog = $('#querycall');
     $dialog.show();
     $dialog.find('.weui_btn_dialog').one('click', function () {
                         $dialog.hide();
     });
  }
  setcount(newcount){
    var count = this.state.count;
    count += 1;
    if(count > newcount){
      count = newcount;
    }
    this.setState({count:count});
    var _this = this;
    if(count < newcount){
      var time = 1;
      if(newcount - count <= 100){
        time = 10;
      }
      if(newcount - count <= 80){
        time = 30;
      }
      if(newcount - count <= 40){
        time = 50;
      }
      if(newcount - count <= 10){
        time = 200;
      }
      if(newcount - count <= 3){
        time = 400;
      }
      setTimeout(function(){
        _this.setcount(newcount);
      },time)
    }
  }
  isCalling(){
    return Store.getvalidprison() < prisonCount;
  }
  onClickphone(){
    var mask = $('#mask');
    var weuiActionsheet = $('#weui_actionsheet');
    weuiActionsheet.addClass('weui_actionsheet_toggle');
    mask.show().addClass('weui_fade_toggle').one('click', function () {
        hideActionSheet(weuiActionsheet, mask);
    });
    $('#actionsheet_cancel').one('click', function () {
      hideActionSheet(weuiActionsheet, mask);
    });
    weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

    function hideActionSheet(weuiActionsheet, mask) {
      weuiActionsheet.removeClass('weui_actionsheet_toggle');
      mask.removeClass('weui_fade_toggle');
      weuiActionsheet.on('transitionend', function () {
        mask.hide();
      }).on('webkitTransitionEnd', function () {
        mask.hide();
      })
    }
  }
  render() {
    this.updatepiecharts();
    var bCalling = this.isCalling();

    var subtitletext = "";
    if(bCalling){
      subtitletext = "正在更新 " + Store.getvalidprison() + '/10';
    }else{
      subtitletext = "已更新1分钟";
    }

    var marginTop = '0';
    var rotateY = 'rotateY(-90deg) skewY(-10deg)';

    if(this.state.showdutyinfo){
      marginTop = '-135px';
      rotateY = 'rotateY(0deg) skewY(0deg)';
    }

    var leader = "未提交";
    var leaderphone = "未提交";
    var dutyname = "未提交";
    var actionsheet_tel = "";
    var actionsheet_sms = "";
    var href_tel = "";
    var href_sms = "";
    if(currentprisonsel >= 0 && currentprisonsel < this.state.dutyinfo.length &&
    this.state.dutyinfo[currentprisonsel].leader != undefined){
      leader = this.state.dutyinfo[currentprisonsel].leader.name;
      leaderphone = this.state.dutyinfo[currentprisonsel].leader.tel;
      dutyname = this.state.dutyinfo[currentprisonsel].dutyperson.join(" ");

      actionsheet_tel = '给 '+ leader + ' ' + leaderphone + ' 打电话';
      actionsheet_sms = '给 '+ leader + ' ' + leaderphone + ' 发短信';
      href_tel = 'tel:' + leaderphone;
      href_sms = 'sms:' + leaderphone + '?body=' + leader + '：你好，请你及时提交点名信息。';
    }

    var prisonlist = [];

    for (var i = 0; i < prisonCount; i++) {
      var prisoninfo = this.state.dutyinfo[i];
      var prisoncount = <p className="li_prison_count" style={{color:'rgb(255, 85, 0)',fontSize:'25px'}}>未提交</p>;
      var maskheight = '100%';
      if(prisoninfo.prisonercount != undefined){
        var count = prisoninfo.prisonercount.zglc + prisoninfo.prisonercount.jcwd + prisoninfo.prisonercount.ynjy +
            prisoninfo.prisonercount.jshj + prisoninfo.prisonercount.thcs;

        if(count > 0){
          prisoncount = <p className="li_prison_count" style={{color:'black'}}>{count}<span className="ren">人</span></p>
          maskheight = '0';
        }
      }


      var prisondiv = <li className="li_prison">
        {prisoncount}
        <p className="li_prison_name">{convertIndex2Chn(prisoninfo.index) + '监区'}</p>
      </li>;
      prisonlist.push(prisondiv);
    }

    var percent = Store.getvalidprison()*100/prisonCount;

    var callbtn = <Icon type="calendar" />;

    return <div className="weui_tab_bd" style={{backgroundColor:'black'}}>
            <div className="titlebar">
              <p className="titlebar_title">值班管理</p>
              <InkButton id="callbtn" clickfun={this.onClickQuery} showanimate={false} clsname="titlebar_iconpanel" value={callbtn} />
            </div>
            <div id="dutycharts" onMouseDown={this.cancelshowduty} style={{marginTop:marginTop}}>
              {bCalling?<div id="dutycharts_mask" style={{width:percent+'%'}}></div>:null}
              <div id="chartspanel_out"></div>
              <div id="chartspanel_in">
              </div>
              <div id="piechart"></div>
              <p id="prisonsubtitle" style={{color:bCalling?'rgb(255, 85, 0)':'#888'}}>{subtitletext}</p>
              <p id="prisontitle">在押人数</p>
              <p id="prisoncount">{Store.getAllPrionserCount(-1)}</p>
              <div id="typeaccountpanel">
                <div className="typeaccount">
                  <p className="typeaccount_count">{Store.getAllPrionserCount('jshj')}</p>
                  <p className="typeaccount_name">家属会见</p>
                  <div className="typeaccount_color color1"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">{Store.getAllPrionserCount('jcwd')}</p>
                  <p className="typeaccount_name">警察外带</p>
                  <div className="typeaccount_color color2"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">{Store.getAllPrionserCount('ynjy')}</p>
                  <p className="typeaccount_name">狱内就医</p>
                  <div className="typeaccount_color color3"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">{Store.getAllPrionserCount('thcs')}</p>
                  <p className="typeaccount_name">提回重审</p>
                  <div className="typeaccount_color color4"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">{Store.getAllPrionserCount('zglc')}</p>
                  <p className="typeaccount_name">在管留仓</p>
                  <div className="typeaccount_color color5"></div>
                </div>
              </div>
            </div>
            <div id="dutyinfopanel" style={{transform:rotateY}}>
              <div id="dutyinfo">
                <div className="info_panel">
                  <InkButton id="leaderbtn" clickfun={this.onClickphone} clsname="info_panel_content info_panel_content_active"
                   value={[
                     <p className="info_pannel_content_key">负责人</p>,
                     <p className="info_pannel_content_value">{leader}</p>
                   ]} />
                  <div className="panel_line"></div>
                  <InkButton id="leaderphonebtn" clickfun={this.onClickphone} clsname="info_panel_content info_panel_content_active"
                   value={[
                    <p className="info_pannel_content_key">联系方式</p>,
                    <p className="info_pannel_content_value">{leaderphone}</p>
                  ]} />
                  <div className="panel_line"></div>
                  <div className="info_panel_content">
                    <p className="info_pannel_content_key">值班人员</p>
                    <p className="info_pannel_content_value">{dutyname}</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="carousel">
              {/*<div id="barchart"></div>*/}
              <div id="prison_wrapper" className="wrapper">
                <div className="scroller_hor">
                  <ul>
                  {prisonlist}
                  </ul>
                </div>
              </div>
            </div>
            <div className="weui_dialog_confirm" id="querycall" style={{display: 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd"><strong className="weui_dialog_title">手动点名</strong></div>
                    <div className="weui_dialog_bd">确定要立刻开始点名吗？</div>
                    <div className="weui_dialog_ft">
                        <a href="javascript:;" className="weui_btn_dialog default">取消</a>
                        <a href="javascript:;" onClick={this.onClickCall} className="weui_btn_dialog primary">确定</a>
                    </div>
                </div>
            </div>
            <div className="weui_mask_transition" id="mask"></div>
            <div className="weui_actionsheet" id="weui_actionsheet">
                <div className="weui_actionsheet_menu">
                    <div className="weui_actionsheet_cell">
                    <a href={href_tel}>{actionsheet_tel}</a>
                    </div>
                    <div className="weui_actionsheet_cell">
                    <a href={href_sms}>{actionsheet_sms}</a>
                    </div>
                </div>
                <div className="weui_actionsheet_action">
                    <div className="weui_actionsheet_cell" id="actionsheet_cancel">取消</div>
                </div>
            </div>
            <div id="toast" style={{display: "none"}}>
                <div className="weui_mask_transparent"></div>
                <div className="weui_toast">
                    <i className="weui_icon_toast"></i>
                    <p className="weui_toast_content">点名完成</p>
                </div>
            </div>
           </div>;
  }
}

export default Duty;
