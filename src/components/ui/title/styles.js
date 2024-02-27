import styled from 'styled-components';
import {TitleSize} from './title';

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: ${(props) => {
    let fontWeight = 400;
    if (props.$size === TitleSize.BIG || props.$size === TitleSize.SMALL) {
      fontWeight = 700; 
    }
    return fontWeight;
  }};
  font-size: 36px;
  line-height: 100%;
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.$size === TitleSize.BIG) {
      fontSize = '44px';
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = '28px';
    }
    if (props.$size === TitleSize.TABLE) {
      fontSize = '18px';
    }
    return fontSize;
  }};
`;
