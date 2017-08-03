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
              <Text>ajukan perjalanan dinas </Text>
            </Body>
</ListItem>
<Text>id spj </Text>
<Picker
                    style ={{ margin : 12}}
                        selectedValue = {this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({prop:'shift', value: value})}
                    >
                        <Picker.Item label="spj-1" value="Monday" />
                        <Picker.Item label="spj-2" value="Tuesday" />
                        <Picker.Item label="spj-3" value="Wednesday" />
                        <Picker.Item label="dll" value="Thursday" />
                    </Picker>
            <Item style={{marginTop : 5,  justifyContent : 'center'}} >
            <Button style={{justifyContent:'center',marginLeft: 5, width : 300 }} block>
           <Text>submit </Text>
          </Button>
            </Item>
</Content>
  </Container>
      );
    }
}
    
  
           
           
export default Koreksi;
