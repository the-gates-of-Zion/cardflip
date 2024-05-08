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
    var {  username,dayNight } = this.state;
    var greeting = dayNight ? 'Good evening 😊🌆':'Good morning 😊☀️';
    
    
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
        <h2>{greeting} {username}! Here is a bible passage for you:</h2>
        {dayNight ?
        (<p>我必安然躺下睡覺，因為獨有你─耶和華使我安然居住。詩篇4:8</p>)
        :
        (<p>This is the day that the Lord has made; let us rejoice and be glad in it. Psalm 118:24</p>)
  }
      </div>
      </Container>
    );
  }
}

//export default Greeting;