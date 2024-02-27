import PageWrapper from '../layout/page-wrapper/page-wrapper';
import {GlobalStyle} from './styles.js';
import ProductDataProvider from '../../components/dataProviders/productDataProviders';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ProductDataProvider>
        <PageWrapper />
      </ProductDataProvider>
    </>
  );
}
