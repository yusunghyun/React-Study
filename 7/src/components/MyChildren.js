import React, { Component } from 'react';
import MyChildrenSub from './MyChildrenSub'

class MyChildren extends Component {
  render() {
    return (
      <div>
        <h2>MyChildren</h2>
        <MyChildrenSub width={400} height={100}>
          hello world
        </MyChildrenSub>
        <MyChildrenSub width={300} height={80}>
          안녕 react
        </MyChildrenSub>
        <MyChildrenSub width={200} height={50}></MyChildrenSub>
      </div>
    );
  }
}

export default MyChildren;