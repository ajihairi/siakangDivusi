import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';

class Remote extends Component {
    render()
    {
      return (
      <Container>
          <Content>
            <ListItem>
            <CheckBox checked={true} />
            <Body>
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

export default Remote;
