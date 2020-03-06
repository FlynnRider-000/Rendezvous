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
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import CustomFooter from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';
class ApplyLoan extends Component{
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
                      <View>
                        <View style={styles.sectionHeading}>
                          <Text style={styles.textHeading}>
                            We've found $44.07 in savings.
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.textDescription}>
                          Would you like the total amount of $44.07 to be deducted from your savings or checking account and held for future student loan payments?
                        </Text>
                      </View>
                      <View style={styles.buttonArea}>
                        <CustomButton text = "Total" type = "black"
                          pressEvt={ () => this.props.navigation.navigate('SavingTotalScreen') }
                        />
                        <CustomButton text = "Other amount" type = "blackOutline"
                          pressEvt={ () => this.props.navigation.navigate('LoanAmountInputScreen') }
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height(100) - 144,
  },
  sectionHeading: {
    marginTop: 100,
  },  
  textHeading: {
    fontSize: 26,
    textAlign: 'center',
  },
  textDescription: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  },
  buttonArea: {
    width: '100%',
  }
});

export default ApplyLoan;
