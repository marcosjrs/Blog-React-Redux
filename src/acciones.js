import {DATA_LOADED, DATA_CLEARED, USER_CREATED, USER_ERROR, USER_LOGGED, USER_LOGOUT} from "./constantes";

export const dataLoaded = (posts) => { 
    return {type:DATA_LOADED, posts };
};

export const dataCleared = () => { 
    return {type:DATA_CLEARED };
};

export const userCreated = (mensaje) => { 
    return {type:USER_CREATED, mensaje };
};

export const userError = (mensaje) => { 
    return {type:USER_ERROR, mensaje };
};

export const userLogged = (mensaje) => { 
    return {type:USER_LOGGED, mensaje };
};

export const userLogout = (mensaje) => { 
    return {type:USER_LOGOUT, mensaje };
};
