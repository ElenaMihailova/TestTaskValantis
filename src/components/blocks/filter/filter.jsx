import Title, {TitleLevel, TitleSize} from '../../ui/title/title';

function Filter() {
  return (
    <div>
      <Title level={TitleLevel.H2} size={TitleSize.SMALL}>
        Фильтр
      </Title>
    </div>
  );
}

export default Filter;
