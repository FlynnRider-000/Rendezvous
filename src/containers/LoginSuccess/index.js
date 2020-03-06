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
} from 'react-native';

import CustomButton from '../../components/CustomButton';
import { width, height } from 'react-native-dimension';

class LoginSuccess extends Component{
    static navigationOptions = ({navigation}) => {
      return {
        headerShown: false // Will hide header for HomePage
    }}
    render(){
        return (
            <>
                
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                          <Text style={styles.sectionTitle}>SUCCESS</Text>
                          <Text style={styles.sectionDescription}>
                            Check your email for confirmation and tips on how to get the most out of the app.
                          </Text>
                          <Image
                            style={styles.sectionLogo}
                            source={require('../../assets/logo.png')}
                          />
                          <Text style={styles.sectionDescription2}>
                            Continue to complete your profile and begin paying off debt today!
                          </Text>
                        </View>
                        <View style={styles.buttonArea}>
                          <CustomButton type = "yellow" text="Continue" pressEvt={ () => this.props.navigation.navigate('GuideScreen') }/>
                        </View>
                    </View>
                </ScrollView>
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
    alignItems: 'center',
    marginLeft: 32,
    marginRight: 32,
  },
  sectionContainer: {
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Avenir Heavy',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    paddingLeft: 30,
    paddingRight: 30,
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  },
  sectionDescription2: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  sectionLogo: {
    width: 220, 
    height: 220,
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionInfo: {
    marginTop: 25,
    fontSize: 22,
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  continueBtn: {
    width: '100%',
    alignItems: 'center',
    backgroundColor:'#FFD34F',
    marginTop: 40,
    marginBottom: 40,
    padding: 12,  
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContinue: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#fff',
  },
  buttonArea: {
    width: '100%',
    marginTop: 50,
  }
});

export default LoginSuccess;
