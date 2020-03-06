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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { width, height } from 'react-native-dimension';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

class SignUp extends Component{
    static navigationOptions = {
        title: "Register",
        headerLeft: null,
        headerTitleStyle: {
            width: width(100) - 32,
            textAlign: 'center',
        },
    };
    render(){
        return (
            <>
              <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  <View style={styles.body}>
                    <View>
                      <View style={styles.sectionContainer}>
                          <Text style={styles.sectionDescription}>
                            Register for a Zero Rendezvous user account.
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
                            <TextInput style = {styles.registerItemInput}/>
                          </View>
                        </View>
                        <View style = {styles.noteArea}>
                          <MateIcon style = {styles.noteIcon} name="shield-check-outline" size={28} />
                          <Text style={styles.registerItemNote}>
                            Note: it’s best to have a separate, designated email address for your shopping purposes.
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.registerItemTitle}>
                            Password
                          </Text>
                          <View  style={styles.registerItem}>
                            <Icon style = {styles.registerItemIcon} name="lock" size={28} />
                            <TextInput secureTextEntry={true} style = {styles.registerItemInput}/>
                          </View>
                        </View>
                        <View>
                          <Text style={styles.registerItemTitle}>
                            Confirm password
                          </Text>
                          <View  style={styles.registerItem}>
                            <Icon style = {styles.registerItemIcon} name="lock" size={28} />
                            <TextInput secureTextEntry={true} style = {styles.registerItemInput}/>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.buttonArea}>
                      <CustomButton type = "yellow" text="Sign up"
                        pressEvt={ () => this.props.navigation.navigate('LoginSuccessScreen') }
                      />
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
    marginTop: 41,
    fontSize: 14,
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
  buttonArea: {
    width: '100%',
    marginTop: 40,
  }
});

export default SignUp;
