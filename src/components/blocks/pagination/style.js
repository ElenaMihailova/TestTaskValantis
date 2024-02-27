import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: ${(props) =>props.theme.wrapPadding};
  padding-bottom: ${(props) =>props.theme.wrapPadding};
  background-color: ${(props) =>props.theme.colorForLightBackground};

`;
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  display: inline-block;
  margin-right: 5px;
  width: 3rem;
  height: 3rem;

  .is-active {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  font-size: 16px;

  &::hover {
    background-color: #f0f0f0;
  }
`;
