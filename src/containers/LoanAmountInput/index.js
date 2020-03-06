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

class LoanAmountInput extends Component{
    static navigationOptions = ({navigation}) => {
      return {
        title: "Savings",
        headerLeft: () => (
          <TouchableOpacity onPress = {_ => navigation.goBack()}>
              <IconEvil name={"user"} size={40} style = {{paddingLeft: 25}}/>
          </TouchableOpacity>
      ),
      headerRight: () => (
          <TouchableOpacity onPress = {_ => navigation.goBack()}>
              <IconFon name={"bell"} size={25} style = {{paddingRight: 25}}/>
          </TouchableOpacity>
      ),
      headerTitleStyle: {
          width: width(100) - 150,
          fontSize: 20,
          textAlign: 'center'
      },
      }
    };
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
                          Other amount:
                        </Text>
                        <View style = {styles.inputArea}>
                          <Text style = {styles.dollarIcon}>
                            $
                          </Text>
                          <TextInput style = {styles.textInput}>
                          </TextInput>
                        </View>
                      </View>
                      <View style={styles.buttonArea}>
                        <CustomButton text = "Continue" type = "black"
                          pressEvt={ () => this.props.navigation.navigate('SavingOtherAmountScreen') }       
                        />
                        <CustomButton text = "Go back" type = "blackOutline"
                          pressEvt={ () => this.props.navigation.navigate('ApplyLoanScreen') }       
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
    fontSize: 20,
    padding: 4,
  },
  inputArea: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  dollarIcon: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    width: 40,
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

export default LoanAmountInput;
