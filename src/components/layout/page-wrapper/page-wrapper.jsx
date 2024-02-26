import Header from '../header/header';
import MainPage from '../../pages/mainPage/mainPage';
import './style.css';

export default function PageWrapper({...prop}) {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage />
      </main>
    </>
  );
}
