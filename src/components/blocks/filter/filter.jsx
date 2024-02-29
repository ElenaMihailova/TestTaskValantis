import {useState} from 'react';
import FilterBrand from './filterBrand';
import FilterName from './filterName';

import * as Styled from './style';

function Filter() {

  return (
    <Styled.Wrapper>
      <Styled.FieldWrapper>
        <FilterBrand />
        <FilterName />

        {/* {Object.entries(inputState).map(
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
        )} */}
      </Styled.FieldWrapper>
    </Styled.Wrapper>
  );
}

export default Filter;
