import React, {Component} from 'react';
import {connect} from 'react-redux';


class Home extends Component {
  constructor(props) {
    super(props);    
  } 

  render() {
    
    const htmlPosts = this.props.allPosts.map((item,index)=>{
      return <div key={item.index}><h3>{item.title}</h3>{item.body}</div>
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
       // dispatch(funcionQueDevuelveUnObjetoAcccion)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

