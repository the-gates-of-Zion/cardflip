import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { CircularProgress, Container } from '@mui/material';




export default class TextInput extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            genText: '',
            TextField: '',
            loading: false,
            dayNight: this.props.dayNight
        };
        
      }
      componentDidMount(){
        //this.getText.bind(this)
      }
      async query(data) {
        var response = await fetch(
            "https://greentealatte-flowise-morning.hf.space/api/v1/prediction/83c17767-deb3-4065-8ce7-6271941a7366",
            {
                headers: {
                    Authorization: "Bearer mzCAQ5kx4dbMMb2Zi2IOBryC3GU12urpWf7UTGuB8i0=",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            }
        );
        var result = await response.json();
        console.log(result)
        return result;
    }
    async getText(){
        this.setState({loading:true})
        var genTextJSON = await this.query({"question":this.state.TextField})
        
        if (genTextJSON.hasOwnProperty("text")){
            this.setState({genText:genTextJSON.text, loading:false})
        }else {
            this.setState({genText:"Wish you a good day. But we are busy at the moment (>_<)", loading:false})
        }

    }
    handleTextFieldChange(e){
        this.setState({TextField:e.target.value})
    }
    keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           this.getText()
        }
     }
    render(){
        var color = this.state.dayNight? 'black' : 'white';
        return (
            <Container key = {"outer"} style={{color: color}}>
            <Box
              sx={{
                //width: 500,
                maxWidth: '100%',
              }}
            >
                <Stack direction="row" spacing={2}>
                <TextField fullWidth label="Tell me what you are thinking" id="fullWidth" 
                    onChange={this.handleTextFieldChange.bind(this)}
                    onKeyDown={this.keyPress.bind(this)}
                />
                <Button variant="contained" endIcon={<SendIcon />} onClick={this.getText.bind(this)}>
                    Send
                </Button>
                </Stack>
            </Box>
            <Container key = {"inner"}>
                
                <Container key = {"inner2"}> 
                    {(this.state.loading) && 
                    (
                        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                            <CircularProgress color="secondary" />
                            <CircularProgress color="success" />
                            <CircularProgress color="inherit" />
                        </Stack>
                    )}
                </Container>
                <div key = {"inner3"} style={{maxHeight: "30vh", overflowY: "scroll", whiteSpace: 'pre-line'}}>
                    {this.state.genText}
                </div>
            </Container>
            </Container>
          );
    }
  
}
