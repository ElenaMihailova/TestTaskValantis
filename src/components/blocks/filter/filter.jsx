import {useState} from 'react';
import * as Styled from './style';

function Filter({applyFilters}) {
  const [inputState, setInputState] = useState({
    brand: false,
    name: false,
    price: false,
  });

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
        {Object.entries(inputState).map(([id, isfilled]) => (
          <Styled.Field key={id}>
            <Styled.Input
              type='text'
              id={id}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <Styled.Label htmlFor={id} isfilled={isfilled.toString()}>
              {id === 'brand' ? 'Бренд' : id === 'name' ? 'Название' : 'Цена'}
            </Styled.Label>
          </Styled.Field>
        ))}
      </Styled.FieldWrapper>
    </Styled.Wrapper>
  );
}

export default Filter;
