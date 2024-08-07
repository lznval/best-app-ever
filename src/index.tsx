import ReactDOM from 'react-dom/client';
import { App } from './client';
import './index.css'; 
import { Provider } from 'react-redux';
import { store } from '@redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

