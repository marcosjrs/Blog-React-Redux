import {createStore, combineReducers} from 'redux';
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

const reducers = combineReducers({ allPosts });

const store = createStore(reducers);

export default store;