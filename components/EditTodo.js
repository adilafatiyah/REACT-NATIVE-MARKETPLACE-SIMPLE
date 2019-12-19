import React, {Component} from 'react';
import {Alert, Image, ImageBackground} from  'react-native';
import { Container, Thumbnail, Title, Header,Icon, Left, Right, Label,Form, Item, Input,Content, Card, CardItem, Body, Text, Button, FooterTab} from 'native-base';
import NavbarStyles from "./styless/navbarstyles";
import form from "./styless/form";
import button from "./styless/button";
const color2 = require("../image/color2.jpg");

export default class EditTodo extends React.Component {
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
      </Container>
    );
  }
}
