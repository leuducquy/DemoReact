import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    console.log('store');
    
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImutableStateInvariant())
    );
}