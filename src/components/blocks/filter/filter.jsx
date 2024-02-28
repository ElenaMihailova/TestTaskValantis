import {useState} from 'react';
import FilterBrand from './filterBrand';
import * as Styled from './style';

function Filter({applyFilters}) {
  const [inputState, setInputState] = useState({
    name: false,
    price: false,
  });
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleBrandChange = (e) => {
    const {value} = e.target;
    setSelectedBrand(value);
    applyFilters({...inputState, brand: value});
  };

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value.trim() !== '',
    }));
    applyFilters(inputState);
  };

  const handleInputFocus = (e) => {
    const {id} = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const handleInputBlur = (e) => {
    const {id, value} = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value.trim() !== '',
    }));
  };

  return (
    <Styled.Wrapper>
      <Styled.FieldWrapper>
        <FilterBrand
          value={selectedBrand}
          onChange={handleBrandChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {Object.entries(inputState).map(
          ([id, isfilled]) =>
            id !== 'brand' && (
              <Styled.Field key={id}>
                <Styled.Input
                  type={id === 'price' ? 'number' : 'text'}
                  id={id}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <Styled.Label htmlFor={id} isfilled={isfilled.toString()}>
                  {id === 'name' ? 'Название' : 'Цена'}
                </Styled.Label>
              </Styled.Field>
            )
        )}
      </Styled.FieldWrapper>
    </Styled.Wrapper>
  );
}

export default Filter;
