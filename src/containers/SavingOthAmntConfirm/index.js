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
  Image,
  TouchableOpacity
} from 'react-native';
import CustomFooter from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';
import { TextInput } from 'react-native-gesture-handler';

class SavingOthAmntConfirm extends Component{
    render(){
      
        return (
            <>
              <View style={{flex: 1}}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                      <View style={styles.contentArea}>
                        <Text style={styles.textNote}>
                          $ 10.00
                        </Text>
                        <Text style={styles.textNote1}>
                          will be deducted from your Savings/Checking account and saved for you for upcoming student loan payments
                        </Text>
                      </View>
                      <View style={styles.buttonArea}>
                        <CustomButton text = "Continue" type = "black"
                          pressEvt={ () => this.props.navigation.navigate('CongratulationScreen') }
                        />
                        <CustomButton text = "Go back" type = "blackOutline"
                          pressEvt={ () => this.props.navigation.navigate('SavingOtherAmntDueScreen') }
                        />
                      </View>
                    </View>
                </ScrollView>
                <CustomFooter index = {3} navigation = {this.props.navigation}/>
              </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
    marginLeft: 32,
    marginRight: 32,
  },
  contentArea: {
    height: height(100) - 305,
    justifyContent: 'center',
  },
  textNote:{
    fontSize: 28,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  textNote1:{
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  textInput: {
    fontSize: 18,
    width: width(100) - 110,
  },
  buttonArea: {
    width: '100%',
  },
  sectionLogo: {
    width: 220,
    height: 220,
  },
});

export default SavingOthAmntConfirm;
