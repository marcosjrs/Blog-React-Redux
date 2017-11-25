import {DATA_LOADED, DATA_CLEARED, USER_CREATED, USER_ERROR, USER_LOGOUT, POST_TOTALES, PAGINA_ACTUAL, USER_LOGIN} from "./constantes";

export const dataLoaded = (posts) => { 
    return {type:DATA_LOADED, posts };
};

export const dataCleared = () => { 
    return {type:DATA_CLEARED };
};

export const userCreated = (mensaje) => { 
    return {type:USER_CREATED, mensaje };
};

export const userLogin = (userData) => { 
    return {type:USER_LOGIN, userData };
};

export const userError = (mensaje) => { 
    return {type:USER_ERROR, mensaje };
};

export const userLogout = () => { 
    return {type:USER_LOGOUT};
};

export const postTotales = (postTotales) =>{
    return {type:POST_TOTALES, postTotales };
}

export const paginaActual = (paginaActual)=>{
    return {type:PAGINA_ACTUAL, paginaActual};
}