import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css/';

//import connect from reac-redux
import { connect } from  'react-redux';
import { changeColor } from './Color/actions';


class App extends Component {

  render() {
    return (
      <div className='center'>
      <h1 className='h1-cen' >Pick a Color</h1>
        <section className="borderstyle" style={{backgroundColor: this.props.color}}> </section>
      <div className="App">
       
      <input className='text-cen' type="color" value={this.props.color} onChange={(e) => this.props.changeColor(e.target.value)} />
      
        
      </div>
       
       </div>
       
    );
  }
}

//create map state to props funtion
const mapStateToProps = (state) =>{
  return {
    color: state.color
  }
}
//create map dispatch to props funtion
const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color) => dispatch(changeColor(color))
  }
}
//wrap app in connect call

export default connect(mapStateToProps, mapDispatchToProps)(App);

