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

import IconEnt from 'react-native-vector-icons/Entypo';
import { width, height } from 'react-native-dimension';
import { SolidIcons } from 'react-native-fontawesome';
import PropTypes from 'prop-types';

class Combo extends Component{
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
    componentDidMount(){
        this.setState({curValue:this.props.data[0]?this.props.data[0]:""});
    }
    render(){       
        var objects = [];
        var total = this.props.data.length;
        for(var i = 0 ; i < total; i++)
        {
            const data = this.props.data[i];
            objects.push(
                <TouchableOpacity onPress={() => this.setState({curValue: data,expanded: false})}>
                    <View>
                        <Text style = {data == this.state.curValue ? styles.activatedDataField:styles.dataField} key = {i}>{this.props.data[i]}
                        </Text>
                    </View>
                </TouchableOpacity>); 
        }
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({expanded:!this.state.expanded})}>
                    <View  style = {styles.editBoxContainer}>
                        <Text style = {{...styles.editBox, fontSize:this.props.custyle.fontSize, padding: this.props.custyle.padding}}>
                            {this.state.curValue}
                        </Text>
                        <IconEnt
                            name={"chevron-thin-down"}
                            size={13}
                        />
                    </View>
                </TouchableOpacity>
                <View style={this.state.expanded?styles.dataContainer:{}}>
                    {this.state.expanded && objects}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    editBoxContainer:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        padding: 6,
        paddingLeft: 20,
        width: '100%'
    },
    editBox: {
        fontSize: 12,
    },
    dataField: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        fontSize: 20,
        color: '#666',
    },
    activatedDataField: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        fontSize: 20,
        color: '#000',
    },
    dataContainer: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        borderTopWidth: 0,
    }
});

export default Combo;
