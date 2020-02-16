import React, { Component } from 'react';

class MyPropsSub extends Component {
  static defaultProps = {
    name:'unknown',
    age:0
  }
  render() {
    return (
      <div>
        <h2>MyProps</h2>
        <p>
          제 이름은 <b>{this.props.name}</b>이고 나이는 <b>{this.props.age}</b>입니다.
        </p>
      </div>
    );
  }
}

export default MyPropsSub;