import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';

class Izin extends Component {
    render()
    {
      return (
      <Container>
          <Content style={{paddingLeft : 10, paddingTop: 10}}>
            <ListItem>
            <CheckBox checked={true}/>
            <Body style={{marginLeft: 5}}>
              <Text>ajukan izin </Text>
              </Body>
          </ListItem>
            <Text>tipe izin</Text>
                <Picker
                    style ={{ margin : 12}}
                        selectedValue = {this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({prop:'shift', value: value})}
                    >
                        <Picker.Item label="setengah hari" value="Monday" />
                        <Picker.Item label="pulang duluan" value="Tuesday" />
                        <Picker.Item label="telat" value="Wednesday" />
                        <Picker.Item label="dll" value="Thursday" />
                    </Picker>
                     <Text>alasan</Text>
            <Item >
            <Input placeholder='alasan' />
            </Item>
</Content>
  </Container>
      );
    }
}
    
  
           
           
export default Izin;
