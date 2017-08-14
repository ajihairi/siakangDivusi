import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Icon, Header, Button, Title, Left, Right, Content, Tabs, Tab, H1, Body } from 'native-base';
import Aktivitas from './Aktivitas';
import Remote from './Remote';
import Koreksi from './Koreksi';
import Izin from './Izin';
import Dinas from './Dinas';


export default class laporanHarian extends Component {
  render(){
    return (
      
      <Container hasTabs>
     <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Laporan Harian</Title>
            </Body>
            <Right />
          </Header>  
         <Tabs initialPage={0}>
                        <Tab heading="Aktivitas"  >
                          <Aktivitas/>
                          </Tab>
                        <Tab heading="Remote" >
                          <Remote/>
                          </Tab>
                        <Tab heading="Koreksi" >
                          <Koreksi/>
                          </Tab>
                        <Tab heading="Izin" >
                          <Izin/>
                        </Tab>
                        <Tab heading="Dinas" >
                          <Dinas/>
                        </Tab>
          </Tabs>
      </Container>
            

        
    );
}
}

const styles ={
  tabStyle:{
    width: 100
  }
}
