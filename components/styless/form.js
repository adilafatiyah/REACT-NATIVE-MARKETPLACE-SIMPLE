const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import {StyleSheet} from 'react-native';

export default form =StyleSheet.create({
    TextInput:{
        fontSize:13,
    },
    label : {
        fontSize:12,
        color:'#808080',
    },
    inputBox: {
        width:250,
        marginTop:7,
        backgroundColor:'#ffffff',
        color:'#008000',
        marginVertical: 10
        },
})