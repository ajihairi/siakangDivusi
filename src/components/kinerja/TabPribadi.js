import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {
    Icon,
    Item,
    Container,
    Content,
    Input,
    Button,
    Text,
    Tabs,
    Tab
} from 'native-base';
import ListActivitasPribadi from './ListActivitasPribadi';
import ListHariPribadi from './ListHariPribadi';
import DatePicker from 'react-native-datepicker';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TabPribadi extends Component {
    constructor() {
        super()
        this.state = {
            data: ds
        }
    }

    getData() {
        return fetch('https://www.makanbandung.com/api/performance?tanggalAwal=01-01-2017&tanggalAkhir=01-12-2017&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: ds.cloneWithRows(responseJson.data.kinerjaPribadi)
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
            <ListHariPribadi library={library} />
        )
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <DatePicker
                                style={{ width: 130, marginLeft: 10 }}
                                date={this.state.date1}
                                mode="date"
                                placeholder="select date"
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
                            <Text style={{ marginRight: 5, marginLeft: 5 }}> s/d </Text>
                            <DatePicker
                                showIcon={false}
                                style={{ width: 100 }}
                                date={this.state.date2}
                                mode="date"
                                placeholder="select date"
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
                                        marginLeft: 0,
                                        marginRight: 5
                                    }
                                }
                                }
                                onDateChange={(date2) => { this.setState({ date2: date2 }) }}
                            />
                        </View>
                        <Button primary transparent >
                            <Icon large name="search" style={{ color: "dodgerblue" }} />
                        </Button>
                        <Tabs initialPage={0}>
                            <Tab heading="Hari">
                                <ListView
                                    dataSource={this.state.data}
                                    renderRow={this.renderRow}
                                />
                            </Tab>
                            <Tab heading="Aktivitas">
                                <ListActivitasPribadi data={this.state.data} />
                            </Tab>
                        </Tabs>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}