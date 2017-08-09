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
        const {
           hari,
           tanggal,
           jamMasuk,
           jamKeluar,
           totalJam,
           status
        } = this.props.library;
        
          return(
            <CardSection>
                <Content >
                    <Item style={{height:40}}>
                        <H1 onPress={() => Actions.keyDetailKehadiran({tanggal:tanggal})}>{tanggal}</H1>
                       <Right>
                          {status === 'Hadir'? (<View style={styles.Hadir} />) : null}
                        {status === 'Tidak Hadir'? (<View style={styles.TidakHadir} />) : null} 
                       {status === 'Libur'? (<View style={styles.Libur} />) : null} 
                        </Right>
                    </Item>
                        <Item style={{height:40}}>
                            
                            <Text>  {jamMasuk}   </Text>
                            {(jamMasuk===null && jamKeluar===null) ?(<Text />):(<Text>s/d </Text>)}
                       <Text> {jamKeluar} </Text>
                   <Right>
                       {status === 'Hadir'? (<View style={styles.Hadir} />):null}
                          {status === 'Tidak Hadir'? (<View style={styles.TidakHadir} />) : null} 
                       {status === 'Libur'? (<View style={styles.Libur} />) : null} 
                        </Right> 
                     </Item>
         
                </Content>

            </CardSection>
        )
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
    backgroundColor: 'white'
  },
Libur:{
     width: 100,
    height: 100,
    backgroundColor: 'yellow'
  },
PerjalananDinas:{
     width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
}

export default ItemKehadiran;
