import React, { Component } from 'react';
import {reset} from 'redux-form';
import CrearPostForm from '../forms/CrearPostForm';
import axios from 'axios';
import {connect} from 'react-redux';
import { postCreado, errorCrearPost } from '../acciones';

class CrearPost extends Component {
    
    onSubmitForm = (data) => {
        console.log(this.props.userData);
        let config = {'Authorization':'Bearer'+this.props.userData.jwt}
        axios.post('https://blog-api-u.herokuapp.com/v1/posts',
            { 
                post:{
                    title:data.titulo,
                    body: data.cuerpo
                },
            },
            {
                headers:config
            }
        ).then((data)=>{
            if(data.statusText === "Created"){
                this.props.postcreado("Post Creado Correctamente");
            }else{
                if(data.data.error){
                    this.props.errorAlCrearPost(data.data.error[0])
                } 
            }
        }).catch((data)=>{
            if(data.response.data && data.response.data.error){
                this.props.errorAlCrearPost(data.response.data.error); 

            }else{
                this.props.errorAlCrearPost("El post no se ha podido crear");
            }           
        })
    }

    render() {
        return (
            <div>
                <CrearPostForm  onSubmit={this.onSubmitForm} msgBackEnd={this.props.mensajeCreacionPosts} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userData:state.userData,
        mensajeCreacionPosts:state.mensajeCreacionPosts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        postcreado:(msg)=>{
            dispatch(reset('crearPostForm'));
            dispatch(postCreado(msg));
        },
        errorAlCrearPost:(msg)=>{
            dispatch(errorCrearPost(msg));
        }

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(CrearPost);