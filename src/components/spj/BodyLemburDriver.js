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
import ListLemburDriver from './ListLemburDriver';

export default class BodyLemburDriver extends Component {
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
                    <ListLemburDriver />                        
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

module.export = BodyLemburDriver;