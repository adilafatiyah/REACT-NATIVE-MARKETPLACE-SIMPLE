const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import {StyleSheet} from 'react-native';

export default NavbarStyles =StyleSheet.create({
    LogoContainer:{
        width:'100%',
        height: 60,
    },
    Logo:{
        right: Platform.OS === "android" ? 10 : 12.5,
        top: Platform.OS === "android" ? 8 : 15,
        width:100,
        height:60,
    },
    LogoIos:{
        position: "absolute",
        right: Platform.OS === "ios" ? 10 : 12.5,
        top: Platform.OS === "ios" ? 8.5 : 15,
        width:100,
        height:60,
    },
    TextLeft:{
        fontSize:14,
        left: Platform.OS === "android" ? 10 : 12.5,
        top: Platform.OS === "android" ? 8 : 15,
    },
    ButtonNavbar:{
        marginTop:10,
    }
})