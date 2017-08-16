import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Picker
} from 'react-native';
import {
    Icon,
    Item,
    Container,
    Content,
    Input,
    Button,
    Text,
    Tabs,
    Card,
    CardItem,
    H1,
    Tab
} from 'native-base';
import ListAktivitasBawahan from './ListAktivitasBawahan';
import ListNamaBawahan from './ListNamaBawahan';
import ListHariBawahan from './ListHariBawahan';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import SegmentedControlTab from 'react-native-segmented-control-tab'

class ExampleMain extends Component {
    getInitialState() {
        var fetchServicesUri = 'http://some.url/available_services';
        fetch(fetchServicesUri)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                var services = [];
                for(var service in responseJson.services) {
                    services.push(<Picker.Item label={service.Label} value={service.Value}/>);
                }
                this.setState({
                    services: services
                });
            })
            .catch((error) => {
                console.warn(error);
            })
            .done();
        return {
            services: [],
            selectedService: null
        }
    }

    render() {
        return (
            <View>
                <Text>Pick a service</Text>
                <Picker
                    selectedValue={this.state.selectedService}
                    onValueChange={(service) => this.setState({selectedService:service})}
                >
                    {this.state.services}
                </Picker>
            </View>
        );
    }
}

export default ExampleMain
