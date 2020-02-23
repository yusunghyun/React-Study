import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';

/**
 * 뉴스카테고리 종류를 정의
 * name: OpenAPI에 전달할 변수값
 * text: 페이지에 표시할 메뉴명
 */
const categories = [
    {name: 'all', text: '전체보기'},
    {name: 'business', text: '비즈니스'},
    {name: 'entertainment', text: '엔터테인먼드'},
    {name: 'health', text: '건강'},
    {name: 'science', text: '과학'},
    {name: 'sports', text: '스포츠'},
    {name: 'technology', text: '기술'},
];

const CategoryList = styled.ul`
    list-style: none; padding: 0; margin: 0;
    &:after {content: ''; display: block; clear: both; float: none;}
`;

const CategoryListItem = styled.li`
    float: left;
    &:after {content: '|'; padding: 0px 15px;}
    &:last-child:after {content: '';}
`;

const CategoryListItemLink = styled(NavLink)`
    font-size: 20px; cursor: pointer; text-decoration: none; padding-bottom: 2px; color: #222;
    &:hover{color: #495057}
    &.active {font-weight: bold; border-bottom: 2px solid #22b8cf; color: #22b8cf; &:hover{color: #3bc9db;}}
`;

const Category = () => {
    /*이 컴포넌트가 화면에 막 등장할 때와 득정 state값이 변결될 때만 실행됨*/
    React.useEffect(()=>{
        console.log("[MyEffect4] %s ::: mySize값이 변경됨", new Date());
    }, []);

    return (
        <div>
            <CategoryList>
                {categories.map((currentValue, index) => (
                    <CategoryListItem key={index}>
                        <CategoryListItemLink key={index}
                            //현재 페이지와 링크가 일치하는 경우 적용될 클래스이름
                            activeclassname='active'
                            //true로 적용될 경우 기본 페이지
                            //-> 반복문에서 처리중인 배열 원소의 name값이 'all'이면 true출력
                            exact={currentValue.name === 'all'}
                            //클릭시 이동할 링크
                            to={currentValue.name === 'all' ? '/' : '/' + currentValue.name}>
                            {currentValue.text}
                        </CategoryListItemLink>
                    </CategoryListItem>
                ))}
            </CategoryList>
        </div>
    );
};

export default Category;