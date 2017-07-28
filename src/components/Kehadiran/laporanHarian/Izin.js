import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';

class Koreksi extends Component {
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
