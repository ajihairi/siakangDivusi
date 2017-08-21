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
import {
    StyleSheet,
    View,
    ListView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { create } from 'apisauce';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const api = create({
    baseURL: 'https://si-akang-dev.divusi.com/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class TabBawahan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "00-00-0000",
            data: [],
            databawahan: ds,
            selected1: "key1",
            selected: 0,
            selectedIndex: 0,
            selectedIndices: [0],
            customStyleIndex: 0,
        }
    }

    handleCustomIndexSelect = (index) => {
        this.setState({
            ...this.state,
            customStyleIndex: index,
        });
    }

    getData() {
        api.get('subordinate_list?subordinate=93&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
            .then((response) => {
                if (response.ok) {
                    this.setState({ data: response.data.data.daftar_bawahan })
                }
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

    onValueChange(value) {
        this.setState({
            selected1: value
        });
        console.log(value);
        api.get('performance_subordinate?tanggalAwal=12-08-2017&tanggalAkhir=01-12-2017&subordinate=' + value + '&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
            .then((response) => {
                if (response.ok) {
                    this.setState({ databawahan: ds.cloneWithRows(response.data.data.kinerjaBawahan) })
                    console.log(response.data.data.kinerjaBawahan)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Content style={{ backgroundColor: '#f4f4f4', marginLeft: 10, marginRight: 10 }}>
                <View>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        {this.state.data.map((item, index) => {
                            return (
                                <Item
                                    label={item.nama_karyawan} value={item.id} key={index}

                                ></Item>
                            )
                        })}
                    </Picker>
                    <View>
                        <DatePicker
                            style={{ width: 363, marginTop: 10 }}
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
                                    marginLeft: 0
                                }
                            }
                            }
                            onDateChange={(date1) => { this.setState({ date1: date1 }) }}
                        />
                    </View>
                    <View>
                        <DatePicker
                            style={{ width: 363, marginTop: 10 }}
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
                                    marginLeft: 0
                                }
                            }
                            }
                            onDateChange={(date2) => { this.setState({ date2: date2 }) }}
                        />
                    </View>
                    <Button block info style={{ marginBottom: 15, marginTop: 15, backgroundColor: '#2980b9' }}>
                        <Icon large name="search" style={{ color: "white" }}>
                            <Text> Cari </Text>
                        </Icon>
                    </Button>
                    <View>
                        <SegmentedControlTab
                            values={['Hari', 'Aktivitas']}
                            selectedIndex={this.state.customStyleIndex}
                            onTabPress={this.handleCustomIndexSelect}
                            borderRadius={5}
                            tabsContainerStyle={{ height: 50, backgroundColor: '#f2f2f2', marginBottom: 10 }}
                            tabStyle={{ backgroundColor: 'white', borderWidth: 2, borderColor: '#2980b9' }}
                            activeTabStyle={{ backgroundColor: '#2980b9' }}
                            tabTextStyle={{ color: '#2980b9', fontWeight: 'bold' }}
                            activeTabTextStyle={{ color: 'white' }} />
                        {this.state.customStyleIndex === 0 &&
                            <ListView
                                enableEmptySections
                                dataSource={this.state.databawahan}
                                renderRow={this.renderRowHari}
                            />}
                        {this.state.customStyleIndex === 1 &&
                            <ListView
                                enableEmptySections
                                dataSource={this.state.databawahan}
                                renderRow={this.renderRowAktivitas}
                            />}
                    </View>
                </View>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    tabViewText: {
        color: '#444444',
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 18
    },
    titleText: {
        color: '#444444',
        padding: 20,
        fontSize: 14,
        fontWeight: '500'
    },
    headerText: {
        padding: 8,
        fontSize: 14,
        color: '#444444'
    },
    tabContent: {
        color: '#444444',
        fontSize: 18,
        margin: 24
    },
    Seperator: {
        marginHorizontal: -10,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderTopColor: '#888888',
        marginTop: 24
    }
})