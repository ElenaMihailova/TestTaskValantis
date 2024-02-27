import Title, {TitleLevel, TitleSize} from '../../ui/title/title';
import * as Styled from './style';

function Filter() {
  return (
    <Styled.Wrapper>
      <Title level={TitleLevel.H2} size={TitleSize.SMALL}>
        Фильтр
      </Title>
    </Styled.Wrapper>
  );
}

export default Filter;
