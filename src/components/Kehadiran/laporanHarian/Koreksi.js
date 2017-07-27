import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';

class Koreksi extends Component {
    render()
    {
      return (
      <Container>
          <Content>
            <ListItem>
            <CheckBox checked={true} />
            <Body>
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
            <Button style={{justifyContent:"center", marginRight: 5, width: 150}} block>
             <Text>Back</Text>
            </Button>
          
            <Button style={{justifyContent:'center',marginLeft: 5, width : 150 }} block>
           <Text>Next </Text>
          </Button>
            </Item>     
            </Content>
      </Container>
    );
    }
    }

export default Koreksi;
