import ReactDOM from 'react-dom/client';
import { App } from './client';
import './index.css';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
