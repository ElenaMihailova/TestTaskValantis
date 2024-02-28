import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.blockHeight};
`;
export const Table = styled.ul`
  margin: 0;
  padding: 0;
  padding: ${(props) => props.theme.wrapPadding};
  padding-top: 3%;
`;

export const TitleWrap = styled.li`
  list-style: none;
  display: grid;
  align-items: center;
  max-width: 100%;
  grid-template-columns: 1fr 3fr 3fr 1fr 1fr;
  gap: 2%;
  justify-items: center;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
