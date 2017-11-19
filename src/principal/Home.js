import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dataLoaded, dataCleared} from "../acciones";
import axios from 'axios';


class Home extends Component {
  
  getAllPosts() {
    this.props.dispatch1();
  }
  componentDidMount() {
    this.getAllPosts();    
  }
  componentWillUnmount() {
    this.props.clearPosts(); // para limpiar la lista antes de cambiarse a otro route...
  }
  
  render() {
    const htmlPosts = this.props.allPosts.map((item,index)=>{
      return <div key={item.id}><h3>{item.title}</h3>{item.body}</div>
    }); 
    return (
      <div>{htmlPosts}</div>
    );
  }
}

const mapStateToProps= (store) => {
  return {
    allPosts : store.allPosts
  }  
};

const mapDispatchToProps = (dispatch) =>{
  return{
    dispatch1: ()=>{
       axios.get("https://blog-api-u.herokuapp.com/v1/posts")
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

