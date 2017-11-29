import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
    if(nextProps.paginacion.paginaActual !== this.props.paginacion.paginaActual){
      this.props.getPosts(nextProps.paginacion.paginaActual);
    }
  }
  
  getHtmlAllPosts= ()=>{
    const htmlPosts = this.props.allPosts.map((item,index)=>{
      if(this.props.userData && (this.props.userData.id == item.user_id)){//Registrado. Y es su creador
       return <li className="list-group-item" key={"li_"+item.id}> <Link to={`/${item.user_id}/post/${item.id}`} key={"l_"+item.id}><h4>{item.title}</h4></Link> </li>
      }else{
       return <li className="list-group-item" key={"li_"+item.id}> <Link to={`/post/${item.id}`} key={"l_"+item.id}><h4>{item.title}</h4></Link> </li>
      }     
    });     
    return <ul className="list-group mis-posts">{htmlPosts}</ul>;
  }
  
  render() {
    
    return (
      <div className="home">
        <h3>POST GENERALES</h3>
        {this.getHtmlAllPosts()}
        <Paginacion />
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    userData:state.userData,
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

