import React from 'react';
import MyPropTypesSub from './MyPropTypesSub'

const MyPropTypes = () => {


  return (
    <div>
      <h1>MyPropsTypes</h1>
      <MyPropTypesSub name="성현" age="24" hobby="벤치프레스"></MyPropTypesSub>
      <MyPropTypesSub name="광진이형" age="29" hobby="개발"></MyPropTypesSub>
      <MyPropTypesSub name="은성" age="스물세살"></MyPropTypesSub>
    </div>
  );
};

export default MyPropTypes;