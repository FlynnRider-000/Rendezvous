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
import ComboBox from '../../components/ComboBox';
import { width, height } from 'react-native-dimension';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';

class Congratulation extends Component{
    static navigationOptions = ({navigation}) => {
      return {
        headerShown: false // Will hide header for HomePage
    }}
    render(){
      
        return (
            <>
              <View style={{flex: 1}}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                      <View>
                        <Text style={styles.textHeading}>
                          CONGRATULATIONS!
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.textNote}>
                          You’re $44.07 closer to reaching your financial goals!
                        </Text>
                      </View>
                      <View>
                        <Image
                          style={styles.sectionLogo}
                          source={require('../../assets/logo.png')}
                          />
                      </View>
                      <View style={styles.sectionNote1}>
                        <Text style={styles.textNote1}>
                          Amount remaining: $12,495
                        </Text>
                      </View>
                      <View style={styles.buttonArea}>
                        <CustomButton text = "Continue" type = "yellow"
                          pressEvt={ () => this.props.navigation.navigate('DashboardScreen') }
                        />
                        <CustomButton text = "Back to sign-in" type = "blackOutline"
                          pressEvt={ () => this.props.navigation.navigate('SignInScreen') }
                        />
                      </View>
                    </View>
                </ScrollView>
                <CustomFooter index = {0} navigation = {this.props.navigation}/>
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
  noteIcon: {
    padding: 5,
  },
  textHeading: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textNote:{
    fontSize: 14,
    padding: 4,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
  },
  textNote1:{
    fontSize: 13,
    textAlign: 'center',
  },
  buttonArea: {
    width: '100%',
  },
  sectionLogo: {
    width: 220,
    height: 220,
  },
});

export default Congratulation;
