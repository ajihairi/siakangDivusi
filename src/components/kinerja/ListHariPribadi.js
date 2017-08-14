import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    Left,
    H1,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

class ListHariPribadi extends Component {
    render() {
        const {
            tanggal,
            statusKehadiran,
            jamMasuk,
            jamKeluar,
            totalJam
        } = this.props.library;

        return (
            <Card>
                {statusKehadiran === 'Hadir' ? (
                    <CardItem style={styles.Hadir} >
                            
                                <Left style={{ height: 40 }}>
                                    <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                        {tanggal}
                                    </H1>
                                </Left>
                                <Left style={{ height: 30 }}>
                                    <Text style={{ color: 'white' }}>  {jamMasuk}   </Text>
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}>s/d </Text>)}
                                    <Text style={{ color: 'white' }}> {jamKeluar} </Text>
                                </Left>
                                <Left style={{ height: 30 }}>
                                    <Text style={{ color: 'white' }}>  {totalJam} </Text>
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                                </Left>
                           
                       
                                <Text>nama</Text>
                           
                    </CardItem>) : null}
                {statusKehadiran === 'Tidak Hadir' ? (
                    <CardItem style={styles.TidakHadir}>
                        <View rounded>
                            <View style={{ height: 40 }}>
                                <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>  {jamMasuk}   </Text>
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}>s/d </Text>)}
                                <Text style={{ color: 'white' }}> {jamKeluar} </Text>
                            </View>
                            <View style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>  {totalJam} </Text>
                                {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                            </View>
                        </View>
                    </CardItem>) : null}
                {statusKehadiran === 'Libur' ? (
                    <CardItem style={styles.Libur}>
                        <View rounded>
                            <View style={{ height: 40 }}>
                                <H1 style={{ color: 'white' }} onPress={() => Actions.detailpribadi({ tanggal: tanggal })}>
                                    {tanggal}
                                </H1>
                            </View>
                            <Item style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>  {jamMasuk}   </Text>
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}>s/d </Text>)}
                                <Text style={{ color: 'white' }}> {jamKeluar} </Text>
                            </Item>
                            <Item style={{ height: 30 }}>
                                <Text style={{ color: 'white' }}>  {totalJam} </Text>
                                {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}> Jam </Text>)}
                            </Item>
                        </View>
                    </CardItem>) : null}
            </Card>
        )
    }
}

const styles = {
    Hadir: {
        backgroundColor: '#1abc9c',

    },
    TidakHadir: {
        backgroundColor: '#e74c3c',
    },
    Libur: {
        backgroundColor: '#f39c12',
    },
}

export default ListHariPribadi;