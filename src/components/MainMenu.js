import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs} from 'native-base';
import Menu from './Menu';
import {View} from 'react-native';
import Profile from './Profile';

const MainMenu =()=>{

    return (

      <Container >
        <Tabs initialPage={0} >
          <Tab heading="Menu" >
            <Menu />
          </Tab>
          <Tab heading="Profile">
            <Profile />
          </Tab>
        </Tabs>
      </Container>
    );
}
export default MainMenu;
