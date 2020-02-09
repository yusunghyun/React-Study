import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

//name: OpenAPI에 전달할 변수값
//text: 페이지에 표시할 메뉴명
const categories = [
  {name:'all',text:'전체보기'},
  {name:'business',text:'비즈니스'},
  {name:'entertainment',text:'엔터테인먼트'},
  {name:'health',text:'건강'},
  {name:'science',text:'과학'},
  {name:'sports',text:'스포츠'},
  {name:'technology',text:'기술'},
]

const CategoriesList = styled.ul`
  list-style: none; padding: 0; margin: 0;
  &:after{content: ''; display:block; clear:both; float:none;}
`;  
const CategoryListItem = styled.li`
  float:left;
  &:after{content:'|';padding:0px 15px;}
  &:last-child:after{content:'';}
  `;
const CategoryItemLink = styled(NavLink)`
  font-size: 20px; cursor: pointer; text-decoration:none; padding-bottom:2px;color:#222;
  &:hover{ color:#ff00ff;}
  &.active{font-weight:bold; border-bottom:2px solid #22b8cf; color:#22b8cf;
    &:hover{color:#3bc9ab;}}
`;

const Category = () => {
  return (
    <CategoriesList>
      {categories.map( c=>(
        <CategoryListItem key={c.name}>
          <CategoryItemLink
            activeClassName='active'
            exact={currentValue.name = 'all'}
            to={currentValue.name === 'all' ? '/' : '/' + currentValue.name}>
            {currentValue.text}
          </CategoryItemLink>
        </CategoryListItem>
      ))}
    </CategoriesList>
  );
};

export default Category;