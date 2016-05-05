'use strict';

var AppDispatcher = require('../AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var EventConst = require('../event-const');
var ActionEvent = EventConst.ActionEvent;
var StoreEvent = EventConst.StoreEvent;

var _loginsuccess = false;
var _devicemsg = [];
var _systemmsg = [];
var _dutymsg = [];

var _dutyinfo = [{index:1},{index:2},{index:3},{index:4},{index:5},
                {index:6},{index:7},{index:8},{index:9},{index:10}];

var _firstlogin = true;
/**
 * store
 */

function formatNum(str){
  var newStr = "";
  var count = 0;

  if(str.indexOf(".")==-1){
     for(var i=str.length-1;i>=0;i--){
   if(count % 3 == 0 && count != 0){
     newStr = str.charAt(i) + "," + newStr;
   }else{
     newStr = str.charAt(i) + newStr;
   }
   count++;
     }
     str = newStr; //自动补小数点后两位
     console.log(str)
  }
  else
  {
     for(var i = str.indexOf(".")-1;i>=0;i--){
   if(count % 3 == 0 && count != 0){
     newStr = str.charAt(i) + "," + newStr;
   }else{
     newStr = str.charAt(i) + newStr; //逐个字符相接起来
   }
   count++;
     }
     str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
     console.log(str)
   }
   return str;
}

var VssStore = assign({}, EventEmitter.prototype, {
  notifytype:{
    backbutton:1,
    loginstate:2,
    msgchange:3,
    dutychange:4,
  },

  back(){
    this.emitChange(this.notifytype.backbutton);
  },

  setloginsuccess: function(blogin){
    _loginsuccess = blogin;
    if(!blogin){
      _firstlogin = true;
    }
    this.emitChange(this.notifytype.loginstate);
  },

  getloginsuccess: function(){
    return _loginsuccess;
  },

  getfirstlogin:function(){
    return _firstlogin;
  },

  setfirstlogin:function(bfirst){
    _firstlogin = bfirst;
  },

  adddevicemsg: function(msg){
    _devicemsg.push(msg);
    this.emitChange(this.notifytype.msgchange);
  },
  addsysmsg: function(msg){
    _systemmsg.push(msg);
    this.emitChange(this.notifytype.msgchange);
  },
  adddutymsg: function(msg){
    _dutymsg.push(msg);
    this.emitChange(this.notifytype.msgchange);
  },
  getdevicemsg: function(){
    return _devicemsg;
  },
  getsysmsg: function(){
    return _systemmsg;
  },
  getdutymsg: function(){
    return _dutymsg;
  },

  getdutyinfo:function(){
    return _dutyinfo;
  },

  cleardutyinfo:function(){
    _dutyinfo = [{index:1},{index:2},{index:3},{index:4},{index:5},
                    {index:6},{index:7},{index:8},{index:9},{index:10}];
    this.emitChange(this.notifytype.dutychange);
  },

  updatedutyinfo:function(info){
    for (var i = 0; i < _dutyinfo.length; i++) {
      if(_dutyinfo[i].index == info.index){
        _dutyinfo[i] = info;
        this.emitChange(this.notifytype.dutychange);
        return;
      }
    }
    _dutyinfo.push(info);
    this.emitChange(this.notifytype.dutychange);
  },

  getvalidprison:function(){
      var count = 0;
      for (var i = 0; i < _dutyinfo.length; i++) {
        var info = _dutyinfo[i];
        if(info.prisonercount != undefined){
          count++;
        }
      }
      return count;
  },

  getAllPrionserCount:function(type){
    var nCount = 0;
    for (var i = 0; i < _dutyinfo.length; i++) {
      var info = _dutyinfo[i];

      if(info.prisonercount != undefined && (type == -1 || type == "zglc")){
        nCount += info.prisonercount.zglc;
      }if(info.prisonercount != undefined && (type == -1 || type == "jcwd")){
        nCount += info.prisonercount.jcwd;
      }if(info.prisonercount != undefined && (type == -1 || type == "ynjy")){
        nCount += info.prisonercount.ynjy;
      }if(info.prisonercount != undefined && (type == -1 || type == "jshj")){
        nCount += info.prisonercount.jshj;
      }if(info.prisonercount != undefined && (type == -1 || type == "thcs")){
        nCount += info.prisonercount.thcs;
      }
    }
    if(type == -1){
      var strnumber = nCount.toString();
      return formatNum(strnumber);
    }
    return nCount;
  },

  emitChange: function(eventtype) {
    this.emit(eventtype);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(eventtype,callback) {
    this.on(eventtype, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(eventtype,callback) {
    this.removeListener(eventtype, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.eventName) {

  case 1:
    VssStore.emitChange(1);
    break;



  default:
    break;
  }
});

module.exports = VssStore;
