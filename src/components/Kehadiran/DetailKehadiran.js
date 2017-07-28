import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Text,
    Button,
    List
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class DetailKehadiran extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>jam masuk</Label>
                            <Text></Text>
                           </Item>
                        <Item stackedLabel>
                            <Label>jam pulang</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel>
                            <Label>total jam kerja</Label>
                            <Text></Text>
                        </Item>
                        <Item stackedLabel last>
                            <Label>aksi</Label>
                            
                                             <List style={{flexDirection: 'row', marginTop: 30,  alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Button  
                    style={{width:150, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      marginRight: 4}}

                      onPress={() => Actions.keyLaporanHarian()}>
                      <Text> Laporan Harian </Text>
                    </Button>

                    <Button primary style={{width:150, justifyContent: 'center', alignItems: 'center', marginLeft: 4}}>
                      <Text> Claim Lembur </Text>
                    </Button>

                  </List>
                            
                        </Item>
                        
                    </Form>
                </Content>
                <Button  onPress={() => this.props.navigation.goBack()}>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}