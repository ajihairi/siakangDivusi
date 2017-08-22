import React, { Component } from 'react';
import { Container, Icon, Text, Header, Content, Tab, Tabs, Footer, FooterTab, TabHeading} from 'native-base';
import Menu from './Menu';
import {View} from 'react-native';
import Profile from './Profile';
import {Router, Scene, Actions} from 'react-native-router-flux';

class MainMenu extends Component{
    render(){
    return (
      <Container >
        <Header hasTabs style={{height: 20}}/>
        <Tabs initialPage={0}  >
          <Tab 
            heading={ 
              <TabHeading style={{flexDirection: 'column'}}>
                <Icon name="apps" />
                <Text style={{fontSize:12, marginTop: 1}}> Menu </Text>
              </TabHeading>
              
              }>
            <Menu />
          </Tab>
          <Tab style={{height: 200}}
          heading={ 
            <TabHeading style={{flexDirection: 'column'}}>
              <Icon name="person" />
              <Text style={{fontSize:12, marginTop: 1}}> Profile </Text>
            </TabHeading>
            
            }>
          <Profile />
        </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default MainMenu;
