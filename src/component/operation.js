import React, { Component } from 'react';
import { QueueAnim } from 'antd';
import './App.less';





const echarts = require('echarts');

class Operation extends Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('charts'));
    // 绘制图表.
    var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['谈话系统','访客系统','安防系统','督导系统']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['CPU','内存','磁盘']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'谈话系统',
            type:'bar',
            data:[20, 40, 70]
        },
        {
            name:'访客系统',
            type:'bar',
            data:[18, 75, 40]
        },
        {
            name:'安防系统',
            type:'bar',
            data:[30, 66, 40]
        },
        {
            name:'督导系统',
            type:'bar',
            data:[25, 68, 50]
        }
    ]
};
    myChart.setOption(option);
  }
  render() {
    return <div id="operation" className="weui_tab_bd">
            <div className="titlebar">
              <p className="titlebar_title">运维管理</p>
            </div>
            <div id="charts" style={{height:'30%', width:'100%'}}>
            </div>
           </div>;
  }
}

export default Operation;
