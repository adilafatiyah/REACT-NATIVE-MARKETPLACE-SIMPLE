import React, { Component } from 'react';
//1. Impor ini
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import ListTodo from './components/ListTodo';
import InputProfile from './components/InputProfile';
import Profile from './components/Profile';
import Contact from './components/Contact';
import * as SQLite from 'expo-sqlite';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
//2. Buat Navigator
const AppNavigator = createStackNavigator(
 {
 AddTodoScreen: {
   screen: AddTodo,
 },
 EditTodoScreen: {
   screen: EditTodo,
 },
 ListTodoScreen:{
   screen: ListTodo,
 },
 InputProfileScreen:{
   screen: InputProfile,
 },
 ProfileScreen:{
   screen: Profile,
 },
 ContactScreen:{
   screen: Contact
 }

},{
 initialRouteName : 'ListTodoScreen',
 defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
 
}); 
 
//3.Create App Container
const AppContainer = createAppContainer(AppNavigator);
const db = SQLite.openDatabase("finaltodo.db"); 

export default class App extends Component {
  constructor() {
    super();
      db.transaction(tx => {
      tx.executeSql(
        "create table if not exists AddUser (id INTEGER primary key not null, nama TEXT, hp int, ttd TEXT,jk text);"
      );
    });
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

 render() {
  if (!this.state.isReady) {
    return <AppLoading />;
  }
   return (
     <AppContainer />
   );
 }
}
 
