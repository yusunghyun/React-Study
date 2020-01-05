import React from 'react';
/* path파라미터를 전달받는 페이지 */
const DepartmentPath = (props) => {
  console.group("DepartmentPath");
  const urlParams = props.match.params;
  console.log(urlParams)
  console.groupEnd()

  const departmentList = {
    item: [
      { deptno: 201, dname: "전기공", loc: "3호관" },
      { deptno: 202, dname: "기계공", loc: "4호관" }
    ]
  };
  // 요청정보 query.deptno 와 동일한 deptno값을 갖는 객체 조회
  const deptno = parseInt(urlParams.deptno);
  //조회결과가 저장될 객체
  let departmentItem = null;
  //json에서 deptno값이 일치하는 정보를 조회
  departmentList.item.some((ele, idx) => {
    if (ele.deptno === deptno) {
      departmentItem = ele;
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

export default DepartmentPath;