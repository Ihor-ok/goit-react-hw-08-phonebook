import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store} from './components/redux/store';
import { Provider } from 'react-redux';


import { App }   from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(

    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
    
   

);
