import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import { reducers } from './reducers/index';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let sectors = [];
for (let i = 0; i < 10; i++) {
  sectors.push({
    id: i,
    name: `Sector ${i}`,
    selected: false
  });
}
let modal = {
  open: false
};
let form = {
  value: ''
};

const initial_state = { sectors, modal, form };
// create the store
const store = createStore(reducers, initial_state);

// render the main component
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
