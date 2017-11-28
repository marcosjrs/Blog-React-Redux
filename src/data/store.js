import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {DATA_LOADED,DATA_CLEARED, USER_CREATED, USER_ERROR, USER_LOGGED, PAGINA_ACTUAL, POST_TOTALES, USER_LOGIN, USER_LOGOUT, DATA_POST_ACTUAL, ERROR_DATA_POST_ACTUAL, CLEAR_DATA_POST_ACTUAL, POST_CREADO, ERROR_CREAR_POST, USER_POSTS_LOADED, USER_POSTS_CLEARED, USER_EDIT_POST_CLEARED, POST_EDITADO, ERROR_EDITAR_POST} from "../constantes";

const allPosts = (posts = [], accion) =>{
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

const mensajeCreacionPosts = (state="", accion)=>{
    switch (accion.type) {
        case POST_CREADO: 
            return accion.mensaje+"";
        case ERROR_CREAR_POST:
            return accion.mensaje+""; 
        default:
            return null;
    }
}

const userPosts = (posts = [], accion) =>{
    switch (accion.type) {
        case USER_POSTS_LOADED:            
            return accion.posts.slice();
        case USER_POSTS_CLEARED:            
            return posts;  
        default:
            return posts;
    }
}

const dataEditPost = (state= { }, accion)=>{
    var nuevoState = Object.assign({},state);
    switch (accion.type) {
        case DATA_POST_ACTUAL:
            nuevoState = accion.data;
            return nuevoState;  
        case USER_EDIT_POST_CLEARED:
            return {};           
        default:
            return state;
    }
}
const mensajeEdiccionPost = (state="", accion)=>{
    switch (accion.type) {
        case POST_EDITADO: 
            return accion.mensaje+"";
        case ERROR_EDITAR_POST:
            return accion.mensaje+"";  
        default:
            return "";
    }
}


const reducers = combineReducers({ allPosts, form:formReducer, mensaje , paginacion, userData , dataPost, 
    mensajeCreacionPosts,userPosts, dataEditPost, mensajeEdiccionPost });

const store = createStore(reducers);

export default store;