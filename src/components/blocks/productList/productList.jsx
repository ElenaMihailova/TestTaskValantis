import {useContext} from 'react';
import ProductItem from '../productItem/productItem';
import {ProductDataContext} from '../../dataProviders/productDataProviders';

import * as Styled from './style';

const ProductList = () => {
  const { products } = useContext(ProductDataContext);
  
  if (!products || products.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.TitleWrap>
          <span>Название</span>
          <span>Цена</span>
          <span>Бренд</span>
          <span>ID</span>
        </Styled.TitleWrap>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default ProductList;
