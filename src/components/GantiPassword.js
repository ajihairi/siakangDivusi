import React,{Component} from 'react';
import { View, Image} from 'react-native';
import { Container, Header, Title, Icon, Right, Left, Content, Form,Label, Input, Item, InputListItem, List, Body, Text, Button} from 'native-base';


const GantiPassword =()=>{

  return(
    <Container style={styles.splashScreens}>
    <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>Ganti Password LDAP</Title>
        </Body>
        <Right />
      </Header>

      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Old Password</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>New Password</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Confirm New Password</Label>
            <Input />
          </Item>
        </Form>
          <Button block primary style={{margin:10}}>
            <Text>Simpan</Text>
            </Button>
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

export default GantiPassword;
