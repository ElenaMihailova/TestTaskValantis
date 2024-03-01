import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: ${(props) => props.theme.blockHeight};
  padding-top: ${(props) => props.pagePadding};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-around;
`;
export const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: absolute;
  left: 10px;
  pointer-events: none;
  top: ${({isfilled}) => (isfilled === 'true' ? '-0.5rem' : '50%')};
  transform: ${({isfilled}) =>
    isfilled === 'true' ? 'translateY(-50%)' : 'translateY(0)'};
  transition: top 0.3s, transform 0.3s;
  color: ${({isfilled}) =>
    isfilled === 'true'
      ? `${(props) => props.theme.colorBlackForText}`
      : `${(props) => props.theme.colorWhite}`};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  background-color: ${(props) => props.theme.colorWhite};
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-shadow: none;

  &:focus,
  &:not(:placeholder-shown) {
    border-color: ${(props) => props.theme.colorGray};
    outline: 0;
  }
`;

export const Select = styled.select`
  display: block;
  width: 197px;
  height: 52px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  background-color: ${(props) => props.theme.colorWhite};
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-shadow: none;
  cursor: pointer;

  &:focus,
  &:not(:placeholder-shown) {
    outline: 0;
  }
`;

export const Button = styled.button`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colorBlackForText};
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colorForButton};
  transition: background-color 0.5s;
  margin-left: 10px;

  &:disabled {
    background-color: transparent;
    cursor: auto;
  }
`;
