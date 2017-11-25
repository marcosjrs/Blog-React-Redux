import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {dataLoaded, dataCleared} from "../acciones";
import Paginacion from "../Paginacion";


class Home extends Component {
  
  getAllPosts() {
    this.props.getPosts(this.props.paginacion.paginaActual);
  }
  componentDidMount() {
    this.getAllPosts();    
  }
  componentWillUnmount() {
    this.props.clearPosts(); // para limpiar la lista antes de cambiarse a otro route...
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.paginacion.paginaActual != this.props.paginacion.paginaActual){
      this.props.getPosts(this.props.paginacion.paginaActual);
    }
  }
  
  
  render() {
    const htmlPosts = this.props.allPosts.map((item,index)=>{
      return <div key={item.id}><h3>{item.title}</h3>{item.body}</div>
    }); 
    return (
      <div>
        {htmlPosts}
        <Paginacion />
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    allPosts : state.allPosts,
    paginacion: state.paginacion
  }  
};

const mapDispatchToProps = (dispatch) =>{
  return{
    getPosts: (pagina)=>{
       axios.get("https://blog-api-u.herokuapp.com/v1/posts?page="+pagina)
       .then((response)=>{
         dispatch(dataLoaded(response.data));
       })
       .catch((response)=>console.log(response));
    },
    clearPosts: ()=>{
      dispatch(dataCleared());
   }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

