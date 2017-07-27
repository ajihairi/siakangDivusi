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
} from 'native-base';import ListKehadiran from './ListKehadiran';

export default class BodyKehadiran extends Component {
    render() {
        const { SearchStyle, ViewStyle, ButtonStyle, TextStyle, ListStyle} = styles;

        return (
            <Container>
                <Content>
                    <Item>
                <Left>
                    <Button style={ButtonStyle}>
                    <Text>Ajukan Cuti</Text>     
                    </Button>
                    <Button style={ButtonStyle} >
                    <Text>penugasan lembur</Text>                    
                    </Button>
                    
                </Left>
                <Right>
                    <Item style={SearchStyle} rounded>
                        <Icon name="ios-search" />
                       
                        <Input placeholder="Search" />
                      
                    </Item>
                </Right>
                </Item>
                   
                    <ListKehadiran />                        
                </Content>
                <Button style={ButtonStyle} block rounded>
                    <Text style={TextStyle}>Back</Text>
                </Button>
            </Container>
        );
    }
}

const styles = {
  SearchStyle: {
    marginTop: 10,
 
  },
  ButtonStyle: {
    marginTop: 5,
    alignItems: 'center',
    position: 'relative',
    marginBottom:5,
    width: 150,
    alignItems: 'center'
  },
  TextStyle: {
    color:'#fff',
    position: 'relative',
  }
}

module.export = BodyKehadiran;