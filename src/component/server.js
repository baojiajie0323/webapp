import React, { Component } from 'react';
import {Icon } from 'antd';
import './App.less';
import './server.less';

const echarts = require('echarts');

const Store = require('../flux/stores/vssStore');

class Server extends Component {
  constructor(props) {
    super(props);
    this.onClickReturn = this.onClickReturn.bind(this);
  }
  componentDidMount(){
    this.updatelinecharts('cspchart');
    this.updatelinecharts('chatchart');
    Store.addChangeListener(Store.notifytype.backbutton,this.onClickReturn);
  }
  updatelinecharts(element){
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
                  data:[15,20,22,90,50,30,40,25,
                        15,60,80,90,50,70,55,56,
                        52,10,8,7,18,30,40,48,
                      ],
                  lineStyle:{
                    normal:{
                      color:'#fff'
                    }
                  },
                  showSymbol:false,
                  //smooth:true,
              },
          ]
       }
     countChart.setOption(countoption);
  }
  onClickReturn(){
    this.props.returnfun();
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
              <div className="serverpanel serverbkcolor1">
                <div id="cspchart" className="valuechart">
                </div>
                <div className="valuepanel">
                </div>
              </div>
              <div className="serverpanel serverbkcolor2">
                <div id="chatchart" className="valuechart">
                </div>
                <div className="valuepanel">
                </div>
              </div>
            </div>
           </div>;
  }
}

export default Server;
