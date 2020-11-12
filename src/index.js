import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import axios from 'axios';
import { Provider } from 'react-redux';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter } from 'react-router-dom';
import keycloak from './keycloak';
import { AppRouter } from './routes/app-router';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

ReactDOM.render(

  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak} >
      <Provider store={store}>
        {/* <App /> */}
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
