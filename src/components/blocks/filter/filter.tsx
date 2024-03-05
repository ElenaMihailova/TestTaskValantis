import React from 'react';
import FilterBrand from './filterBrand';
import FilterName from './filterName';
import FilterPrice from './filterPrice';

import * as Styled from './style';

function Filter() {
  return (
    <Styled.Wrapper>
      <Styled.FieldWrapper>
        <FilterBrand />
        <FilterName />
        <FilterPrice />
      </Styled.FieldWrapper>
    </Styled.Wrapper>
  );
}

export default Filter;
