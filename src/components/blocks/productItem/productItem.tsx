import React from 'react';
import formatPrice from '../../helpers/formatPrice';
import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import ProductItemProps from '../../types/ProductItemProps';

import * as Styled from './style';



function ProductItem({product, index, currentPage}: ProductItemProps) {
  const renderBrand = (brand: string) => {
    return brand ? `${brand}` : '-';
  };

  const productNumber = index + 1 + (currentPage - 1) * 50;

  return (
    <Styled.Wrapper>
      <Styled.Info> {productNumber} </Styled.Info>
      <Styled.Info> {product.id} </Styled.Info>
      <Title size={TitleSize.TABLE} level={TitleLevel.H3}>
        {' '}
        {product.product}{' '}
      </Title>
      <Styled.Price> {formatPrice(product.price)} </Styled.Price>
      <Styled.Info> {renderBrand(product.brand)} </Styled.Info>
    </Styled.Wrapper>
  );
}

export default ProductItem;
