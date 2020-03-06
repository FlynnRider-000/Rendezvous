/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

class CustomButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            curValue: "",
            expanded: false
        };
    }
    static defaultProps = {
        custyle: {
            fontSize: 12,
            padding: 0,
        }
    }
    buttonComponentStyle = (type) => {
        switch(type){
            case 'yellow':
                return {
                    backgroundColor: '#FFD34F',
                };
            case 'smallYellow':
                return {
                    backgroundColor: '#FFD34F',
                    paddingTop: 7,
                    paddingBottom: 7,
                };
            case 'disabledYellow':
                return {
                    backgroundColor: 'rgba(rgba(255,206,56,0.4)',
                };
            case 'grey':
                return {
                    backgroundColor: '#4A4A4A',
                };
            case 'black':
                return {
                    backgroundColor:'#000',
                };
            case 'blackOutline':
                return {
                    backgroundColor:'#fff',
                    borderWidth: 1,
                }
        }
    }
    buttonTextStyle = (type) => {
        switch(type){
            case 'yellow':
            case 'grey':
            case 'black':
            case 'disabledYellow':
                return {
                    color: '#fff',
                };
            case 'smallYellow':
                return {
                    color: '#fff',
                    fontSize:18
                };
            case 'blackOutline':
            default:
                return {
                    color:'#000',
                };
        }
    }
    render(){       
        return (
            <TouchableOpacity onPress = {this.props.pressEvt}>
                <View style={{
                    ...styles.buttonComponent,
                    ...this.buttonComponentStyle(this.props.type),
                }}>
                    <Text style={{
                        ...styles.buttonText,
                        ...this.buttonTextStyle(this.props.type),
                    }}> 
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    buttonComponent:{
        width: '100%',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default CustomButton;
