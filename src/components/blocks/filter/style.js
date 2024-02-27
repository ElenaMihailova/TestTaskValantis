import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  height: ${(props) => props.theme.blockHeight};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colorForLightBackground};
`;
