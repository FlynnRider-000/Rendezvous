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
import ComboBox from '../../components/ComboBox';
import { width, height } from 'react-native-dimension';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';

class EmailAccess extends Component{
    static navigationOptions = ({navigation}) => {
      return {
        title: "Email Access",
        headerLeft: (
          <TouchableOpacity onPress = {_ => navigation.goBack()}>
              <Icon name={"chevron-thin-left"} size={25} style = {{paddingLeft: 25}}/>
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          width: width(100) - 150,
          fontSize: 18,
          textAlign: 'center'
        }
      }
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
                              Choose your student loan servicer and pop the info in. This is important - and probably the toughest part of setting you up for the app. 
                            </Text>
                        </View>                   
                        <View style={styles.sectionRegister}>
                          <View style={styles.w100}>
                            <Text style={styles.registerItemTitle}>
                              Email Provider
                            </Text>
                            <View style={styles.w100}>
                              <ComboBox data={["Russia","China","United States","Ecuador","Japan","Spain","Germany"]}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Email address to scan
                            </Text>
                            <View  style={styles.registerItem}>
                              <TextInput style = {styles.registerItemInput}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Email password
                            </Text>
                            <View  style={styles.registerItem}>
                              <TextInput style = {styles.registerItemInput}/>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.registerItemTitle}>
                              Incoming server port
                            </Text>
                            <View  style={styles.registerItem}>
                              <TextInput style = {styles.registerItemInput}/>
                            </View>
                          </View>
                          <View style={styles.w100}>
                            <Text style={styles.registerItemTitle}>
                              Authentication
                            </Text>
                            <View style={styles.w100}>
                              <ComboBox data={["Russia","China","United States","Ecuador","Japan","Spain","Germany"]}/>
                            </View>
                          </View>
                          <View style={styles.w100}>
                            <Text style={styles.registerItemTitle}>
                              Encryption
                            </Text>
                            <View style={styles.w100}>
                              <ComboBox data={["Russia","China","United States","Ecuador","Japan","Spain","Germany"]}/>
                            </View>
                          </View>
                        </View>
                        <View style={styles.buttonArea}>
                          <View style={styles.inlineBtn}>
                            <CustomButton type = "grey" text="Go back"
                              pressEvt={ () => this.props.navigation.navigate('StudentLoanScreen') }
                            />
                          </View>
                          <View style={styles.inlineBtn}>
                            <CustomButton type = "yellow" text="Next"
                              pressEvt={ () => this.props.navigation.navigate('DashboardScreen') }
                            />
                          </View>
                        </View>
                        <View style={styles.pageBarArea}>
                          <PageBarCircle count={3} current={3} />
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
  sectionContainer: {
    marginTop: 50,
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  },
  sectionRegister: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  registerItemTitle: {
    fontSize:14,
    fontFamily: 'Avenir Light',
    justifyContent: 'flex-start',
    marginTop: 15,
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
  buttonArea: {
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inlineBtn:{
    width: '47%',
  },
  pageBarArea:{
    marginTop: 10,
  }
});

export default EmailAccess;
