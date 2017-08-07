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
    Body,
    Header
} from 'native-base';
// import ListLembur from './components/ListLembur';
// import DetailLaporan from './components/DetailLaporan';
import ListLembur from './ListLembur';

export default class BodyLembur extends Component {
    render() {
        const { SearchStyle, ViewStyle, ButtonStyle, TextStyle, ListStyle} = styles;

        return (
            <Container>
            <Header searchBar rounded>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                  </Item>
                  <Button transparent>
                    <Text>Search</Text>
                  </Button>
                </Header>
                <Content>
                    <ListLembur />                        
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

module.export = BodyLembur;