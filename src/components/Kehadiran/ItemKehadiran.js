import React, { Component } from 'react';
import {View} from 'react-native';
import {
    Item,
    Content,
    Right,
    Body,
    Label,
    Text,
    Left,
    H1,
} from 'native-base';
import { CardSection } from '../common';
import { Actions } from 'react-native-router-flux';


class ItemKehadiran extends Component {
    render() {
        return(
            <CardSection>
                <Content >
                    <Item style={{height:40}}>
                        <H1 onPress={() => Actions.keyDetailKehadiran()}> {this.props.library.Tanggal}</H1>
                        <Right> 
                       <View style={{backgroundColor:'red'}}>
                             <Text>                            </Text>  
                             </View> 
                        </Right>
                            
                        
                    </Item>
                        <Item style={{height:40}}>
                            <Text> {this.props.library.jamMulai} -- </Text>
                       <Text> {this.props.library.jamSelesai} </Text>
                        </Item>
                        
                </Content>

            </CardSection>
        );
    }
}

export default ItemKehadiran;