import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import lineupReducer from './reducers/lineupReducer'
import bandsReducer from './reducers/bandsReducer'
import genresReducer from './reducers/genresReducer'
import venuesReducer from './reducers/venuesReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';

const reducer = combineReducers({
  lineup: lineupReducer,
  bands: bandsReducer,
  genres: genresReducer,
  venues: venuesReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
