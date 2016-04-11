import React, { Component } from 'react';
import './App.less';

const Store = require('../flux/stores/vssStore');
const Login = require('./login');
const Footbar = require('./footbar');
const Operation = require('./operation');
const Duty = require('./duty');
const Message = require('./message');
const Aboutme = require('./aboutme');

class App extends Component {
  componentDidMount(){
    document.addEventListener('deviceready', this.onDeviceReady, false);
    Store.addChangeListener(Store.notifytype.loginstate,this.onLoginChange);

    Store.adddevicemsg({iconname:'门',time:'上午9:53',type:'门禁',name:'档案中心大门',desc:'恢复外力开启报警'});
    Store.adddevicemsg({iconname:'门',time:'上午9:52',type:'门禁',name:'档案中心大门',desc:'产生外力开启报警'});
    Store.adddevicemsg({iconname:'对',time:'上午6:33',type:'对讲',name:'一监区三监舍对讲点',desc:'产生对讲打开报警'});
    Store.adddevicemsg({iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC上线'});
    Store.adddevicemsg({iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC下线'});
    Store.adddevicemsg({iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC上线'});
    Store.adddevicemsg({iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC下线'});
    Store.adddevicemsg({iconname:'监',time:'2天前',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC上线'});
    Store.adddevicemsg({iconname:'监',time:'2天前',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC下线'});
    Store.adddevicemsg({iconname:'广',time:'2天前',type:'广播',name:'四监区大厅广播',desc:'恢复分贝过高报警'});
    Store.adddevicemsg({iconname:'广',time:'2天前',type:'广播',name:'四监区大厅广播',desc:'产生分贝过高报警'});
    Store.adddevicemsg({iconname:'巡',time:'5天前',type:'巡更',name:'一监区1楼巡更点',desc:'产生未巡报警'});
    Store.adddevicemsg({iconname:'巡',time:'5天前',type:'巡更',name:'一监区2楼巡更点',desc:'产生未巡报警'});
    Store.adddevicemsg({iconname:'巡',time:'5天前',type:'巡更',name:'一监区3楼巡更点',desc:'产生未巡报警'});
    Store.adddevicemsg({iconname:'巡',time:'5天前',type:'巡更',name:'一监区4楼巡更点',desc:'产生未巡报警'});

    Store.addsysmsg({iconname:'谈',time:'上午1:04',type:'谈话',name:'谈话系统',desc:'CPU过高[90%]'});
    Store.addsysmsg({iconname:'访',time:'上午0:10',type:'访客',name:'访客系统',desc:'CPU过高[95%]'});
    Store.addsysmsg({iconname:'安',time:'昨天',type:'安防',name:'安防系统',desc:'系统关闭'});
    Store.addsysmsg({iconname:'安',time:'2天前',type:'安防',name:'安防系统',desc:'磁盘空间不足[剩余10%]'});
    Store.addsysmsg({iconname:'运',time:'3天前',type:'运维',name:'运维系统',desc:'内存过高[85%]'});
    Store.addsysmsg({iconname:'安',time:'6天前',type:'安防',name:'安防系统',desc:'系统关闭'});
    Store.addsysmsg({iconname:'谈',time:'3/31',type:'谈话',name:'谈话系统',desc:'CPU超过预设值[80]'});
    Store.addsysmsg({iconname:'安',time:'3/31',type:'安防',name:'安防系统',desc:'内存过高[85%]'});
    Store.addsysmsg({iconname:'访',time:'3/27',type:'访客',name:'谈话系统',desc:'CPU超过预设值[80]'});
    Store.addsysmsg({iconname:'安',time:'3/25',type:'安防',name:'访客系统',desc:'内存过高[85%]'});
    Store.addsysmsg({iconname:'安',time:'3/22',type:'安防',name:'安防系统',desc:'CPU超过预设值[80]'});
    Store.addsysmsg({iconname:'谈',time:'3/22',type:'谈话',name:'谈话系统',desc:'磁盘空间不足[剩余10%]'});

    Store.adddutymsg({iconname:'点',time:'下午13:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'下午12:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1526人]'});
    Store.adddutymsg({iconname:'点',time:'上午11:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午10:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午9:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1526人]'});
    Store.adddutymsg({iconname:'点',time:'上午8:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午7:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午6:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1526人]'});
    Store.adddutymsg({iconname:'点',time:'上午5:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午4:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午3:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午2:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午1:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'上午0:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
  }
  constructor(props) {
    super(props);
    this.state = {
      tabindex:1,
      login:Store.getloginsuccess()
    };
    this.onSel = this.onSel.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
  }
  onDeviceReady(){
    //alert('DeviceReady');
     setTimeout(function(){
        navigator.splashscreen.hide();
     },3000);
  }
  onLoginChange(){
    this.setState({
      login:Store.getloginsuccess()
    });
  }
  onSel(tabindex){
    //alert(tabindex);

    this.setState({tabindex:tabindex});
  }
  render() {
    var content = [];
    if(!this.state.login){
      content = <Login />;
    }else{
      content.push(<Footbar onsel={this.onSel} tabindex={this.state.tabindex} />);
      if(this.state.tabindex == 1){
        content.push(<Operation key="tab1" />);
      }else if(this.state.tabindex == 2){
        content.push(<Duty key="tab2" />);
      }
      else if(this.state.tabindex == 3){
        content.push(<Message key="tab3" />);
      }
      else if(this.state.tabindex == 4){
        content.push(<Aboutme key="tab4" />);
      }
    }

    return <div style={{width:'100%',height:'100%'}}>
      {content}
    </div>
  }
}

export default App;
