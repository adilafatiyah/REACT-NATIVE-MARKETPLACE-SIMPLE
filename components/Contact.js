import React, {Component} from 'react';
import {Alert, Image, ImageBackground, FlatList, TouchableOpacity} from  'react-native';
import { Container, Thumbnail,Fab, Title, Header,Icon, Left, Right, Label,Form, Item, Input,Content, Card, CardItem, Body, Text, Button, FooterTab} from 'native-base';
import NavbarStyles from "./styless/navbarstyles";
import form from "./styless/form";
import button from "./styless/button";

const color2 = require("../image/color2.jpg");
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("finaltodo.db");

export default class Contact extends React.Component {
    state = {
        todo : [] 
    }  
    static navigationOptions = {
        title: 'Contact',
      };
 
      constructor(){
          super();
            db.transaction(tx => {
                tx.executeSql(
                'select * from AddUser',
                null,
                (_, { rows: { _array } }) => this.setState({ todo: _array })
                );
            });
            this.state = {
                active: false
              };
    }
  render() {
    return (
        <Container style={{flex:1}}>
        <Content>
        <FlatList
             data={this.state.todo}
             renderItem={({item}) =>{
               return (
                 <TouchableOpacity key={item.id} style={{height:40}}>
                   <Text 
                   onPress={() => this.props.navigation.navigate('',
                   {
                       id:item.id,
                       nama : item.nama,
                       hp : item.hp,
                       ttd : item.ttd,
                       jk: item.jk
                       
                    }
                   )
                }
                    style={{fontSize:20}}>{item.nama} {item.hp} {item.ttd} {item.jk}</Text>
                 </TouchableOpacity>
               );
             }} 
             keyExtractor={item => item.nama}/>
      </Content>
      <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5F9EA0' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="menu" />
            <Button style={{ backgroundColor: '#20B2AA' }}
                    onPress={() => this.props.navigation.navigate('InputProfileScreen')}>
              <Icon name="add" />
            </Button>
          </Fab>
      </Container>
    );
  }
}
