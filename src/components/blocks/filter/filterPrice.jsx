import {useState, useContext, useCallback} from 'react';
import {ProductDataContext} from '../../dataProviders/productDataProviders';
import useDebounce from '../../helpers/useDebounce';

import * as Styled from './style';

function FilterPrice() {
  const {filterProducts, loadAllProducts} = useContext(ProductDataContext);
  // eslint-disable-next-line
  const [filterValue, setFilterValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = useCallback(
    (value) => {
      setFilterValue(value.trim());
      const numericFilterValue = parseFloat(value.trim());
      filterProducts('price', numericFilterValue);
      setIsFilled(value.trim() !== '');
    },
    [filterProducts]
  );

  const filterReset = () => {
    setFilterValue('');
    loadAllProducts();
    setIsFilled(false);
  };

  const debouncedHandleInputChange = useDebounce(handleInputChange, 500);

  const handleChange = (event) =>
    debouncedHandleInputChange(event.target.value);

  return (
    <Styled.Field>
      <Styled.Input type='number' onChange={handleChange} value={filterValue} />
      <Styled.Label isfilled={isFilled.toString()}>Цена</Styled.Label>
      <Styled.Button onClick={filterReset} disabled={!filterValue}>
        X
      </Styled.Button>
    </Styled.Field>
  );
}

export default FilterPrice;
