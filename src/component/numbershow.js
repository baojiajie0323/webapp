import React, { Component } from 'react';

class NumberShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }
  render() {
    var style_number1_after = {backgroundImage:"url('./img/number2.png')"}
    var style_number2_after = {backgroundImage:"url('./img/number5.png')"}
    var style_number3_after = {backgroundImage:"url('./img/number3.png')",zIndex:'1'}
    var style_number4_after = {backgroundImage:"url('./img/number7.png')"}

    var style_number3_bottom = {backgroundImage:"url('./img/number7.png')",zIndex:'2'}

    return <div id="numberpanel">
              <div id="number1" className="number_each">
                <div style={style_number1_after} className="number_each_show"></div>
                <div className="number_each_show"></div>
                <div className="number_each_show"></div>
              </div>
              <div id="number2" className="number_each">
                <div style={style_number2_after} className="number_each_show"></div>
                <div className="number_each_show"></div>
                <div className="number_each_show"></div>
              </div>
              <div id="number3" className="number_each">
                <div style={style_number3_after} className="number_each_show"></div>
                <div style={style_number3_bottom} className="number_each_show"></div>
                <div className="number_each_show"></div>
              </div>
              <div id="number4" className="number_each">
                <div style={style_number4_after} className="number_each_show"></div>
                <div className="number_each_show"></div>
                <div className="number_each_show"></div>
              </div>
           </div>
  }
}

export default NumberShow;
