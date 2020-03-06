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

import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconFon from 'react-native-vector-icons/Fontisto';
import { width, height } from 'react-native-dimension';

class Home extends Component{
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
                            <Text style={styles.sectionTitle}>ZERO RENDEZVOUS</Text>
                            <Text style={styles.sectionDescription}>
                            Capitalize on your shopping and saving savvy to pay off your student loan debt!
                            </Text>
                            <Image
                            style={styles.sectionLogo}
                            source={require('../../assets/logo.png')}
                            />
                            <Text style={styles.sectionInfo}>
                            Living guilt-free from the 1st till the 31st!
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.signUp}
                            onPress={ () => this.props.navigation.navigate('SignUpScreen') }
                        >
                            <IconEvil
                                name={"envelope"}
                                color='#000'
                                size={58}
                            />
                            <Text style={styles.buttonSignUp}> Sign up with email </Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.sectionSignIn}>
                                Already have an account? 
                            </Text>
                            <TouchableOpacity 
                              onPress={ () => this.props.navigation.navigate('SignInScreen') }
                            >
                              <Text style={styles.sectionSignInBold}>
                                  Sign in.
                              </Text>
                            </TouchableOpacity>
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
    marginTop: 81,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Avenir Heavy',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  sectionLogo: {
    width: 250, 
    height: 250,
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  signUp: {
    width: '100%',
    alignItems: 'center',
    backgroundColor:'#FFD34F',
    marginTop: 40,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonSignUp: {
    fontWeight: "bold",
    fontSize: 20
  },
  sectionSignIn: {
    fontSize: 19,
    textAlign: 'center',
    paddingTop: 27,
    paddingBottom: 40,
  },
  sectionSignInBold: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 27,
    paddingLeft: 5,
    textDecorationLine: 'underline',
  }
});

export default Home;
