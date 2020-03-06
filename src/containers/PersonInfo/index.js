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
  TouchableOpacity
} from 'react-native';
import PageBarCircle from '../../components/PageBarCircle';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

class PersonInfo extends Component{
    static navigationOptions = {
      title: "Personal Information",
      headerLeft: null,
      headerTitleStyle: {
          width: width(100) - 32,
          textAlign: 'center',
          fontSize: 18,
      },
    };
    render(){
        return (
            <>
                
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionDescription}>
                              Enter your personal information below. This is required to set up your personal FDIC-insured Zero Rendezvous account. We never use your information for anything else. It’s required by law for us to collect this to set up your FDIC-insured Zero Rendezvous account. This is where your savings are held until they’re ready to be sent out to your loan provider.
                            </Text>
                        </View>                   
                        <View style={styles.sectionRegister}>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Full name
                            </Text>
                            <View  style={styles.registerItem}>
                                <IconEvil
                                    name={"user"}
                                    size={22}
                                    style = {styles.registerItemIcon}
                                />
                              <TextInput style = {styles.registerItemInputRight}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              DOB
                            </Text>
                            <View  style={styles.registerItem}>
                              <IconAnt style = {styles.registerItemIcon} name="calendar" size={16} />
                              <TextInput style = {styles.registerItemInputRight}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Phone Number
                            </Text>
                            <View  style={styles.registerItem}>
                                <IconAnt
                                    reverse
                                    name={"phone"}
                                    size={16}
                                    style = {styles.registerItemIcon}
                                />
                              <TextInput style = {styles.registerItemInputRight}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Address
                            </Text>
                            <View  style={styles.registerItem}>
                              <TextInput style = {styles.registerItemInput}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              AddressLine2
                            </Text>
                            <View  style={styles.registerItem}>
                              <TextInput style = {styles.registerItemInput}/>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                            <View style={{width:'45%'}}>
                              <Text style={styles.registerItemTitle}>
                                City
                              </Text>
                              <View  style={styles.registerItem1}>
                                <TextInput style = {styles.registerItem1Input}/>
                              </View>
                            </View>
                            <View  style={{width:'15%'}}>
                              <Text style={styles.registerItemTitle}>
                                State
                              </Text>
                              <View  style={styles.registerItem1}>
                                <TextInput style = {styles.registerItem1Input}/>
                              </View>
                            </View>
                            <View style={{width:'25%'}}>
                              <Text style={styles.registerItemTitle}>
                                Zip
                              </Text>
                              <View  style={styles.registerItem1}>
                                <TextInput style = {styles.registerItem1Input}/>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.buttonArea}>
                          <CustomButton type = "yellow" text="Sign up"
                            pressEvt={ () => this.props.navigation.navigate('StudentLoanScreen') }
                          />
                        </View>
                        <View style={styles.pageBarCircle} >
                          <PageBarCircle count={3} current={1} />
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
    marginTop: 20,
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
    fontSize:14,
    fontFamily: 'Avenir Light',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  registerItem: {
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 3,
    paddingLeft:5,
    minWidth: width(100)-64,
    flexDirection: 'row',
    alignItems: 'center',
  },  
  userItem: {
    borderRadius:9999,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth:1,
    margin: 4, 
  },
  registerItemIcon: {
    margin: 4,
  },
  registerItemInput: {
    fontSize: 12,
    width: '85%',
    padding: 0,
    paddingLeft: 20,
  },
  registerItemInputRight: {
    fontSize: 12,
    width: '85%',
    padding: 0,
    textAlign: 'right',
  },
  registerItem1: {
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 3,
    paddingLeft:5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  registerItem1Input: {
    fontSize: 12,
    width: '85%',
    padding: 0,
    paddingLeft: 5,
  },
  buttonArea: {
    width: '100%',
    marginTop: 20,
  }
});

export default PersonInfo;
