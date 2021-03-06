import {DATA_LOADED, DATA_CLEARED, USER_CREATED, USER_ERROR, USER_LOGOUT, POST_TOTALES, PAGINA_ACTUAL, USER_LOGIN, DATA_POST_ACTUAL, ERROR_DATA_POST_ACTUAL, CLEAR_DATA_POST_ACTUAL, POST_CREADO, ERROR_CREAR_POST, USER_POSTS_LOADED, USER_POSTS_CLEARED, USER_EDIT_POST_CLEARED, POST_EDITADO, ERROR_EDITAR_POST, POST_BORRADO, ERROR_BORRAR_POST} from "./constantes";

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

export const dataPostActual = (data)=>{
    return {type: DATA_POST_ACTUAL, data};
}

export const clearDataPostActual = ()=>{
    return {type: CLEAR_DATA_POST_ACTUAL};
}
export const errorDataPostActual = ()=>{
    return {type: ERROR_DATA_POST_ACTUAL};
}

export const postCreado= (mensaje)=>{
    return {type: POST_CREADO,mensaje};
}

export const errorCrearPost= (mensaje)=>{
    return {type: ERROR_CREAR_POST,mensaje};
}

export const userPostsLoaded = (posts) => { 
    return {type:USER_POSTS_LOADED, posts };
};
export const userPostsCleared = (posts) => { 
    return {type:USER_POSTS_CLEARED, posts };
};

export const userEditPostCleared = () => { 
    return {type:USER_EDIT_POST_CLEARED };
};

export const postEditado = (mensaje="") => { 
    return {type:POST_EDITADO, mensaje };
};

export const errorEditarPost = (mensaje="") => { 
    return {type:ERROR_EDITAR_POST, mensaje };
};

export const postBorrado = (mensaje="") => { 
    return {type:POST_BORRADO, mensaje };
};

export const errorBorrarPost = (mensaje="") => { 
    return {type:ERROR_BORRAR_POST, mensaje };
};