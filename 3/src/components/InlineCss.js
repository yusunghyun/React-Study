import React from 'react';
import Photo from '../assets/img/유성현.jpg'

const InlineCss = () => {
  const myStyle={
    
  }
  return (
    <div>
      <h1>InlineCss</h1>
      <div style={
        {
          backgroundColor: '#f60',
          fontSize: '20px',
          color: '#0f6',
          fontWeight: 'bold',
          padding: '10px 25px',
          marginBottom: '10px'
        }
        }>Hello InlineCss(1)</div>
        <img src={Photo} width='240' height='240'  />
        <img src='/logo192.phg' width='240' height='240' />
        <div
          style={{
            display:'inline-block',
            width:'240px',
            height:'240px',
            backgroundImage:'url("+Photo+")',
            backgroundSize:'cover'
          }}>배경이미지</div>
    </div>
  );
};

export default InlineCss;