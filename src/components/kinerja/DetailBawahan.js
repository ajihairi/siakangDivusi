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

export default class DetailBawahan extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Tanggal :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel>
                            <Label>Jam Kerja :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Total Jam Kerja :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Kehadiran :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Alasan Kehadiran :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Activitas :</Label>
                            <Label/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Mood :</Label>
                            <Label/>
                        </Item>
                    </Form>
                </Content>
                <Button onPress={() => this.props.navigation.goBack()} block>
                   <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}