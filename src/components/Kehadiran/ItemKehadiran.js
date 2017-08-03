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
        let articles = this.props.data.map(function(articleData, index){
            return(
            <CardSection>
                <Content >
                    <Item style={{height:40}}>
                        <H1 onPress={() => Actions.keyDetailKehadiran()}>{articleData.tanggal}</H1>
                       <Right>
                          <View style={styles.Hadir} />
                        </Right>
                            
                        
                    </Item>
                        <Item style={{height:40}}>
                            
                            <Text>  {articleData.jamMasuk}   </Text>
                            <Text>s/d </Text>
                       <Text> {articleData.jamKeluar} </Text>
                   <Right>
                       <View style={styles.Hadir} />
                        </Right>
                     </Item>
         
                </Content>

            </CardSection>
        )
    });
return(
            <Content>
                {articles}
            </Content>
        );
    }
}

const styles ={
  Hadir:{
     width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  TidakHadir:{
     width: 100,
    height: 100,
    backgroundColor: 'red'
  },
Cuti:{
     width: 100,
    height: 100,
    backgroundColor: 'purple'
  },
Libur:{
     width: 100,
    height: 100,
    backgroundColor: 'yellow'
  },
PerjalananDinas:{
     width: 100,
    height: 100,
    backgroundColor: 'black'
  },
}

export default ItemKehadiran;
