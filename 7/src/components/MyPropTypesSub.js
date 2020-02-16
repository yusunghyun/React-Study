import React, { Component } from 'react';
import PropTypes from'prop-types'


class MyPropTypesSub extends Component {
  static propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    hobby:PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <h2>MyPropTypes</h2>
        <p>
          제 이름은 <b>{this.props.name}</b>이고 나이는 <b>{this.props.age}</b>입니다.
        </p>
      </div>
    );
  }
}

export default MyPropTypesSub;