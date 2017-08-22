import React, { Component } from 'react';
import { Container } from 'native-base';
import {TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from 'react-native-router-flux';
import {Header, Left, Right, Title, Body, Button, Icon,Item,Picker,Text,Image} from 'native-base';
import BodyKehadiran from './Kehadiran/BodyKehadiran';
import SideMenu from 'react-native-side-menu';
import Menu from './SideMenu';


export default class Kehadiran extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      selected1: "key1",
      selected2: "keyb",
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

 
  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => Actions.keyMainMenu()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Kehadiran</Title>
            </Body>
            <Right>
          <TouchableOpacity onPress={this.toggle}><Icon name='ios-menu' style={{color:'white'}}/></TouchableOpacity>
          </Right>
          </Header>
          <BodyKehadiran />
        </Container>
</SideMenu>
    );
  }
}


module.export = Kehadiran;