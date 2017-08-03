import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Koreksi extends Component {
    render()
    {
      return (
      <Container>
          <Content style={{paddingLeft : 10, paddingTop: 10}}>
            <ListItem>
            <CheckBox checked={true} />
            
            <Body style={{marginLeft: 5}}>
              <Text>ajukan koreksi</Text>
            </Body>
            </ListItem>
             <Text>Jam masuk</Text>
            <Item  >
            <Input placeholder='jam masuk' />
            </Item>
             <Text>jam keluar</Text>
            <Item  >
            <Input placeholder='jam keluar' />
            </Item>
             <Text>alasan koreksi</Text>
            <Item >
            <Input placeholder='alasan koreksi' />
            </Item>
           <Item style={{marginTop : 5,  justifyContent : 'center'}} >
            </Item>     
            </Content>
      </Container>
    );
    }
    }

export default Koreksi;
