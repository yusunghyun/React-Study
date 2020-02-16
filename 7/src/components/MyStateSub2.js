import React, { Component } from 'react';

class MyStateSub2 extends Component {
  static state = {
    my_number:0,
    my_time:new Date().toString()
  };
  onButtonClick = (e) => {
    this.state.my_number ++ ;
    this.state.my_time = new Date().toString()
    this.setState(this.state)
  };
  render() {
    return (
      <div>
        <h2>MyStateSub2</h2>

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

export default MyStateSub2;