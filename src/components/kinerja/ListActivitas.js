import React, { Component } from 'react';
import { 
    Container,
    Content,
    List,
    ListItem,
    Text,
    Label,
    Item
 } from 'native-base';

export default class ListActivitas extends Component {
    render() {
        var activitas = ['Activitas 1','Activitas 2',
        'Activitas 3','Activitas 4','Activitas 5'];

        return (
            <Container>
                <Content>
                    <List dataArray={activitas} block
                        renderRow={(item) =>
                        <ListItem avatar>
                            <Item>
                                <Text>{item}</Text>
                            </Item>
                            <Item>
                                <Text note>Aktivitas bla bla bla</Text>
                            </Item>
                        </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}

module.export = ListActivitas;