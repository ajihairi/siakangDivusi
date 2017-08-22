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
    CardItem,H3
} from 'native-base';
import { Actions } from 'react-native-router-flux';

class ItemPribadi extends Component {

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
                
                    <CardItem style={{backgroundColor:'white'}} >
                        <View>
                            <View style={{ height: 40 }}>
                            {jenisPengajuan === 'Izin\/Cuti\/Sakit' ? (<H3 onPress={() => Actions.DetailPribadiCuti({ start_date: start_date, end_date: end_date })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Koreksi' ? (<H3 onPress={() => Actions.DetailPribadiKoreksi({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Remote' ? (<H3 onPress={() => Actions.DetailPribadiRemote({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Lembur' ? (<H3 onPress={() => Actions.DetailPribadiLembur({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Lembur Driver' ? (<H3 onPress={() => Actions.DetailPribadiDriver({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Izin Keluar Kantor' ? (<H3 onPress={() => Actions.DetailPribadiIzin({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Klaim Lembur' ? (<H3  > {jenisPengajuan}</H3>) : null}

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
                            {status === 'Diproses' ? (<Image source={require('../../../img/icons/cross_black.png')} style={styles.imageStyle}/>) : null}
                          
                           </Right>

                    </CardItem>
               
            </Card>
        )
    }

}


const styles = {
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
}

export default ItemPribadi;