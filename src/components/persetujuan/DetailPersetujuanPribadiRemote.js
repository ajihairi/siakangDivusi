import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Text,
    Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class DetailPersetujuanPribadiRemote extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form style={{marginTop: 30}}>
                        <Item stackedLabel>
                            <Label>Nama karyawan :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Departemen :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jabatan :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Tanggal Remote :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>jam mulai remote :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>jam selesai remote :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>alasan  :</Label>
                            <Label/>
                        </Item>
                         <Item stackedLabel last>
                            <Label>catatan persetujuan  :</Label>
                            <Label/>
                        </Item>
                    </Form>
                </Content>
                <Button 
                block 
                onPress={() => this.props.navigation.goBack()} 
                style={{marginRight: 10, marginLeft: 10, marginBottom: 15}}>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}