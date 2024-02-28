import {useContext} from 'react';
import {ProductDataContext} from '../../dataProviders/productDataProviders';
import * as Styled from './style';

function FilterBrand({value, onChange, onFocus, onBlur}) {
  const {brands} = useContext(ProductDataContext);
  const brandsArray = Array.isArray(brands) ? brands : [];

  return (
    <Styled.Field>
      <Styled.Select
        id='brand'
      >
        <option value=''>Бренд</option>
        { brandsArray.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </Styled.Select>
    </Styled.Field>
  );
}

export default FilterBrand;
