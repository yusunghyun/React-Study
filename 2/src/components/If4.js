import React from 'react';

const If4 = () => {
  const isLogin = true;
  return (
    <div>
      <h2>If4</h2>
      {isLogin ? <button type='buttone'>로그아웃</button> : <button type='buttone'>로그인</button>}
    </div>
  );
};

export default If4;