import ProductList from '../../blocks/productList/productList';
import Pagination from '../../blocks/pagination/pagination';
import Filter from '../../blocks/filter//filter';
import {useState} from 'react';

import * as Styled from './style';

function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);

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
