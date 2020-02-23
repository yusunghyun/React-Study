import React from 'react';
import Category from '../components/Category'
import NewsContainer from '../containers/NewsContainer'

const NewsPage = ({ match }) => {
  const { params } = match
  return (
    <div>
      <Category/>
      <hr />
      <NewsContainer category={params.category} />
    </div>
  );
};

export default NewsPage;