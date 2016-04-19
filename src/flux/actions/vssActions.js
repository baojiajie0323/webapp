'use strict';

const AJAXTIMEOUT = 10*1000;
var AppDispatcher = require('../AppDispatcher');
var Store = require('../stores/vssStore');
import { message } from 'antd';

var VssActions = {
  testmsg:function(){
    var msgid = 1;
    Store.adddevicemsg({id:msgid++,iconname:'门',time:'上午9:53',type:'门禁',name:'档案中心大门',desc:'恢复外力开启报警'});
    Store.adddevicemsg({id:msgid++,iconname:'门',time:'上午9:52',type:'门禁',name:'档案中心大门',desc:'产生外力开启报警'});
    Store.adddevicemsg({id:msgid++,iconname:'对',time:'上午6:33',type:'对讲',name:'一监区三监舍对讲点',desc:'产生对讲打开报警'});
    Store.adddevicemsg({id:msgid++,iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC上线'});
    Store.adddevicemsg({id:msgid++,iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC下线'});
    Store.adddevicemsg({id:msgid++,iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC上线'});
    Store.adddevicemsg({id:msgid++,iconname:'监',time:'昨天',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC下线'});
    Store.adddevicemsg({id:msgid++,iconname:'监',time:'2天前',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC上线'});
    Store.adddevicemsg({id:msgid++,iconname:'监',time:'2天前',type:'监控',name:'大门右侧走廊IPC',desc:'大门右侧走廊IPC下线'});
    Store.adddevicemsg({id:msgid++,iconname:'广',time:'2天前',type:'广播',name:'四监区大厅广播',desc:'恢复分贝过高报警'});
    Store.adddevicemsg({id:msgid++,iconname:'广',time:'2天前',type:'广播',name:'四监区大厅广播',desc:'产生分贝过高报警'});
    Store.adddevicemsg({id:msgid++,iconname:'巡',time:'5天前',type:'巡更',name:'一监区1楼巡更点',desc:'产生未巡报警'});
    Store.adddevicemsg({id:msgid++,iconname:'巡',time:'5天前',type:'巡更',name:'一监区2楼巡更点',desc:'产生未巡报警'});
    Store.adddevicemsg({id:msgid++,iconname:'巡',time:'5天前',type:'巡更',name:'一监区3楼巡更点',desc:'产生未巡报警'});
    Store.adddevicemsg({id:msgid++,iconname:'巡',time:'5天前',type:'巡更',name:'一监区4楼巡更点',desc:'产生未巡报警'});

    Store.addsysmsg({id:msgid++,iconname:'谈',time:'上午1:04',type:'谈话',name:'谈话系统',desc:'CPU过高[90%]'});
    Store.addsysmsg({id:msgid++,iconname:'访',time:'上午0:10',type:'访客',name:'访客系统',desc:'CPU过高[95%]'});
    Store.addsysmsg({id:msgid++,iconname:'安',time:'昨天',type:'安防',name:'安防系统',desc:'系统关闭'});
    Store.addsysmsg({id:msgid++,iconname:'安',time:'2天前',type:'安防',name:'安防系统',desc:'磁盘空间不足[剩余10%]'});
    Store.addsysmsg({id:msgid++,iconname:'运',time:'3天前',type:'运维',name:'运维系统',desc:'内存过高[85%]'});
    Store.addsysmsg({id:msgid++,iconname:'安',time:'6天前',type:'安防',name:'安防系统',desc:'系统关闭'});
    Store.addsysmsg({id:msgid++,iconname:'谈',time:'3/31',type:'谈话',name:'谈话系统',desc:'CPU超过预设值[80]'});
    Store.addsysmsg({id:msgid++,iconname:'安',time:'3/31',type:'安防',name:'安防系统',desc:'内存过高[85%]'});
    Store.addsysmsg({id:msgid++,iconname:'访',time:'3/27',type:'访客',name:'谈话系统',desc:'CPU超过预设值[80]'});
    Store.addsysmsg({id:msgid++,iconname:'安',time:'3/25',type:'安防',name:'访客系统',desc:'内存过高[85%]'});
    Store.addsysmsg({id:msgid++,iconname:'安',time:'3/22',type:'安防',name:'安防系统',desc:'CPU超过预设值[80]'});
    Store.addsysmsg({id:msgid++,iconname:'谈',time:'3/22',type:'谈话',name:'谈话系统',desc:'磁盘空间不足[剩余10%]'});

    Store.adddutymsg({id:msgid++,iconname:'点',time:'下午13:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'下午12:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1526人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午11:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午10:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午9:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1526人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午8:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午7:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午6:12',type:'点名',name:'自动点名',desc:'数据更新完毕[1526人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午5:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午4:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午3:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午2:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午1:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'上午0:15',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
    Store.adddutymsg({id:msgid++,iconname:'点',time:'昨天',type:'点名',name:'自动点名',desc:'数据更新完毕[1527人]'});
  },
  testCall:function(init){
    setTimeout(function(){Store.updatedutyinfo({index:3,leader:{name:'顾超',tel:'10086'},dutyperson:["张军民","吴斌","黄昊","顾文君"],
      prisonercount:{zglc:80,jcwd:12,ynjy:6,jshj:30,thcs:30}})},init?0:1000);
    setTimeout(function(){Store.updatedutyinfo({index:4,leader:{name:'章昭俊',tel:'10086'},dutyperson:["刘铁","吕册","王彦苏","刘化峰"],
      prisonercount:{zglc:52,jcwd:8,ynjy:30,jshj:15,thcs:12}})},init?0:2000);
    setTimeout(function(){Store.updatedutyinfo({index:7,leader:{name:'黄杰',tel:'10086'},dutyperson:["沙丽珊","王志会","姜波","王昕"],
      prisonercount:{zglc:120,jcwd:7,ynjy:6,jshj:30,thcs:8}})},init?0:3000);
    setTimeout(function(){Store.updatedutyinfo({index:1,leader:{name:'杜峥嵘',tel:'10086'},dutyperson:["彭莉","米云龙","秦勤","许华"],
      prisonercount:{zglc:15,jcwd:15,ynjy:6,jshj:30,thcs:47}})},init?0:4000);
    setTimeout(function(){Store.updatedutyinfo({index:9,leader:{name:'白宏宇',tel:'10086'},dutyperson:["兰庆伟","佟冬蕾","曹宽","孙成伟"],
      prisonercount:{zglc:90,jcwd:20,ynjy:6,jshj:30,thcs:1}})},init?0:5000);
    setTimeout(function(){Store.updatedutyinfo({index:6,leader:{name:'朱晓春',tel:'10086'},dutyperson:["张大勇","刘贤宇","李月","姚佳媛"],
      prisonercount:{zglc:75,jcwd:0,ynjy:6,jshj:30,thcs:15}})},init?0:6000);
    setTimeout(function(){Store.updatedutyinfo({index:5,leader:{name:'张小勇',tel:'10086'},dutyperson:["张丽","益长虹","周洪波","郑直"],
      prisonercount:{zglc:45,jcwd:10,ynjy:6,jshj:30,thcs:1}})},init?0:7000);
    setTimeout(function(){Store.updatedutyinfo({index:2,leader:{name:'王家亮',tel:'10086'},dutyperson:["梁晓姗","孙玉","张雁冰","宋维娜"],
      prisonercount:{zglc:14,jcwd:8,ynjy:6,jshj:30,thcs:0}})},init?0:8000);
    setTimeout(function(){Store.updatedutyinfo({index:10,leader:{name:'赵杰',tel:'10086'},dutyperson:["王涵","孙丽","祁英","杨昱"],
      prisonercount:{zglc:16,jcwd:10,ynjy:6,jshj:30,thcs:19}})},init?0:9000);
    setTimeout(function(){Store.updatedutyinfo({index:8,leader:{name:'姚亮亮',tel:'10086'},dutyperson:["夏云飞","罗文放","肖宇","孙丽丽"],
      prisonercount:{zglc:50,jcwd:12,ynjy:5,jshj:30,thcs:64}})},init?0:10000);

  },
  dispatch:function(funname,value){
    AppDispatcher.dispatch({
      eventName: funname,
      value:value
    });
  }
};

module.exports = VssActions;
