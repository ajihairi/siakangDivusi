import React, { Component } from 'react';
import { View, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Container,
    Item,
    Icon,
    Input,
    Button,
    Content,
    List,
    ListItem,
    Text,
    Right,
    Left,
    Body,
    Header
} from 'native-base';
// import ListLembur from './components/ListLembur';
// import DetailLaporan from './components/DetailLaporan';
// import ListSPJ from './ListSPJ';
import ItemSPJ from './ItemSPJ';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class BodySPJ extends Component {

    constructor() {
        super()
        this.state = {
            data: ds,
            text: ''
        }
    }

    getData() {
        return fetch('https://www.makanbandung.com/api/travel?start=0&length=20&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: ds.cloneWithRows(responseJson.data.laporanSPJ)
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
            <ItemSPJ library={library} />
        )
    }

    filterSearch(text){
        const newData = this.state.data.filter((item) => {
            const itemData = item.idSPJ.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: ds.cloneWithRows(newData),
            text: text
        })
    }

    render() {
        const { SearchStyle, ViewStyle, ButtonStyle, TextStyle, ListStyle } = styles;

        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            placeholder="Search"
                            onChangeText={(text) => this.filterSearch(text)}
                            value={this.state.text}
                        />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <ListView style={{paddingTop: 20}}
                        dataSource={this.state.data}
                        renderRow={this.renderRow}
                    />
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
    ButtonStyle: {
        marginTop: 10,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 10
    },
    TextStyle: {
        color: '#fff',
        position: 'relative',
    }
}
