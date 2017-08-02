import React, { Component } from 'react';
import {
    Item,
    Container,
    Content,
    Right,
    Body,
    Label,
    Text
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';
import * as lemburactions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableWithoutFeedback, View } from 'react-native';
import DetailLemburDriver from './DetailLemburDriver';

class ItemLemburDriver extends Component {
    renderDiscription() {
        const {library, selectLibraryId} = this.props;

        if (library.id_lembur === selectLibraryId){
            return(
                <DetailLemburDriver 
                    library={library}
                />
            );
        }
    }
    render() {
        const {  
            id_lembur,
            namaPekerjaan,
            Pemograman,
            tanggal,
            jenisLembur,
            jamMulai,
            jamSelesai,
            hasilKerja,
            statusPembayaran 
        } = this.props.library;

        return(
      
            
            <Content>
                <CardSection>
                    <View>
                <TouchableWithoutFeedback
                style = {{backgroundColor: 'red'}}
                renderDiscription={this.renderDiscription} 
                onPress={() => this.props.actions.selectLibrary(id_lembur)}         
                            
            >
                <Item>    
                            <Item>
                                <Body>
                                    <Label>
                                    {tanggal}
                                    </Label>
                                </Body>
                            </Item>
                            <Item>
                                <Text> {jamMulai}</Text>
                                <Text> - {jamSelesai}</Text>
                                <Body>
                                    <Text> {jenisLembur}</Text>
                                </Body>
                                <Right>
                                    <Text> {statusPembayaran}</Text>
                                </Right>
                            </Item>
                                                       
                </Item>
                
                </TouchableWithoutFeedback>
                </View>
                </CardSection>
                </Content>
            
        
        );
    }
}

const mapStateToProps= state => {
    return { selectLibraryId: state.selectLibraryId };
}
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(lemburactions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLemburDriver);