/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ticketListReducer from './reducers/ticket-list-reducer';
import App from './components/App';

const store = createStore(ticketListReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
