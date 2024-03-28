import React from 'react';
import ReactDOM from 'react-dom/client';
import { store} from './components/redux/store';
import { Provider } from 'react-redux';


import { App }   from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
            <App />
        </BrowserRouter>
        
    </Provider>

);