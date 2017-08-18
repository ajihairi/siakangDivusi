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
import { Actions } from 'react-native-router-flux';

class ItemBawahan extends Component {

    render() {
        const {
            jenisPengajuan,
            tanggalPengajuan,
            status,
            start_date,
            end_date,
            namaKaryawan,
            idKaryawan

        } = this.props.library;
        return (
            <Card>
                
                    <CardItem style={styles.Hadir} >
                        <View>
                            <View style={{ height: 40 }}>
                                <H1 style={{ paddingTop: 5, color: 'black' }} onPress={() => Actions.DetailPribadiCuti({ idKaryawan: idKaryawan })}>  {jenisPengajuan}
                                </H1>

                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 10, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'black' }}>  {namaKaryawan}
                                    {(namaKaryawan === null) ? (<Text />) : (<Text style={{ color: 'black' }}></Text>)}
                                </Text>
                            </View>
                            <View style={{ paddingLeft: 5, paddingBottom: 5, paddingRight: 5, paddingTop: 5, height: 30 }}>
                                <Text style={{ color: 'black' }}>  {tanggalPengajuan}
                                 </Text>
                            </View>
                        </View>
                        <Right>  
                            {status === 'Disetujui' ? (<Image source={require('../../../img/icons/check_black.png')} style={styles.imageStyle}/>) : null}
                            {status === 'Diajukan' ? (<Image source={require('../../../img/icons/paperplane_black.png')} style={styles.imageStyle}/>) : null}
                            {status === 'Ditolak' ? (<Image source={require('../../../img/icons/cross_black.png')} style={styles.imageStyle}/>) : null}
                           </Right>

                    </CardItem>
               
            </Card>
        )
    }

}


const styles = {
    Hadir: {
        backgroundColor: 'white',
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

export default ItemBawahan;