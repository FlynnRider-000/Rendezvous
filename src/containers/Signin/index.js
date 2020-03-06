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

import Icon from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

class SignIn extends Component{
    constructor(props){
      super(props);
      this.state = {
        inputNone: true,
      } 
    }
    static navigationOptions = ({navigation}) => {
      return {
        headerShown: false // Will hide header for HomePage
    }}
    onEmail = () => {
      this.setState({inputNone: false});
    }
    render(){
        return (
            <>
                
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Image
                              style={styles.sectionLogo}
                              source={require('../../assets/logo.png')}
                            />
                            <Text style={styles.sectionDescription}>
                              ZERO RENDEZVOUS
                            </Text>
                        </View>                   
                        <View style={styles.sectionRegister}>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Email address
                            </Text>
                            <View  style={styles.registerItem}>
                              <IconEvil
                                  name={"envelope"}
                                  size={38}
                                  style = {styles.registerItemIcon}
                              />
                              <TextInput onChange = {this.onEmail} style = {styles.registerItemInput}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Password
                            </Text>
                            <View  style={styles.registerItem}>
                              <Icon style = {styles.registerItemIcon} name="lock" size={28} />
                              <TextInput onChange = {this.onEmail} secureTextEntry={true} style = {styles.registerItemInput}/>
                            </View>
                          </View>
                        </View>
                        <View style={styles.buttonArea}>
                          <CustomButton 
                            type = {this.state.inputNone ? "disabledYellow":"yellow" } 
                            text="Sign in"
                            pressEvt={ () => this.props.navigation.navigate('DashboardScreen') }
                            />
                        </View>
                        <View>
                            <Text style={styles.forgotPswd}>
                              Forgot Password
                            </Text>
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
    marginLeft: 32,
    marginRight: 32,
  },
  sectionDescription: {
    marginTop: 35,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  },
  sectionRegister: {
    paddingTop: 5,
    alignItems: 'flex-start',
    width: '100%',
  },
  registerItemTitle: {
    fontSize:20,
    fontFamily: 'Avenir Light',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  registerItem: {
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    padding:8,
    marginTop: 7,
    minWidth: width(100)-64,
    flexDirection: 'row',
  },  
  registerItemIcon: {
    width: 50,
    padding: 5,
  },
  registerItemInput: {
    fontSize: 18,
    width: '85%',
    padding: 4,
  },
  noteArea: {
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10, 
  },
  noteIcon: {
    width: '15%',
    alignItems: 'flex-end',
  },
  registerItemNote: {
    width: '82%',
    marginLeft: '3%',
    fontSize:12,
    fontFamily: 'Avenir Light',
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
  sectionLogo: {
    width: 150, 
    height: 150,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonArea: {
    width: '100%',
    marginTop: 30,
  },
  forgotPswd: {
    textDecorationColor: '#000',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
    marginTop: 20,
    fontWeight: 'bold',
  }
});

export default SignIn;
