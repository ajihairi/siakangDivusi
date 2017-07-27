import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Icon, Header, Button, Title, Left, Right, Content, Tabs, Tab, H1 } from 'native-base';
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
      <H1>Laporan Harian</H1>
      </Header>    
         <Tabs initialPage={0}>
                        <Tab heading="Aktivitas">
                          <Aktivitas/>
                          </Tab>
                        <Tab heading="Remote">
                          <Remote/>
                          </Tab>
                        <Tab heading="Koreksi">
                          <Koreksi/>
                          </Tab>
                        <Tab heading="Izin">
                          <Izin/>
                        </Tab>
                        <Tab heading="Dinas">
                          <Dinas/>
                        </Tab>
          </Tabs>
      </Container>
            

        
    );
}
}
