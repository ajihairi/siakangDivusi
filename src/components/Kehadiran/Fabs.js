import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Fabs extends Component {
  
  constructor() {
    super();
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Fab
           active={this.state.active}
         direction="up"
        style={{ backgroundColor: 'dodgerblue'}}
         position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
         <Icon name="add" />
         <Button 
          primary transparent 
        onPress={()=>Actions.keyPengajuanCuti()} style={{ backgroundColor:"#34A34F"}}>
             <Icon name="calendar" style={{color:'white'}} />
          </Button>
         <Button 
            primary transparent
         onPress={()=>Actions.keyPenugasanLembur()} style={{ backgroundColor:"gray"}}>
          <Icon name="clock" style={{color:'white'}} />
          </Button>
         </Fab>
        </View>
      </Container>
    );
  }
}
export default Fabs;