import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { userPostsLoaded, userPostsCleared } from '../acciones';

class MisPosts extends Component {
    
    componentDidMount() {
        if(this.props.userData){            
            this.props.getPosts(this.props.userData.id,this.props.userData.jwt);
        }
    } 
    componentWillUnmount() {
        this.props.clearPosts();
    }
       
    getIdUser(){
        const idUser = this.props.userData?this.props.userData.id:"";
        return idUser;
    }
    getUserPosts= ()=>{
        let listaProps = [];
        if(this.props.userPosts && this.props.userPosts.length){
            listaProps = this.props.userPosts.map((element) => {
                return (<div key={element.id}>
                                    <h3>{element.title}</h3>
                                    <div>{element.body}</div>
                                </div>);
            });
        }
        return listaProps;
    }
    render() {
        this.getUserPosts();
        return (
            <div>
                <Link to={`/${this.getIdUser()}/crear`}>Crear Posts</Link>
                {this.getUserPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return({
        userData: state.userData,
        userPosts: state.userPosts
    });
};
const mapDispatchToProps = (dispatch)=>{
    return({
        getPosts:(userId,jwt)=>{
            let config = {'Authorization':'Bearer'+jwt};
            axios.get(`https://blog-api-u.herokuapp.com/users/${userId}/posts`,{headers: config})
            .then((resp)=>{
                dispatch(userPostsLoaded(resp.data.posts))
            })
            .catch((data)=>{
                console.log("error",data);
            })
        },
        clearPosts:()=>{
            dispatch(userPostsCleared())
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(MisPosts);