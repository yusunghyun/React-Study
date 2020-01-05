import React from 'react';
import myStyles from '../assets/css/mystyle.module.css'//css모듈은 이름설정가능
//css모듈 사용하려면 모듈에서도 .css-box이러지 말고 .cssBox 카멜표기법을 써라
//이렇게 하면 클레스이름에 임의값이 붙는다 !
const CssModule = () => {
  return (
    <div>
      <h2>myStyles</h2>
      <div className={myStyles.myCssBox}></div>
      <h3>독립클래스!</h3>
      <div className="myBorderBox"/>
      <h3>다중클래스!</h3>
      <div className={`${myStyles.size} ${myStyles.bg}`}/>
    </div>
  );
};

export default CssModule;