import {useContext} from 'react';
import {ProductDataContext} from '../../dataProviders/productDataProviders';
import * as Styled from './style';

function FilterBrand() {
  const {brands, filterProducts} = useContext(ProductDataContext);
  const brandsArray = Array.isArray(brands) ? brands : [];

  const handleBrandChange = (e) => {
    const {value} = e.target;
    filterProducts('brand', value);
    console.log(value)
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
