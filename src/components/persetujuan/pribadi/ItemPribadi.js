import React, { Component } from 'react';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Card,
    CardItem,
    Text,
    H3,
    Icon
} from 'native-base';
import { CardSection } from '../../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableWithoutFeedback } from 'react-native';

class ItemPribadi extends Component {

    render() {
        const {
            jenisPengajuan,
            tanggalPengajuan,
            status,
            start_date,
            end_date

        } = this.props.library;

        return (
            <Card>
                <CardItem>
                    <Body>
                        <Item>

                            {jenisPengajuan === 'Izin\/Cuti\/Sakit' ? (<H3 onPress={() => Actions.DetailPribadiCuti({ start_date: start_date, end_date: end_date })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Koreksi' ? (<H3 onPress={() => Actions.DetailPribadiKoreksi({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Remote' ? (<H3 onPress={() => Actions.DetailPribadiRemote({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Lembur' ? (<H3 onPress={() => Actions.DetailPribadiLembur({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Lembur Driver' ? (<H3 onPress={() => Actions.DetailPribadiDriver({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Izin Keluar Kantor' ? (<H3 onPress={() => Actions.DetailPribadiIzin({ tanggalPengajuan: tanggalPengajuan })}> {jenisPengajuan}</H3>) : null}
                            {jenisPengajuan === 'Klaim Lembur' ? (<H3  > {jenisPengajuan}</H3>) : null}
                        </Item>
                        <Item>
                            <Text> {tanggalPengajuan}</Text>
                            <Text>    s/d   </Text>
                            <Text> {tanggalPengajuan}</Text>
                            <Right>
                                {status === 'Disetujui' ? (<Icon name='ios-checkmark-circle-outline' />) : null}
                                {status === 'Diajukan' ? (<Icon name='ios-remove-circle-outline' />) : null}
                                {status === 'Ditolak' ? (<Icon name='i' />) : null}
                            </Right>
                        </Item>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default ItemPribadi;