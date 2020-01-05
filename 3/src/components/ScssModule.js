import React from 'react';

import myScssMod from '../assets/scss/style.module.scss'

const ScssModule = () => {
  return (
    <div>
      <h2>ScssModule</h2>
      <div className={`${myScssMod.myScss}`}>
        <div className={`${myScssMod.myScssBox} ${myScssMod.red}`}/>
        <div className={`${myScssMod.myScssBox} ${myScssMod.green}`}/>
        <div className={`${myScssMod.myScssBox} ${myScssMod.blue}`}/>
        <div className={`${myScssMod.myScssBox} ${myScssMod.orange}`}/>
        <div className={`${myScssMod.myScssBox} ${myScssMod.yellow}`}/>
        <div className={`${myScssMod.myScssBox} ${myScssMod.pink}`}/>
      </div>
    </div>
  );
};

export default ScssModule;