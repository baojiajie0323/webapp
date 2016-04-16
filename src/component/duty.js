import React, { Component } from 'react';
import './App.less';

import {Icon,Progress  } from 'antd';
const ProgressLine = Progress.Line;

const echarts = require('echarts');

const prisonCount = 10;
var currentprisonsel = -1;

function convertIndex2Chn(index){
  var data = ['一','二','三','四','五','六','七','八','九','十'];
  return data[index];
}

function getprisonCount(index){
  var data = [120, 132, 101, 134, 90, 230, 210, 90, 230, 210];
  return data[index];
}

class Duty extends Component {
  componentDidMount(){
    var countChart = echarts.init(document.getElementById('piechart'));
    // 绘制图表.
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
                    {value:535, name:'家属会见'},
                    {value:310, name:'警察外带'},
                    {value:234, name:'狱内就医'},
                    {value:135, name:'提回重审'},
                    {value:948, name:'在管留仓'}
                ]
            }
        ]
      }

    this.updatebarcharts();
    countChart.setOption(countoption);
  }
  updatebarcharts()
  {
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
      percent: 0,
      count:0,
      showdutyinfo:false
    };
    this.onClickCall = this.onClickCall.bind(this);
    this.onClickQuery = this.onClickQuery.bind(this);
  }
  onClickCall(){
    this.setState({showdutyinfo:true});
  }
  onClickQuery(){

    this.setState({showdutyinfo:!this.state.showdutyinfo});

    // navigator.vibrate([200, 200, 200]);
    // var $dialog = $('#querycall');
    // $dialog.show();
    // $dialog.find('.weui_btn_dialog').one('click', function () {
    //                     $dialog.hide();
    // });
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
  render() {
    var marginTop = '0';
    var rotateY = 'rotateY(-90deg) skewY(-10deg)';
    if(this.state.showdutyinfo){
      marginTop = '-150px';
      rotateY = 'rotateY(0deg) skewY(0deg)';
    }
    return <div className="weui_tab_bd" style={{backgroundColor:'black'}}>
            <div className="titlebar">
              <p className="titlebar_title">值班管理</p>
              <div onClick={this.onClickQuery} className="titlebar_iconpanel">
                <Icon type="calendar" />
              </div>
            </div>
            <div id="dutycharts" style={{marginTop:marginTop}}>
              <div id="chartspanel_out"></div>
              <div id="chartspanel_in"></div>
              <div id="piechart"></div>
              <p id="prisonsubtitle">已更新40分钟</p>
              <p id="prisontitle">在押人数</p>
              <p id="prisoncount">7,658</p>
              <div id="typeaccountpanel">
                <div className="typeaccount">
                  <p className="typeaccount_count">535</p>
                  <p className="typeaccount_name">家属会见</p>
                  <div className="typeaccount_color color1"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">310</p>
                  <p className="typeaccount_name">警察外带</p>
                  <div className="typeaccount_color color2"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">234</p>
                  <p className="typeaccount_name">狱内就医</p>
                  <div className="typeaccount_color color3"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">135</p>
                  <p className="typeaccount_name">提回重审</p>
                  <div className="typeaccount_color color4"></div>
                </div>
                <div className="typeaccount">
                  <p className="typeaccount_count">948</p>
                  <p className="typeaccount_name">在管留仓</p>
                  <div className="typeaccount_color color5"></div>
                </div>
              </div>
            </div>
            <div id="dutyinfopanel" style={{transform:rotateY}}>
              <div id="dutyinfo">
                值班信息展示
              </div>
            </div>
            <div id="carousel">
              <div id="barchart"></div>
            </div>
            <div className="weui_dialog_confirm" id="querycall" style={{display: 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd"><strong className="weui_dialog_title">提示</strong></div>
                    <div className="weui_dialog_bd">您确定要立刻开始点名吗？</div>
                    <div className="weui_dialog_ft">
                        <a href="javascript:;" className="weui_btn_dialog default">取消</a>
                        <a href="javascript:;" onClick={this.onClickCall} className="weui_btn_dialog primary">确定</a>
                    </div>
                </div>
            </div>
           </div>;
  }
}

export default Duty;
