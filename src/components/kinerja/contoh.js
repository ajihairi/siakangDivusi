import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ListView
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
    Picker,
    Tab
} from 'native-base';
import ListAktivitasBawahan from './ListAktivitasBawahan';
import ListNamaBawahan from './ListNamaBawahan';
import ListHariBawahan from './ListHariBawahan';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import SegmentedControlTab from 'react-native-segmented-control-tab'

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ExampleMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            selectedIndices: [0],
            customStyleIndex: 0,
            data: ds
        }
    }

    getData() {
        return fetch('https://si-akang-dev.divusi.com/api/subordinate_list?subordinate=68&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE1NTQ0MjksImV4cCI6MTUzMzA5MDQyOSwibmJmIjoxNTAxNTU0NDI5LCJqdGkiOiJJNU9lMzM1Qjdpc2l4VFhXIn0.Vj5UKw092wECQexQqVO49aqSjXg2Sf6xH9IEQbwaIdk')
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


    handleSingleIndexSelect = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    handleMultipleIndexSelect = (index) => {
        if (this.state.selectedIndices.includes(index)) {
            this.setState({
                ...this.state,
                selectedIndices: this.state.selectedIndices.filter((i) => i !== index),
            });
        }
        else {
            this.setState({
                ...this.state,
                selectedIndices: [
                    ...this.state.selectedIndices,
                    index,
                ],
            });
        }
    }

    handleCustomIndexSelect = (index) => {
        this.setState({
            ...this.state,
            customStyleIndex: index,
        });
    }

     onValueChange(value) {
    this.setState({
      selected1: value
    });
    return(
        <Item label={this.state.data.daftar_bawahan.nama_karyawan} value={this.state.data.daftar_bawahan.nama_karyawan} />
    );
  }

    renderRowHari(library) {
        return (
            <ListHariBawahan library={library} />
        )
    }
    renderRowHari(library) {
        return (
            <Item label={this.props.library.nama_karyawan} value={nama_karyawan} />
        )
    }

    render() {
        return (
            <Content style={{ backgroundColor: '#f4f4f4', marginLeft: 10, marginRight: 10 }}>
                <Picker
              iosHeader="Select one"
              mode="dropdown"
              placeholder="Nama Bawahan"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            > 
            </Picker>
                <View>
                    <View>
                        <DatePicker block
                            style={{ marginTop: 10, width: 363 }}
                            date={this.state.date1}
                            placeholder="Tanggal Mulai"
                            mode="date"
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
                                }
                            }
                            }
                            onDateChange={(date1) => { this.setState({ date1: date1 }) }}
                        />
                    </View>
                    <View>
                        <DatePicker block
                            style={{ marginTop: 10, width: 363 }}
                            date={this.state.date1}
                            placeholder="Tanggal Selesai"
                            mode="date"
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
                                }
                            }
                            }
                            onDateChange={(date1) => { this.setState({ date1: date1 }) }}
                        />
                    </View>
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
                    {/*{this.state.customStyleIndex === 0 &&
                        <ListView
                            dataSource={this.state.data}
                            renderRow={this.renderRowHari}
                        />}
                    {this.state.customStyleIndex === 1 &&
                        <ListView
                            dataSource={this.state.data}
                            renderRow={this.renderRowAktivitas}
                        />}*/}
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



export default ExampleMain