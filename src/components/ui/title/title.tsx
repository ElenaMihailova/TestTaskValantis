import React from 'react';
import * as Styled from './styles';

export const TitleSize = {
  BIG: 'big',
  SMALL: 'small',
  TABLE: 'table',
  DEFAULT: '',
};

export const TitleLevel = {
  H1: '1',
  H2: '2',
  H3: '3',
  H4: '4',
  H5: '5',
  H6: '6',
};

interface TitleProps {
  size?: string; 
  level?: string;
  children: React.ReactNode;
}


const Title: React.FC<TitleProps> = ({size, children}) => {
  return <Styled.Title as='h1' $size={size}>{children}</Styled.Title>;
};

export default Title;
