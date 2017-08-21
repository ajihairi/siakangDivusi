import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Header,
    Left,
    Label,
    Right,
    Body,
    Icon,
    Title,
    Text,
    Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import ItemDetailLemburDriver from './ItemDetailLemburDriver';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class DetailLemburDriver extends Component {

    constructor() {
        super()
        this.state = {
            data: ds
        }
    }

    getData() {
        return fetch('https://si-akang-dev.divusi.com/api/overtime_driver/detail_overtime_driver?tanggal='+this.props.tanggal+'&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: ds.cloneWithRows(responseJson.data.detailLaporanLemburDriver)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getData();
    }

    renderRow(library) {
        return (
            <ItemDetailLemburDriver library={library} />
        )
    }

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => Actions.applemburdriver()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ width: 150 }}>Detail Laporan Lembur Driver</Title>
                        </Body>
                        <Right />
                    </Header>
                    <ListView
                        dataSource={this.state.data}
                        renderRow={this.renderRow}
                    />
                </Content>
            </Container>
        );
    }
}