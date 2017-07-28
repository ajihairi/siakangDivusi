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
    Fab,
    Header
} from 'native-base';
import ListKehadiran from './ListKehadiran';
import Fabs from './Fabs';
export default class BodyKehadiran extends Component {
     constructor(props) {
      super(props);
      this.state = {
        selected1: "key1",
        selected2: "keya"
      };
    }
    
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
                <ListKehadiran />
                <Fabs />
            </Container>
        );
    }
}

const styles = {
  SearchStyle: {
    marginTop: 10,
    paddingLeft: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  ButtonStyle: {
    marginTop: 5,
    alignItems: 'center',
    position: 'relative',
    marginBottom:5
  },
  TextStyle: {
    color:'#fff',
    position: 'relative',
  }
}

module.export = BodyKehadiran;