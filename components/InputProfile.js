import React, {Component} from 'react';
import {Alert,StyleSheet,DatePickerAndroid, Image, ImageBackground} from  'react-native';
import { Container, Picker, Thumbnail, Title, Header,Icon, Left, Right, Label,Form, Item, Input,Content, Card, CardItem, Body, Text, Button, FooterTab} from 'native-base';
import NavbarStyles from "./styless/navbarstyles";
import form from "./styless/form";
import button from "./styless/button";
import * as SQLite from 'expo-sqlite';

const color2 = require("../image/color2.jpg");
const db = SQLite.openDatabase("finaltodo.db"); 
export default class InputProfile extends React.Component {
  static navigationOptions = {
    title: 'Add Contact'
}
  state = {
    nama:'',
    hp:'',
    ttd:'',
    jk:'',
    todo:[] //menampung hasil inputText
  }
  tambahuser = () => {
    db.transaction(
      tx => { 
        tx.executeSql("insert into AddUser (nama, hp, ttd, jk) values (?,?,?,?)", [this.state.nama,this.state.hp,this.state.ttd, this.state.jk]);
      },
      error => {
        alert(error);  
      },
      () => {  
        this.setState({nama:'',hp:'', ttd:'', jk:''})    
        //push load new screen
        this.props.navigation.push('ContactScreen')     
      }
    ); 
  }
  render() {
    return (
      <Container>
        <Form>
          <Item>
            <Icon active name='person'/>
            <Input  style={form.TextInput}
                    placeholder={"nama"}
                    value={this.state.nama}
                    onChangeText={(nama) => this.setState({nama})}/>
          </Item>
          <Item>
            <Icon active name='call'/>
            <Input  style={form.TextInput}
                    placeholder={"telephone"}
                    keyboardType = "phone-pad"
                    value={this.state.hp}
                    onChangeText={(hp) => this.setState({hp})}/>
          </Item>
          <Item>
            <Icon active name='heart'/>
            <Input  style={form.TextInput}
                    placeholder={"tanggal lahir"}
                    value={this.state.ttd}
                    onChangeText={(ttd) => this.setState({ttd})}/>
          </Item>
          
          <Item>
            <Label style={form.label}>Jenis Kelamin</Label>
            <Picker
                style={form.inputBox}
                selectedValue={this.state.jk}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({ jk: itemValue })}>
              <Picker.Item label ='Silahkan Pilih Jenis Kelamin'/>
              <Picker.Item label ='Pria' value ='pria' />
              <Picker.Item label ='Wanita' value ='wanita' />
            </Picker>
          </Item>
          <Button full dark
                  style={button.ButtonFull} onPress={this.tambahuser}>
            <Text>Simpan Profile</Text>
          </Button>

        </Form>
      </Container>
    );
  }
}
