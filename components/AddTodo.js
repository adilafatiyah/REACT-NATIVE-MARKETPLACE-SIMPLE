import React, {Component} from 'react';
import {Alert, Image, ImageBackground} from  'react-native';
import { Container, Thumbnail, Title, Header,Icon, Left, Right, Label,Form, Item, Input,Content, Card, CardItem, Body, Text, Button, FooterTab} from 'native-base';
import NavbarStyles from "./styless/navbarstyles";
import form from "./styless/form";
import button from "./styless/button";
const color2 = require("../image/color2.jpg");

export default class AddTodo extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground source={color2} style={NavbarStyles.LogoContainer}>
          <Header style={{
            backgroundColor: 'transparent', 
            elevation: 0,            
            shadowOpacity: 0         
            }}>
          </Header>
        </ImageBackground>

        <Form>
          <Item>
            <Icon active name='person'/>
            <Input style={FormStyles.TextInput}/>
          </Item>
          <Item>
            <Icon active name='list'/>
            <Input style={FormStyles.TextInput}/>
          </Item>
          <Item>
            <Icon active name='link'/>
            <Input style={FormStyles.TextInput}/>
          </Item>
          <Button full dark
                  style={ButtonStyles.ButtonFull}>
            <Text style={TextStyles.TextButton}>Simpan Profile</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
