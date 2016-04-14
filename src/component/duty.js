import React, { Component } from 'react';
import './App.less';

import {Icon,Progress  } from 'antd';
const ProgressLine = Progress.Line;

const echarts = require('echarts');

const prisonCount = 8;
class Duty extends Component {
  componentDidMount(){
    //var prisonChart = echarts.init(document.getElementById('prisoncharts'));
    var countChart = echarts.init(document.getElementById('piechart'));
    // 绘制图表.
    var prisonoption = {
      tooltip : {
        showContent:false,
          trigger: 'axis',
          triggerOn:'click',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
        left: '-11%',
        right: '0%',
        bottom: '5%',
        height: '100%',
        containLabel: true
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
              type : 'category',
              data : ['一监','二监','三监','四监','五监','六监','七监','八监','九监','十监']
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
      color:['#4fd2c1','#faaa53', '#b973ff', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
      series : [
          {
              barWidth:8,
              name:'普通在监',
              type:'bar',
              stack: '人数统计',
              data:[120, 132, 101, 134, 90, 230, 210, 90, 230, 210]
          },
          {
              name:'劳动',
              type:'bar',
              stack: '人数统计',
              data:[220, 182, 191, 234, 290, 330, 310, 90, 230, 210]
          },
          {
              name:'就医',
              type:'bar',
              stack: '人数统计',
              data:[150, 232, 201, 154, 190, 330, 410, 90, 230, 210]
          },
      ]
    };
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

    //prisonChart.setOption(prisonoption);
    countChart.setOption(countoption);
  }
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      count:0
    };
    this.onClickCall = this.onClickCall.bind(this);
    this.onClickQuery = this.onClickQuery.bind(this);
  }
  onClickCall(){
    var _this = this;
  }
  onClickQuery(){
    //var count = this.state.count;
    //this.setcount(count + 1000);
    //this.setState({count:count + 300});
    navigator.vibrate([200, 200, 200]);
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
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  render() {
    return <div className="weui_tab_bd">
            <div className="titlebar">
              <p className="titlebar_title">值班管理</p>
              <div onClick={this.onClickQuery} className="titlebar_iconpanel">
                <Icon type="calendar" />
              </div>
            </div>
            <div id="dutycharts">
              <div id="chartspanel_out"></div>
              <div id="chartspanel_in"></div>
              <div id="piechart"></div>
              <p id="prisonsubtitle">已更新40分钟</p>
              <p id="prisontitle">在押人数</p>
              <p id="prisoncount">7,658</p>
            </div>
            <div id="carousel">

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
