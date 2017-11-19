import {DATA_LOADED} from "./constantes";

export const dataLoaded = (posts) => { 
    return {type:DATA_LOADED, posts };
};
