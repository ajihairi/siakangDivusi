import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Text,
    Left,
    H1,
    Card,
    CardItem,
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';


class ItemKehadiran extends Component {
    render() {
        const {
           hari,
            tanggal,
            jamMasuk,
            jamKeluar,
            totalJam,
            status,
            overtimeStatus
        } = this.props.library;
       
        return (
            <Card>
                {status === 'Hadir' ? (
                    <CardItem style={styles.Hadir} >
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ paddingTop: 5, color: 'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal}
                                </H1>

                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 5, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'white' }}>  {jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                    {jamKeluar} </Text>
                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 10, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'white' }}>  {totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
                                </Text>
                            </View>
                        </View>
                        {overtimeStatus === null ? (<Right><Image source={require('../../img/icons/check_white.png')} style={styles.imageStyle} /></Right>) :(<Right><Image source={require('../../img/icons/check_notif_white.png')} style={styles.imageStyle} /></Right>) }

                    </CardItem>) : null}
                {status === 'Tidak Hadir' ? (
                    <CardItem style={styles.TidakHadir}>
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ paddingTop: 5, color: 'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal}
                                </H1>
                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 5, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'white' }}>  {jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                    {jamKeluar} </Text>


                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 10, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'white' }}>  {totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
                                </Text>
                            </View>
                        </View>
                        {overtimeStatus === null ? (<Right><Image source={require('../../img/icons/cross_white.png')} style={styles.imageStyle} /></Right>) :
                        (<Right><Image source={require('../../img/icons/cross_notif_white.png')} style={styles.imageStyle} /></Right>) }
                    </CardItem>) : null}
                {status === 'Libur' ? (
                    <CardItem style={styles.Libur}>
                        <View>
                        <View style={{ height: 40 }}>
                            <H1 style={{ paddingTop: 5, color: 'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal}
                            </H1>
                        </View>
                        <View style={{ paddingLeft: 5, paddingBottom: 5, paddingRight: 5, paddingTop: 5, height: 30 }}>
                            <Text style={{ color: 'white' }}>  {jamMasuk}
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }}> s/d </Text>)}
                                {jamKeluar} </Text>
                        </View>
                        <View style={{ paddingLeft: 5, paddingBottom: 10, paddingRight: 5, paddingTop: 5, height: 30 }}>
                            <Text style={{ color: 'white' }}>  {totalJam}
                                {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
                            </Text>
                        </View>
                        </View>
                        {overtimeStatus === null ? (<Right><Image source={require('../../img/icons/holiday_white.png')} style={styles.imageStyle} /></Right>) :
                        (<Right><Image source={require('../../img/icons/holiday_notif_white.png')} style={styles.imageStyle} /></Right>) }
                        

                    </CardItem>) : null}
                {status === 'Cuti' ? (
                    <CardItem style={styles.Cuti}>
                        <View>
                        <View style={{ height: 40 }}>
                            <H1 style={{ paddingTop: 5 }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal}
                            </H1>
                        </View>
                        <View style={{ paddingLeft: 5, paddingBottom: 5, paddingRight: 5, paddingTop: 5, height: 30 }}>
                            <Text>  {jamMasuk}
                                {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text > s/d </Text>)}
                                {jamKeluar} </Text>
                        </View>
                        <View style={{ paddingLeft: 5, paddingBottom: 10, paddingRight: 5, paddingTop: 5, height: 30 }}>
                            <Text >  {totalJam}
                                {(totalJam === null) ? (<Text />) : (<Text></Text>)}
                            </Text>
                        </View>
                        </View>
                        {overtimeStatus === null ? (<Right><Image source={require('../../img/icons/suitcase_black.png')} style={styles.imageStyle} /></Right>) :
                        (<Right><Image source={require('../../img/icons/suitcase_notif_black.png')} style={styles.imageStyle} /></Right>) }
                        

                    </CardItem>) : null}
                {status === 'Perjalanan Dinas' ? (
                    <CardItem style={styles.PerjalananDinas}>
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ paddingTop: 5,color:'white' }} onPress={() => Actions.keyDetailKehadiran({ tanggal: tanggal })}>  {tanggal}
                                </H1>
                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 5, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'white' }}>  {jamMasuk}
                                    {(jamMasuk === null && jamKeluar === null) ? (<Text />) : (<Text style={{ color: 'white' }} > s/d </Text>)}
                                    {jamKeluar} </Text>
                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 10, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'white' }} >  {totalJam}
                                    {(totalJam === null) ? (<Text />) : (<Text style={{ color: 'white' }}></Text>)}
                                </Text>
                            </View>
                        </View>
                        <Right>
                        {overtimeStatus === null ? (<Right><Image source={require('../../img/icons/car_white.png')} style={styles.imageStyle} /></Right>) :
                        (<Right><Image source={require('../../img/icons/car_notif_white.png')} style={styles.imageStyle} /></Right>) }
                           
                        </Right>

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
    Cuti: {
        backgroundColor: 'white',
    },
    PerjalananDinas: {
        backgroundColor: '#2980b9',
    },
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
}

export default ItemKehadiran;
