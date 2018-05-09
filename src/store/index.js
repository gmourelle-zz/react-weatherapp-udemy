import {createStore} from 'redux';
import {city} from './../reducers/city';

const initialState={
    city:'Buenos Aires,ar',
};

export const store = createStore(city, initialState, 
window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //le pasamos el reducer como parametro
