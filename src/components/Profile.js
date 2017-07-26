import React,{Component} from 'react';
import { View, Image} from 'react-native';
import { Container, Content, H1, ListItem, List, Body, Text, Button} from 'native-base';


import {Actions} from 'react-native-router-flux';
const Profile =()=>{

  return(
    <Container style={styles.splashScreens}>
      <Content>
        <List>
          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> Nama </Text>
            <Text note> Mohamad Hamzhya Salsatinnov Hairy</Text>
            </Body>
          </ListItem>

          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> NIK </Text>
            <Text note> 151511017</Text>
            </Body>
          </ListItem>

          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> Tempat, Tanggal Lahir </Text>
            <Text note> Bandung, 5 Mei 1997 </Text>
            </Body>
          </ListItem>

          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> Alamat </Text>
            <Text note> Bumi Abdi Praja, Subang</Text>
            </Body>
          </ListItem>

          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> Departement </Text>
            <Text note> Product</Text>
            </Body>
          </ListItem>

          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> Posisi </Text>
            <Text note> VP Product</Text>
            </Body>
          </ListItem>

          <ListItem first style={{marginRight:10}}>
            <Body>
            <Text> No. Pin </Text>
            <Text note> 1234</Text>
            </Body>
          </ListItem>
          <Button block success style={{margin:10}} onPress={()=> Actions.keyGantiPassword()}>
            <Text>Ganti Password</Text>
            </Button>
        </List>
      </Content>
    </Container>

  );
}

const styles ={
  splashScreens:{
    backgroundColor: 'white'
  },
  textStyles:{
    fontStyle: 'italic'
  },
  imgStyle:{
    width: 355.2,
    height:222.8
  }

}

export default Profile;
