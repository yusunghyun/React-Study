import React from "react";

import MySubComponent from './MySubComponent.js'

const MyComponent1 = () => {
  //리턴은 항상 html구조를 의미하는 jsx문법(단 하나의 태그요소만 반환).
  return (
    <div>
      <h2>안녕하세요 리액트</h2>
      <p>리액트 컴포넌트</p>
      {/* 주석은 이렇게 */}
      <MySubComponent/>
      <MySubComponent/>
      <MySubComponent/>
    </div>
  );
};

export default MyComponent1;
