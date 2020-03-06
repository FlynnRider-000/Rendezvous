/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';

class Guide extends Component{
    
    render(){    
        var objects = [];
        var curIndex = this.props.current;
        for(var i = 0 ; i < this.props.count; i++)
            objects.push(<View style = {(curIndex - 1) == i  ? styles.itemActive :styles.item}></View>);
        return (
            <View style = {styles.container}>
                {objects}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 12,
        height: 12,
        borderRadius: 9999,
        backgroundColor: '#000',
        margin: 8,
    },
    itemActive: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        backgroundColor: '#FFCE38',
        margin: 8,
    }
});

export default Guide;
