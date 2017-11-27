import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {DATA_LOADED,DATA_CLEARED, USER_CREATED, USER_ERROR, USER_LOGGED, PAGINA_ACTUAL, POST_TOTALES, USER_LOGIN, USER_LOGOUT, DATA_POST_ACTUAL, ERROR_DATA_POST_ACTUAL, CLEAR_DATA_POST_ACTUAL} from "../constantes";

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

const userData = (state=null, accion)=>{
    switch (accion.type) {
        case USER_LOGIN:
            return accion.userData;
        case USER_LOGOUT:
            return null;    
        default:
            return state;
    }
}

const paginacion = (state= {paginaActual:1,postTotales:1}, accion)=>{
    var nuevoState = Object.assign({},state);
    switch (accion.type) {
        case PAGINA_ACTUAL:
            nuevoState.paginaActual =  parseInt(accion.paginaActual,0);
            return nuevoState;    
        case POST_TOTALES:
            nuevoState.postTotales =  parseInt(accion.postTotales,0);
            return nuevoState;    
        default:
            return state;
    }
}
const dataPost = (state= { }, accion)=>{
    var nuevoState = Object.assign({},state);
    switch (accion.type) {
        case DATA_POST_ACTUAL:
            nuevoState = accion.data;
            return nuevoState;  
        case CLEAR_DATA_POST_ACTUAL:
            return null;      
        case ERROR_DATA_POST_ACTUAL:
            nuevoState.title = "Este post no existe";
            nuevoState.body = "Si lo considera pertinente, póngase en contacto con el administrador.";
            return nuevoState;      
        default:
            return state;
    }
}


const reducers = combineReducers({ allPosts, form:formReducer, mensaje , paginacion, userData , dataPost });

const store = createStore(reducers);

export default store;