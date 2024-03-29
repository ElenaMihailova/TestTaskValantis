import {StyledTitle} from './styles';

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

export default function Title({level = 1, size, children}) {
  return (
    <StyledTitle as={`h${level}`} $size={size}>
      {children}
    </StyledTitle>
  );
}
