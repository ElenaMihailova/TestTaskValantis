import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  align-items: center;
  max-width: 100%;
  grid-template-columns: 3fr 1fr 2fr 3fr;
  gap: 2%;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid lightgray;
`;

export const Info = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const Price = styled.p`
  margin: 0;
  padding: 0;
  text-align: right;
`;
