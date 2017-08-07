import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';
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
    Body,
    Header
} from 'native-base';
import ListLemburDriver from './ListLemburDriver';
import LibraryLemburDriver from '../reducers/LibraryLemburDriver'

export default class BodyLemburDriver extends Component {
    render() {
        const { SearchStyle, ViewStyle, ButtonStyle, TextStyle, ListStyle} = styles;

        return (
            <Container>
                <Content>
                    <Item style={SearchStyle} rounded>
                        <Icon name="ios-search" />
                        <Input 
                            placeholder="Search" 
                        />
                        <Icon name="ios-people" />
                    </Item>
                    <Button style={ButtonStyle} block rounded>
                        <Text style={TextStyle}>Search</Text>
                    </Button>
                    <ListLemburDriver />                        
                </Content>
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