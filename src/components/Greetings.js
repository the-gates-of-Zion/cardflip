// src/components/Greeting.js
import { Container } from '@mui/material';
import React, { Component } from 'react';

export default class Greeting extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      username: '', // Replace with the user's name
      dayNight: this.props.dayNight 
    };
    
  }
  componentDidMount() {

  }

  
  render() {
    var { dayNight } = this.state;
    var greeting = 'Happy studying 😊☀️';
    
    
    return (
      <Container>
      <div 
           className="App"
           style={{color: (dayNight) ? 
            'white'
            :
            'black'
          }}
      >
        <h2>{greeting} ! </h2>
        
        <p>Hope you have a good time during your study today</p>
  
      </div>
      </Container>
    );
  }
}

//export default Greeting;