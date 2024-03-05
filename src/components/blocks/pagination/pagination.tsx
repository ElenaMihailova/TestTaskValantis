import React from 'react';
import {ProductData} from '../../types/ProductData';
import * as Styled from './style';

const Pagination = ({
  currentPage,
  onNextPageClick,
  onPrevPageClick,
  isLastPage,
}: ProductData) => {
  return (
    <Styled.Wrapper>
      <Styled.List>
        <Styled.Item>
          <Styled.Button
            type='button'
            onClick={onPrevPageClick}
            disabled={currentPage === 1}
          >
            &lt;
          </Styled.Button>
        </Styled.Item>
        <Styled.Item>
          <Styled.Button>{currentPage}</Styled.Button>
        </Styled.Item>

        <Styled.Item>
          <Styled.Button
            type='button'
            onClick={onNextPageClick}
            disabled={isLastPage}
          >
            &gt;
          </Styled.Button>
        </Styled.Item>
      </Styled.List>
    </Styled.Wrapper>
  );
};

export default React.memo(Pagination);
