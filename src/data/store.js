import {createStore, combineReducers} from 'redux';
import {DATA_LOADED} from "../constantes";
import moockPosts from "./moocks";

const allPosts = (posts = moockPosts, accion) =>{
    console.log(posts)
    let newPosts = posts.slice();
    switch (accion.type) {
        case DATA_LOADED:            
            return newPosts;   

        default:
            return posts;
    }
}

const reducers = combineReducers({ allPosts });

const store = createStore(reducers);

export default store;