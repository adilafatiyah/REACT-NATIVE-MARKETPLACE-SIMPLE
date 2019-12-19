import React, {Component} from 'react';
import {Alert, Image, ImageBackground, ScrollView} from  'react-native';
import { Container, Fab, Thumbnail, Title, Header,Icon, Left, Right, Label,Form, Item, Input,Content, Card, CardItem, Body, Text, Button, FooterTab} from 'native-base';
const color2 = require("../image/color2.jpg");
import NavbarStyles from "./styless/navbarstyles";
import form from "./styless/form";
import button from "./styless/button";

export default class ListTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  static navigationOptions = {
      title: 'Home'
  }

  render() {
    return (
      <Container>
        <ScrollView>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={color2} />
                <Body>
                  <Text>Makan Nasi</Text>
                  <Text note>Di warung mba rub</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={color2} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="trash" />
                  <Text>Hapus</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Text>Edit</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5F9EA0' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
            >
            <Icon name="menu" />
            <Button style={{ backgroundColor: '#20B2AA' }}
              onPress={() => this.props.navigation.navigate('ContactScreen')}>
            <Icon name="person" />
            </Button>

            <Button  style={{ backgroundColor: '#DD5144' }}
              onPress={() => this.props.navigation.navigate('AddScreen')}>
              <Icon name="add" />
            </Button>

        </Fab>
      </Container>
    );
  }
}
