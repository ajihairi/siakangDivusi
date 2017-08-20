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

export default class ItemDetailBawahanIzin extends Component {
    render() {

       const {
           namaPegawai,
            jenisCuti,
            departemen,
            jabatan,
           alasan,
           catatanPersetujuan,
            tanggal,
            jenisIzin,
            status
        } = this.props.library;

            return (
                <Form style={{ marginLeft: 10 }}>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Nama</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {namaPegawai}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Departemen</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {departemen}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jabatan</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jabatan}</Text>
                            </View>
                        </View>
                    </View>
                    <View stackedLabel style={{ marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <View>
                                <Text>Jenis Izin</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 200, marginTop: -23 }}>: {jenisIzin}</Text>
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
                    <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                        <View>
                            <View>
                                <Text>Alasan</Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 200, marginTop:-23}}>: {alasan}</Text>
                            </View>
                        </View>
                    </View>
                    {status === 'Disetujui' ? ( 
                        <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                         <View>
                             <View>
                                 <Text>Catatan Persetujuan</Text>
                             </View>
                             <View>
                                 <Text style={{marginLeft: 200, marginTop:-23}}>: {catatanPersetujuan}</Text>
                             </View>
                         </View>
                     </View> ) : null}
                     {status === 'Ditolak' ? ( 
                        <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                         <View>
                             <View>
                                 <Text>Catatan Penolakan</Text>
                             </View>
                             <View>
                                 <Text style={{marginLeft: 200, marginTop:-23}}>: {catatanPersetujuan}</Text>
                             </View>
                         </View>
                     </View> ) : null}
                     {status === 'Diajukan' ? ( 
                        <View stackedLabel style={{marginTop: 10, marginBottom:10}}>
                         <View>
                             <View>
                                 <Text>Catatan Persetujuan / penolakan</Text>
                             </View>
                             <View>
               <Input placeholder='catatan persetujuan / penolakan' />
                             </View>
                         </View>
                         <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
 
               <Button danger
                 style={{
                   width: 150,
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginRight: 4
                 }}
 
                 onPress={() => this.props.navigation.goBack()}>
                 <Text> Tolak </Text>
               </Button>
 
               <Button primary style={{ width: 150, justifyContent: 'center', alignItems: 'center', marginLeft: 4 }}>
                 <Text> Setujui </Text>
               </Button>
 
             </View>
                     </View>
                     ) : null}
                </Form>
            );
    }
}