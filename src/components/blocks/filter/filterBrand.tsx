import {useContext} from 'react';
import {ProductDataContext} from '../../dataProviders/productDataProviders';
import * as Styled from './style';

function FilterBrand() {
  const {brands, filterProducts} = useContext(ProductDataContext);
  let brandsArray = Array.isArray(brands) ? brands : [];

  brandsArray = brandsArray.filter((brand) => brand !== null);

  if (brandsArray.length > 0) {
    brandsArray.unshift('-');
  }

  const handleBrandChange = (e) => {
    let {value} = e.target;

    if (value === 'Не указан') {
      value = null;
    }
    filterProducts('brand', value);
  };

  return (
    <Styled.Field>
      <Styled.Select id='brand' onChange={handleBrandChange}>
        <option value=''>Бренд</option>
        {brandsArray.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </Styled.Select>
    </Styled.Field>
  );
}

export default FilterBrand;
