import formatPrice from '../../helpers/formatPrice';
import Title, {TitleLevel, TitleSize} from '../../ui/title/title';

import * as Styled from './style';

function ProductItem({product}) {
  const renderBrand = (brand) => {
    return brand ? `${brand}` : '-';
  };

  return (
    <Styled.Wrapper>
      <Title size={TitleSize.TABLE} level={TitleLevel.H3}>
        {' '}
        {product.product}{' '}
      </Title>
      <Styled.Price> {formatPrice(product.price)} </Styled.Price>
      <Styled.Info> {renderBrand(product.brand)} </Styled.Info>
      <Styled.Info> {product.id} </Styled.Info>
    </Styled.Wrapper>
  );
}

export default ProductItem;
