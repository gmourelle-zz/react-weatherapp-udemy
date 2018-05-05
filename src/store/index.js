import {createStore} from 'redux';

export const store = createStore(() => {}, 
window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //le pasamos el reducer como parametro
