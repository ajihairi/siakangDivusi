import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Button,Container, Content, InputGroup, Item, Input, Picker } from 'native-base';

class Aktivitas extends Component {
    render()
    {
               const { SearchStyle, ViewStyle, buttonStyle, TextStyle, ListStyle} = styles;

      return (
      <Container style={{paddingLeft : 10}}>
          <Content>
              
              <Text>tanggal</Text>
              
            <Item style={SearchStyle} block >
            <Input placeholder='tanggal' />
            </Item>
             <Text>jam masuk</Text>
            <Item style={SearchStyle} block >
            <Input placeholder='jam masuk' />
            </Item>
             <Text>jam keluar</Text>
            <Item style={SearchStyle} block >
            <Input placeholder='jam keluar' />
            </Item>
             <Text>aktivitas harian</Text>
            <Item style={SearchStyle} block >
            <Input placeholder='aktivitas harian' />
            </Item>
             <Text>Mood</Text>
            <Picker  
            
                    style ={{ margin : 12}}
                        selectedValue = {this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({prop:'shift', value: value})}
                    >
                        <Picker.Item label="Mood1" value="Monday" />
                        <Picker.Item label="Mood2" value="Tuesday" />
                        <Picker.Item label="Mood3" value="Wednesday" />
                        <Picker.Item label="Mood4" value="Thursday" />
                    </Picker>
             <Text>terima kasih untuk </Text>
            <Picker
                    style ={{ margin : 12}}
                        selectedValue = {this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({prop:'shift', value: value})}
                    >
                        <Picker.Item label="nama orang 1" value="Monday" />
                        <Picker.Item label="nama orang 2" value="Tuesday" />
                        <Picker.Item label="nama orang 3" value="Wednesday" />
                        <Picker.Item label="nama orang 4" value="Thursday" />
                        <Picker.Item label="nama orang 5" value="Monday" />
                        <Picker.Item label="nama orang 6" value="Tuesday" />
                        <Picker.Item label="nama orang 7" value="Wednesday" />
                        <Picker.Item label="nama orang 8" value="Thursday" />
                        <Picker.Item label="nama orang 9" value="Monday" />
                        <Picker.Item label="nama orang 10" value="Tuesday" />
                        <Picker.Item label="nama orang 11" value="Wednesday" />
                        <Picker.Item label="nama orang 12" value="Thursday" />
                    
                    </Picker>
           <Text>catatan</Text>
            <Item style={SearchStyle} block >
            <Input placeholder='catatan' />
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

const styles = {
 SearchStyle: {
    marginTop: 10,
    position: 'relative',
  },
buttonStyle: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom:10
  },
}

export default Aktivitas;
