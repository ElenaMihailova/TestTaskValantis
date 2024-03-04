import React, {useContext, useEffect, useState} from 'react';
import ProductItem from '../productItem/productItem';
import {ProductDataContext} from '../../dataProviders/productDataProviders';

import * as Styled from './style';

const ProductList = () => {
  const {products, currentPage, isLoading} = useContext(ProductDataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading || !products || products.length === 0) {
    return <Styled.Wrapper>Loading...</Styled.Wrapper>;
  }

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.TitleWrap>
          <span>№</span>
          <span>ID</span>
          <span>Название</span>
          <span>Цена</span>
          <span>Бренд</span>
        </Styled.TitleWrap>
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            index={index}
            currentPage={currentPage}
          />
        ))}
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default ProductList;
