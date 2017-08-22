import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Text,
    View,
    Footer,
    Body,
    Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ItemDetailBawahanLembur extends Component {
    render() {

         const {
           namaPekerjaan,
           tanggalPengajuan,
           pemberiPekerjaan,
           tanggal,
           hariKerja,
           status,
           anggotaLemburBawahan={nama,jamMulai,jamSelesai,detailPekerjaan}
        } = this.props.library;

            return (
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Nama Pegawai</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: </Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Departemen</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>:</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jabatan</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: </Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Tanggal</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {tanggal}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Proyek</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {namaPekerjaan}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Peserta Lembur</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {anggotaLemburBawahan.nama}</Text>
                            </View>
                        </View>
                    </View>
                    {status === 'Disetujui' ? ( 
                        <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                         <View>
                             <View>
                                 <Text>status</Text>
                             </View>
                             <View>
                                 <Text style={{marginLeft: 200, marginTop:-23}}>: {status}</Text>
                             </View>
                         </View>
                     </View> ) : null}
                     {status === 'Ditolak' ? ( 
                        <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                         <View>
                             <View>
                                 <Text>status</Text>
                             </View>
                             <View>
                                 <Text style={{marginLeft: 200, marginTop:-23}}>: {status}</Text>
                             </View>
                         </View>
                     </View> ) : null}
                     {status === 'Diajukan' ? ( 
                         <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
 
               <Button danger
                 style={{
                   width: 150,
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginRight: 4
                 }}
 
                 onPress={()=> Actions.persetujuan()}>
                 <Text> Tolak </Text>
               </Button>
 
               <Button primary style={{ width: 150, justifyContent: 'center', alignItems: 'center', marginLeft: 4 }}>
                 <Text> Setujui </Text>
               </Button>
 
             </View>
                     ) : null}
                </Form>
            );
    }
}