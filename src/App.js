import logo from './logo.svg';
import moon from './moon.svg';
  import React from 'react';
import Greeting from './components/Greetings';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



import './Appe.css';
import TextInput from './components/TextInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      speed: 25,
      hour: null,
      dayNight:true

    };
  }
  componentDidMount = () => {
    this.getTheme();
    
  }
  
  
  getTheme = () => {
    var date = new Date();
    var hour = date.getHours();
    var dayNight
    if(hour > 12){
      dayNight = true;
    }else{
      dayNight = false;
    }
    this.setState({ dayNight });
  };
 
  render(){
    //var { dayNight } = this.state;
    var date = new Date();
    var hour = date.getHours();
    var dayNight
    if(hour < 12){dayNight = true;}else{dayNight = false;}
    //if(hour >= 12){dayNight = true;}else{dayNight = false;}
    var bg = dayNight ? '#c2f4ff' : '#474343';
    return(
        <div 
          className="App"
          style={{
            backgroundColor: bg,
            top:'0',
            left:'0',
            width: '100%',
            height: '100%',
            position:'fixed',
            padding:'0',
            margin:'0',
          }}
        >
        <Container
          
        >

      <Box 
        m={2} pt={3}
        component="section" 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
        {dayNight ?
        <img
        src={logo} 
        className="App-logo" 
        alt="logo"
        style={{
          animation: `spin ${this.state.speed}s linear infinite`
        }}/>
        :
      <img
        src={moon} 
        className="App-logo" 
        alt="logo"
        
      />
      }
      
          
      </Box>
      {
      dayNight 
      ?
      <Greeting dayNight = {false}/>
      :
      <Greeting dayNight = {true}/>
      }
      </Container>
      <Container>
        
        {
        dayNight 
        ?
        <TextInput dayNight={true}/>
        :
        <TextInput dayNight={false}/>
        }
      </Container>
      </div>
    
    );
  }
}

export default App;
