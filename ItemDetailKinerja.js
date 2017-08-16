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
    Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ItemDetailKinerja extends Component {
    render() {
        let articles = this.props.data.map(function (articleData, index) {
            return (
                <View>
                    <Form>
                        <Item stackedLabel>
                            <Label>Hari :</Label>
                            <Label>
                                <Text>{articleData.hari}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel>
                            <Label>Tanggal :</Label>
                            <Label>
                                <Text>{articleData.tanggal}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Masuk :</Label>
                            <Label>
                                <Text>{articleData.jamMasuk}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Jam Keluar :</Label>
                            <Label>
                                <Text>{articleData.jamKeluar}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Total Jam :</Label>
                            <Label>
                                <Text>{articleData.totalJam}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Kehadiran :</Label>
                            <Label>
                                <Text>{articleData.statusKehadiran}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Aktivitas</Label>
                            <Label>
                                <Text>{articleData.aktivitas}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Mood</Label>
                            <Label>
                                <Text>{articleData.mood}</Text>
                            </Label>
                            <Label />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Status Perjalanan Dinas</Label>
                            <Label>
                                <Text>{articleData.statusPerjalananDinas}</Text>
                            </Label>
                            <Label />
                        </Item>
                    </Form>
                </View>
            );
        });

        return (
            <Content>
                {articles}
            </Content>
        );
    }
}