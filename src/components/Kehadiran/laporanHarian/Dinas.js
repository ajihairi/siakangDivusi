import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { ListItem,List, Container, Content, InputGroup, Input, Picker, CheckBox, Body, Button, Item } from 'native-base';

class Dinas extends Component {
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
                    <List style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>

              <Button danger
                style={{
                  width: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 4
                }}

                onPress={() => this.props.navigation.goBack()}>
                <Text> Batal </Text>
              </Button>

              <Button primary style={{ width: 150, justifyContent: 'center', alignItems: 'center', marginLeft: 4 }}>
                <Text> Submit </Text>
              </Button>

            </List>
</Content>
  </Container>
      );
    }
}
    
  
           
           
export default Dinas;
