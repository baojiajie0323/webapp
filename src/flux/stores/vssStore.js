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
/**
 * store
 */
var VssStore = assign({}, EventEmitter.prototype, {
  notifytype:{
    loginstate:1,
    msgchange:2,
  },

  setloginsuccess: function(blogin){
    _loginsuccess = blogin;
    this.emitChange(this.notifytype.loginstate);
  },

  getloginsuccess: function(){
    return _loginsuccess;
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
