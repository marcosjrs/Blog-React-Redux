import React, { Component } from 'react';
import EditarPostForm from '../forms/EditarPostForm';
import axios from 'axios';
import {connect} from 'react-redux';
import { userEditPostCleared, postEditado, errorEditarPost } from '../acciones';

class EditarPost extends Component {
    
    onSubmitForm = (data) => {
        this.props.postEditado(data,this.props.dataEditPost.id,this.props.userData.jwt);
    }
    componentWillUnmount() {
        this.props.clearPostEditar();
    }
    render() {
        return (
            <div>               
                <EditarPostForm  onSubmit={this.onSubmitForm} msgBackEnd= {this.props.mensajeEdiccionPost}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        dataEditPost: state.dataEditPost,
        mensajeEdiccionPost: state.mensajeEdiccionPost
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        postEditado:(datosPost,idPost,jwt)=>{
            let datos = { title: datosPost.titulo, body: datosPost.cuerpo };
            let config = {'Authorization':'Bearer'+jwt};           
            axios.patch(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`,{post:datos},{headers:config})
            .then((resp)=>{ 
                if(resp.statusText==="Accepted"){
                    dispatch(postEditado("Post Editado Correctamente"));
                }
            })
            .catch((error)=>{ 
                console.log(error) 
                dispatch(errorEditarPost("Error al editar el post"));
            }) 

        },
        clearPostEditar:(msg)=>{
            dispatch(userEditPostCleared());
        }

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(EditarPost);