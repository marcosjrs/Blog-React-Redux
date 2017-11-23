import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {DATA_LOADED,DATA_CLEARED, USER_CREATED, USER_ERROR, USER_LOGGED} from "../constantes";

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



const mensaje = (state="", accion)=>{
    switch (accion.type) {
        case USER_CREATED: 
            return accion.mensaje+"";
        case USER_ERROR:
            return accion.mensaje+"";
        case USER_LOGGED:
            return accion.mensaje+"";    
        default:
            return state;
    }
}
const reducers = combineReducers({ allPosts, form:formReducer, mensaje });

const store = createStore(reducers);

export default store;