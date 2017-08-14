import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';
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
import ItemDetailPribadiLemburDriver from './ItemDetailPribadiLemburDriver';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class DetailPribadiLemburDriver extends Component {

    constructor() {
        super()
        this.state = {
            data: ds
        }
    }

    getData() {
        return fetch()
            .then((response) => response.json())
            .then((responseJson) => {
                
                this.setState({ 
                    data: ds.cloneWithRows(responseJson.data.cuti)
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
          	    <ItemDetailPribadiLemburDriver library={library} /> 
        )
    }

    render() {
        return (
            <Container>
                <Content>
                    <ListView 
                        dataSource={this.state.data} 
                        renderRow={this.renderRow}
                    />
                </Content>
                <Button onPress={() => this.props.navigation.goBack()} block>
                    <Text>Back</Text>
                </Button>
            </Container>
        );
    }
}