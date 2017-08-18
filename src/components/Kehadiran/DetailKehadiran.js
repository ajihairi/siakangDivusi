import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
    Container, 
    Item, 
    Icon, 
    Input, 
    Button, 
    Content, 
    List, 
    ListItem, 
    Text, 
    Right, 
    Left,
    Body,
    Fab,
    Header
} from 'native-base';
import ItemDetailKehadiran from './ItemDetailKehadiran';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class DetailKehadiran extends Component {
     constructor() {
      super()
      this.state = {
        selected1: "key1",
        selected2: "keya",
        data:ds
      }
    }

    getData(){
        
        return fetch('https://si-akang-dev.divusi.com/api/home/detail_attendance?tanggal='+this.props.tanggal+'&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXBsb3llZV9pZCI6NjgsInVzZXJuYW1lX3Nlc3MiOiJpdmFubnVncmFoYSIsIm5hbWVfc2VzcyI6Ikl2YW4gTnVncmFoYSIsInJvbGVfbmFtZV9zZXNzIjoiS2FyeWF3YW4iLCJlbXBsb3llZV9uYW1lX3Nlc3MiOiJJdmFuIE51Z3JhaGEiLCJlbXBsb3llZV9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9pZF9zZXNzIjo2OCwiaXNfZHJpdmVyX3Nlc3MiOjAsInN1cGVydmlzb3JfbmFtZV9zZXNzIjoiSXZhbiBOdWdyYWhhIiwic3VwZXJ2aXNvcl9yb2xlX3Nlc3MiOiJWUCBQcm9kdWN0Iiwic3VwZXJ2aXNvcl9kZXBhcnRtZW50X3Nlc3MiOiJQcm9kdWN0IiwiY3JlZGl0cyI6MSwic3ViIjo2OCwiaXNzIjoiaHR0cHM6Ly93d3cubWFrYW5iYW5kdW5nLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE1MDE0OTEzNDEsImV4cCI6MTUzMzAyNzM0MSwibmJmIjoxNTAxNDkxMzQxLCJqdGkiOiJIVGVrME1Jem85ZmtyUHpSIn0.t4yuXtgxohsIkBo7MNa9bUZN7UhwSu7bmdKyoUmReqQ')
 .then((response) => response.json())
            .then((responseJson) => {
                
                this.setState({ 
                    data: ds.cloneWithRows(responseJson.data.detailKehadiran)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getData();
    }

    renderRow(library) {
        return (
          	    <ItemDetailKehadiran library={library} /> 
        )
    }

    render() {
        return (
            <Container>
                <Content>
                    <ListView 
                        dataSource={this.state.data} 
                        renderRow={this.renderRow}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = {
  SearchStyle: {
    marginTop: 10,
    paddingLeft: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  ButtonStyle: {
    marginTop: 5,
    alignItems: 'center',
    position: 'relative',
    marginBottom:5
  },
  TextStyle: {
    color:'#fff',
    position: 'relative',
  }
}

module.export = DetailKehadiran;