import React from 'react';
import MyChildrenSub from './MyChildrenSub'
//name

const MyChildren = () => {
  return (
    <div>
      <h2>MyChildren</h2>
      <MyChildrenSub width={400} height={100} >Hello World</MyChildrenSub>
      <MyChildrenSub width={300} height={80} >안녕</MyChildrenSub>
      <MyChildrenSub width={200} height={50} ></MyChildrenSub>
    </div>
  );
};



export default MyChildren;