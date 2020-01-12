import React,{useState, useEffect} from 'react';

import $ from 'jquery'

const StateEffectEx = () => {
  const [department, setDepartment] = useState([]);

  useEffect( ()=>{
    $.get('http://itpaper.co.kr/demo/react/api/dept_list.php',json=>{
      setDepartment(json.item)
    });
  },[]);

  return (
    <div>
      <h2>StateEffectEx</h2>
      {department.map((item,idx)=>{
        return (
        <div key={item.deptno}>
          <h3>{item.dname}</h3>
          <p>학과번호: {item.deptno} / 학과위치: {item.loc}</p>
        </div>
        );
      })}
    </div>
  );
};

export default StateEffectEx;