import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {DATA_LOADED,DATA_CLEARED} from "../constantes";

const allPosts = (posts = [], accion) =>{
    let newPosts = posts.slice();
    switch (accion.type) {
        case DATA_LOADED:            
            return accion.posts.slice();   
        case DATA_CLEARED:            
            return [];   

        default:
            return posts;
    }
}

const reducers = combineReducers({ allPosts, form:formReducer });

const store = createStore(reducers);

export default store;