import {createRoot} from 'react-dom/client';

import App from './components/app/app';
import {ThemeProvider} from 'styled-components';
import {DefaultTheme} from './thems/default';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ThemeProvider theme={DefaultTheme}>
    <App />
  </ThemeProvider>
);
