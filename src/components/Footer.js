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
  View,
  TouchableOpacity
} from 'react-native';

import IconSim from 'react-native-vector-icons/SimpleLineIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/Fontisto';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            curIndex : this.props.index
        };
    }
    render(){    
        return (
            <View style = {styles.footer}>
                <TouchableOpacity 
                    onPress = {() => this.state.curIndex % 3 != 1 && this.state.curIndex < 3 ? this.props.navigation.navigate('EmailScanScreen'): ''} 
                    style={styles.footerItem}
                >
                    <IconIon
                        name={this.state.curIndex % 3 == 1 ? "ios-add-circle" : "ios-add-circle-outline"}
                        size={40}
                        color={'#FFE000'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}
                    onPress = {() => this.state.curIndex % 3 != 2  && this.state.curIndex < 3 ?this.props.navigation.navigate('DashboardScreen'): ''} 
                >
                {
                    this.state.curIndex % 3 == 2? 
                        <IconFont name ={"home"} size = {32} color={'#FFE000'}/>:
                        <IconSim name={"home"} size={34} color={'#FFE000'}/>    
                }
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}
                    onPress = {() => this.state.curIndex % 3 != 0 && this.state.curIndex < 3 ?this.props.navigation.navigate('SavingsScreen'):''} 
                >
                {
                    this.state.curIndex % 3 == 0?
                    <IconMat
                        name={"chart-bar"}
                        size={34}
                        color={'#FFE000'}
                    />:
                    <IconSim
                        name={"chart"}
                        size={34}
                        color={'#FFE000'}
                    />
                }  
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footer: {
        height: 64,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footerItem:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Footer;
