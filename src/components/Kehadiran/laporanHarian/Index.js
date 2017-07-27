import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Icon, Header, Button, Title, Left, Right, Content, Tabs, Tab, H1 } from 'native-base';
import Aktivitas from './laporanHarian/Aktivitas';
import Remote from './laporanHarian/Remote';
import Koreksi from './laporanHarian/Koreksi';
import Izin from './laporanHarian/Izin';
import Dinas from './laporanHarian/Dinas';


export default class Index extends Component {
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
