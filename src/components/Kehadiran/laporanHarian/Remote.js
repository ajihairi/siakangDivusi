import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Remote extends Component {
    render()
    {
      return (
      <Container>
          <Content style={{paddingLeft: 10}}>
            <ListItem>
            <CheckBox checked={true}/>
            <Body style={{marginLeft: 5}}>
              <Text>ajukan remote </Text>
            </Body>
            </ListItem>
             <Text>jam masuk</Text>
            <Item >
            <Input placeholder='jam masuk' />
            </Item>
             <Text>jam keluar</Text>
            <Item  >
            <Input placeholder='jam keluar' />
            </Item>
             <Text>alasan remote</Text>
            <Item >
            <Input placeholder='alasan remote' />
            </Item>

            </Content>
      </Container>
    );
    }
    }

export default Remote;
