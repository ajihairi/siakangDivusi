import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Item,
    Icon,
    Input,
    Button,
    Tabs,
    Card,
    CardItem,
    Picker,
    Tab
} from 'native-base';
import ListHariBawahan from './ListHariBawahan';
import ListAktivitasBawahan from './ListAktivitasBawahan';
import { View, ListView } from 'react-native';
import DatePicker from 'react-native-datepicker';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TabBawahan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "00-00-0000",
            data: ds,
            selected1: "key1",
            selected: 0
        }
    }

    getData() {
        return fetch('https://si-akang-dev.divusi.com/api/subordinate_list?subordinate=93&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: ds.cloneWithRows(responseJson.data.daftar_bawahan)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getData();
    }

    renderRowHari(library) {
        return (
            <ListHariBawahan library={library} />
        )
    }

    renderRowAktivitas(library) {
        return (
            <ListAktivitasBawahan library={library} />
        )
    }

    onValueChange(library) {
        this.setState({
            data: value
        });
        return (
            <Item label={this.props.library.nama_karyawan} value={this.props.library.id} />
        )
    }

    render() {
        return (
            <Content style={{ backgroundColor: '#f4f4f4' }}>
                <View>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        dataSource={this.state.data}
                        onValueChange={this.onValueChange.bind(this)}
                    />
                    <View>
                        <DatePicker
                            style={{ width: 130, marginLeft: 10, marginTop: 10 }}
                            date={this.state.date1}
                            mode="date"
                            placeholder="Start Date"
                            format="DD-MM-YYYY"
                            minDate="2017-01-01"
                            maxDate="2030-12-31"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"

                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }
                            }
                            onDateChange={(date1) => { this.setState({ date1: date1 }) }}
                        />
                    </View>
                    <View>
                        <DatePicker
                            style={{ width: 130, marginLeft: 10, marginTop: 10 }}
                            date={this.state.date2}
                            mode="date"
                            placeholder="End Date"
                            format="DD-MM-YYYY"
                            minDate="2017-01-01"
                            maxDate="2030-12-31"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"

                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }
                            }
                            onDateChange={(date2) => { this.setState({ date2: date2 }) }}
                        />
                    </View>
                    <Button block info style={{ marginLeft: 10, marginRight: 10, marginBottom: 15, marginTop: 15 }}>
                        <Icon large name="search" style={{ color: "white" }}>
                            <Text> Cari </Text>
                        </Icon>
                    </Button>
                    <Tabs initialPage={0}>
                        <Tab heading="Hari">
                            <ListView
                                dataSource={this.state.data}
                                renderRow={this.renderRowHari}
                            />
                        </Tab>
                        <Tab heading="Aktivitas">
                            <ListView
                                dataSource={this.state.data}
                                renderRow={this.renderRowAktivitas}
                            />
                        </Tab>
                    </Tabs>
                </View>
            </Content>
        );
    }
}