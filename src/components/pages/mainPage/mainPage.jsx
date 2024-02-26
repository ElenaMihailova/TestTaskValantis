import ProductList from '../../blocks/productList/productList';
import Pagination from '../../blocks/pagination/pagination';
import Filter from '../../blocks/filter//filter';

import * as Styled from './style';

function MainPage({stars}) {
  return (
    <Styled.Wrapper>
      <Filter />
      <ProductList />
      <Pagination/>
    </Styled.Wrapper>
  );
}

export default MainPage;
