import {useState, useContext} from 'react';
import ProductList from '../../blocks/productList/productList';
import Pagination from '../../blocks/pagination/pagination';
import Filter from '../../blocks/filter//filter';
import {ProductDataContext} from '../../dataProviders/productDataProviders';

import * as Styled from './style';

function MainPage() {
  const {currentPage, setCurrentPage} = useContext(ProductDataContext);

  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Styled.Wrapper>
      <Filter />
      <ProductList />
      <Pagination
        currentPage={currentPage}
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
      />
    </Styled.Wrapper>
  );
}

export default MainPage;
