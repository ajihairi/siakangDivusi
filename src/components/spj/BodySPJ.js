import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
    Container, 
    Item, 
    Icon, 
    Input, 
    Button, 
    Content, 
    List, 
    ListItem, 
    Text, 
    Right, 
    Left,
    Body
} from 'native-base';
// import ListLembur from './components/ListLembur';
// import DetailLaporan from './components/DetailLaporan';
// import ListSPJ from './ListSPJ';
import ItemSPJ from './ItemSPJ';

export default class BodySPJ extends Component {
    
    constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    getData(){
        return fetch('https://www.makanbandung.com/api/travel?start=0&length=10&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({data: responseJson.data.laporanSPJ});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        const { SearchStyle, ViewStyle, ButtonStyle, TextStyle, ListStyle} = styles;

        return (
            <Container>
                <Content>
                    <Item style={SearchStyle} rounded>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button style={ButtonStyle} block rounded>
                        <Text style={TextStyle}>Search</Text>
                    </Button>
                    <ItemSPJ data = {this.state.data}/>                        
                </Content>
                <Button onPress={() => Actions.keyMainMenu()} style={ButtonStyle} block rounded>
                    <Text style={TextStyle}>Back</Text>
                </Button>
            </Container>
        );
    }
}

const styles = {
  SearchStyle: {
    marginTop: 10,
    position: 'relative',
  },
  ButtonStyle: {
    marginTop: 10,
    alignItems: 'center',
    position: 'relative',
    marginBottom:10
  },
  TextStyle: {
    color:'#fff',
    position: 'relative',
  }
}

module.export = BodySPJ;