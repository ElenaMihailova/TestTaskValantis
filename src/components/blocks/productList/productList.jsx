import Title, {TitleLevel, TitleSize} from '../../ui/title/title';
import ProductItem from '../productItem/productItem';
import ProductDataProvider from '../../dataProviders/productDataProviders';

const ProductList = () => {
  return (
    <ProductDataProvider>
      {(products) => (
        <div>
          <Title level={TitleLevel.H2} size={TitleSize.SMALL}>
            Каталог ювелирных изделий
          </Title>
          <ul>
          <li>
              <div>
                <span>Название</span>
                <span>Цена</span>
                <span>Бренд</span>
                <span>ID</span>
              </div>
            </li>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </ProductDataProvider>
  );
};

export default ProductList;
