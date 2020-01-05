import React from "react";
import qs from "qs";

/* 컴포넌트에게 전달되는 부가정보들은 props(기본적으로 location객체포함)라는 이름의 파라미터에 모아서 전달된다.(json) */
const DepartmentGet = props => {
  console.group("DepartmentGet");

  console.log(props);
  const queryString = props.location.search;
  console.log(queryString);

  const query = qs.parse(queryString, {
    ignoreQueryPrefix: true //맨앞의 ? 제거 옵션
  });
  console.log(query);
  console.groupEnd();

  const departmentList = {
    item: [
      { deptno: 101, dname: "컴공", loc: "1호관" },
      { deptno: 102, dname: "멀미공", loc: "2호관" }
    ]
  };
  // 요청정보 query.deptno 와 동일한 deptno값을 갖는 객체 조회
  const deptno = parseInt(query.deptno);
  //조회결과가 저장될 객체
  let departmentItem = null;
  //json에서 deptno값이 일치하는 정보를 조회
  departmentList.item.some((item, index) => {
    if (item.deptno === deptno) {
      departmentItem = item;
    }
  });
  if (!departmentItem) {
    return <h2>존재하지 않는 데이터에 대한 요청입니다</h2>;
  }
  return (
    <div>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호: {departmentItem.deptno}</li>
        <li>학과위치: {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentGet;
