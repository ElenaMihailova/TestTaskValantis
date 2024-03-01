import {useState, useContext, useCallback} from 'react';
import {ProductDataContext} from '../../dataProviders/productDataProviders';
import useDebounce from '../../helpers/useDebounce';

import * as Styled from './style';

function FilterName() {
  const {filterProducts}=useContext(ProductDataContext);
  // eslint-disable-next-line no-use-before-define
  const [filterValue, setFilterValue] = useState('');
  const [isFilled, setIsFilled]=useState(false);

  const handleInputChange = useCallback(
    (value) => {
      setFilterValue(value.trim());
      filterProducts('product', value.trim());
      setIsFilled(value.trim() !== '');
    },
    [filterProducts]
  );

  const debouncedHandleInputChange = useDebounce(handleInputChange, 500);

  const handleChange = (event) =>
    debouncedHandleInputChange(event.target.value);

  return (
    <Styled.Field>
      <Styled.Input type='text' onChange={handleChange} />
      <Styled.Label isfilled={isFilled.toString()}>Название</Styled.Label>
    </Styled.Field>
  );
}

export default FilterName;
