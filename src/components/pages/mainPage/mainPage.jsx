import {useContext} from 'react';
import ProductList from '../../blocks/productList/productList';
import Pagination from '../../blocks/pagination/pagination';
import Filter from '../../blocks/filter//filter';
import {ProductDataContext} from '../../dataProviders/productDataProviders';

import * as Styled from './style';

function MainPage() {
  const {currentPage, setCurrentPage, isLoading, filterProducts} = useContext(
    ProductDataContext
  );

  const handleNextPageClick = () => {
    if (!isLoading) {
      setCurrentPage((page) => page + 1);
    }
  };

  const handlePrevPageClick = () => {
    if (!isLoading) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <Styled.Wrapper>
      <Filter applyFilters={filterProducts}/>
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
