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
                <View style={{backgroundColor: 'white'}}>
                    <ListKehadiran />
                        <Fab
                            active={this.state.active}
                            direction="up"
                            style={{ backgroundColor: '#5067FF', marginBottom: 70 }}
                            position="bottomRight"
                            onPress={() => this.setState({ active: !this.state.active })}>
                            <Icon name="add" />
                            <Button 
                            primary transparent 
                            onPress={()=>Actions.keyPengajuanCuti()} style={{ backgroundColor:"#34A34F", marginBottom: 70}}>
                              <Icon name="calendar" style={{color:'white'}} />
                            </Button>
                            <Button 
                            primary transparent
                            onPress={()=>Actions.keyPenugasanLembur()} style={{ backgroundColor:"gray", marginBottom: 70}}>
                              <Icon name="clock" style={{color:'white'}} />
                              </Button>
                        </Fab>
                </View>
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