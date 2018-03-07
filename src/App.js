import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css/';

//import connect from reac-redux
import { connect } from  'react-redux';


class App extends Component {
  render() {
    return (
      <div className='center'>
        <section className="borderstyle"> </section>
      <div className="App">
       
      <input type="color" value={this.state.value} onChange={this.handleOnChange}/>
      
        
      </div>
       
       </div>
       
    );
  }
}

//create map state to props funtion
const mapStateToProps = null;
//create map dispatch to props funtion
const mapDispatchToProps = null;
//wrap app in connect call

export default connect(mapStateToProps, mapDispatchToProps)(App);

