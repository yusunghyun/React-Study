import React, { Component } from 'react';

class MyStateSub extends Component {

  constructor(props) { //con엔터
    super(props);
    this.state={
      my_number:0,
      my_time:new Date().toString()
    };
    this.onButtonClick = this.onButtonClick.bind(this)
  }
  onButtonClick(e){
    this.state.my_number ++ ;
    this.state.my_time = new Date().toString()

    const my_data={ //생성자
      a:this.state.my_time,
      b:this.state.my_number
    };

    this.setState(my_data)
  }

  render() {
    return (
      <div>
        <h2>MyStateSub1</h2>
        <p>
          {this.state.my_number}회 눌러짐 : 
          <i>
            <small>{this.state.my_time}</small>
          </i>
        </p>
        <button onClick={this.onButtonClick}>+1</button>
      </div>
    );
  }
}

export default MyStateSub;