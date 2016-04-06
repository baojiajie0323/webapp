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
