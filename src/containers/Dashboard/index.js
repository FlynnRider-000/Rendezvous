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
  TouchableOpacity,
} from 'react-native';

import { Header } from 'react-native-elements';

import CustomButton from '../../components/CustomButton';
import CustomFooter from '../../components/Footer';
import Cp from '../../components/Cp';
import LinearGradient from 'react-native-linear-gradient';
import { width, height } from 'react-native-dimension';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import IconEvil from 'react-native-vector-icons/EvilIcons';

class Dashboard extends Component{

    constructor(props) {
      super(props);
    }
    static navigationOptions = ({navigation}) => {
      return {
        title: navigation.getParam('Title', 'Dashboard'),
        headerLeft: () => (
            <Menu onClose={()=>navigation.setParams({leftOpened:!navigation.getParam("leftOpened")})} onOpen={()=>navigation.setParams({leftOpened:!navigation.getParam("leftOpened")})}
            >
                <MenuTrigger>
                    <IconEvil name={"user"} size={40} style = {navigation.getParam('leftOpened', false) ? styles.headerLeftIconClicked : styles.headerLeftIcon}/>
                </MenuTrigger>
                <MenuOptions customStyles = {{optionsContainer:styles.hlMenuOptionsContainer}}>
                    <MenuOption onSelect={() => alert(`Save`)}>
                        <Text style={styles.hlMenuOption}>
                            Edit Personal information
                        </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={styles.hlMenuOption}>
                            Edit credit card information
                        </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={styles.hlMenuOption}>
                            Edit loan information
                        </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={styles.hlMenuOption}>
                            Manage email access
                        </Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        ),
        headerRight: () => (
          <Menu onClose={()=>navigation.setParams({rightOpened:!navigation.getParam("rightOpened")})} onOpen={()=>navigation.setParams({rightOpened:!navigation.getParam("rightOpened")})}
          >
              <MenuTrigger>
                  <IconEvil name={"bell"} size={40} style = {navigation.getParam('rightOpened', false) ? styles.headerRightIconClicked : styles.headerRightIcon}/>
              </MenuTrigger>
              <MenuOptions customStyles = {{optionsContainer:styles.hrMenuOptionsContainer}}>
                  <MenuOption customStyles = {{optionWrapper:styles.hrMenuOptionContainer}} onSelect={() => alert(`Save`)}>
                      <IconEvil name={"exclamation"} size={28} style = {{color:'#ff0',padding: 5}}/>
                      <Text style={styles.hrMenuOption}>
                        Add Personal information
                      </Text>
                  </MenuOption>
                  <MenuOption  customStyles = {{optionWrapper:styles.hrMenuOptionContainer}}  onSelect={() => alert(`Delete`)} >
                      <IconEvil name={"exclamation"} size={28} style = {{color:'#ff0',padding: 5}}/>
                      <Text style={styles.hrMenuOption}>
                          Add student loan information
                      </Text>
                  </MenuOption>
                  <MenuOption  customStyles = {{optionWrapper:styles.hrMenuOptionContainer}}  onSelect={() => alert(`Delete`)} >
                      <IconEvil name={"exclamation"} size={28} style = {{color:'#ff0',padding: 5}}/>
                      <Text style={styles.hrMenuOption}>
                          Grant email access
                      </Text>
                  </MenuOption>
              </MenuOptions>
          </Menu>
      ),
      headerStyle: {
          backgroundColor: '#fcfcd6'
      },
      headerTitleStyle: {
          width: width(100) - 150,
          fontSize: 20,
          textAlign: 'center'
      },
    }}
    render(){
        return (
            <>
              <LinearGradient 
                style={styles.dashboard} 
                colors={['#ffff8e','#895725','#120700']}
                locations={[0,0.7,1]}
              >
                  <ScrollView
                      contentInsetAdjustmentBehavior="automatic"
                      style={styles.scrollView}>
                      <View style={styles.body}>
                        <View style={styles.tabArea}>
                          <Text style={styles.tabItem}>  
                            Transactions
                          </Text>
                          <Text style={{...styles.tabItem,...styles.hasBorder}}>  
                            Payments
                          </Text>
                          <Text style={{...styles.tabItem,...styles.tabActive}}>  
                            Your Loan
                          </Text>
                        </View>
                        <View style={styles.noteArea}>
                          <Text style={styles.note}>  
                            You've saved
                          </Text>
                          <Text style={styles.note1}>  
                            1.2 Years / $12,539
                          </Text>
                        </View>
                        <View style={styles.dashboardCircleArea}>
                          <Cp percent={20}/>
                          <View style={{padding:50,position: 'absolute'}}>
                            <View style = {{...styles.circle}}>
                              <Text style = {styles.amount}>
                                  $24,208
                              </Text>
                              <Text style = {styles.note2}>
                                  Current Loan Amount
                              </Text>
                            </View>
                          </View>
                          <View style= {{position: 'absolute',left: 0}}>
                            <Text style={styles.dnote}>
                              Principal paid:
                            </Text>
                            <Text style={styles.dnote1}>
                              $5,600
                            </Text>
                          </View>
                        </View>
                        <View style={styles.table}>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.headerItem}>
                                PAYMENT DATE
                              </Text>
                              <Text  style = {styles.headerItem}>
                                AMOUNT
                              </Text>
                              <Text  style = {styles.headerItem}>
                                TIME SAVED
                              </Text>
                            </View>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.tableItem}>
                                9.31.2017
                              </Text>
                              <Text  style = {styles.tableItem}>
                                $100
                              </Text>
                              <Text  style = {styles.tableItem}>
                                1.2years
                              </Text>
                            </View>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.tableItem}>
                                9.2.2017
                              </Text>
                              <Text  style = {styles.tableItem}>
                                $102
                              </Text>
                              <Text  style = {styles.tableItem}>
                                352days
                              </Text>
                            </View>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.tableItem}>
                                8.23.2017
                              </Text>
                              <Text  style = {styles.tableItem}>
                                $98
                              </Text>
                              <Text  style = {styles.tableItem}>
                                301days
                              </Text>
                            </View>
                          </View>
                        <View style={styles.buttonArea}>
                          <CustomButton pressEvt={ () => this.props.navigation.navigate('HomeScreen') } text = "Back to sign-in" type = "smallYellow"/>
                        </View>
                      </View>
                  </ScrollView>
                  <CustomFooter index = {2} navigation = {this.props.navigation}/>
              </LinearGradient>
            </>
        );
    }
}
const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
  },
  tabArea: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
    width: width(100),
  },
  hasBorder:{
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  tabActive: {
     backgroundColor: 'rgba(0,0,0,0.8)',
     color: '#fff',
  },
  tabItem: {
    width: '33.333333%',
    textAlign: 'center',
    fontSize: 13,
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  noteArea: {
    padding: 5,
  },
  note: {
    textAlign: 'center',
    fontSize: 13,
    padding: 5,
  },
  note1: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    padding: 5,
  },
  dashboardCircleArea: {
    width: '100%',
    padding: 45,
    paddingBottom: 0,
    paddingTop: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circle: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 9999,
    backgroundColor: '#281808',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  note2: {
      color: '#fff',
      padding: 5,
      fontSize: 12,
  },
  dnote: {
    width: 60,
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    padding: 2,
  },
  dnote1: {
    paddingTop: 5,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  table: {
    marginTop: 20,
  },
  tableColumn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    padding: 7,
    marginLeft: -10,
    marginRight: -10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerItem: {
    width:'33%',
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableItem: {
    width:'33%',
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  headerLeftIcon: {
    paddingLeft: 25,
    color: '#000',
  },
  headerLeftIconClicked:{
    paddingLeft: 15,
    paddingRight:15,
    paddingTop:3,
    marginBottom: -12,
    paddingBottom: 12,
    backgroundColor:"#000",
    color: '#ff0'
  },
  hlMenuOptionsContainer:{
    marginTop: 44,
    padding:10,
    backgroundColor:'#000',
    width: 250,
  },
  hlMenuOption: {
    backgroundColor:'#000',
    padding:10,
    color:'#fff'
  },
  headerRightIcon: {
    paddingRight: 25,
    color: '#000',
  },
  headerRightIconClicked:{
    paddingRight: 15,
    paddingTop:3,
    marginBottom: -12,
    paddingBottom: 12,
    backgroundColor:"#000",
    color: '#ff0'
  },
  hrMenuOptionsContainer:{
    marginTop: 44,
    padding:10,
    backgroundColor:'#000',
    width: 270,
  },
  hrMenuOptionContainer: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  hrMenuOption: {
    backgroundColor:'#000',
    padding:10,
    color:'#fff',
    textAlign: 'right',
  },
});

export default Dashboard;

/*
export default class HomeActivity extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'Default Title'),
      //Default Title of ActionBar
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', '#ED2525'),
        //Background color of ActionBar
      },
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      //Text color of ActionBar
    };
  };

  apply_Yellow = () => {
    //Function to change Title,
    //BackgRound Color and Text Color
    this.props.navigation.setParams({
      Title: 'Yellow Activity',
      BackgroundColor: '#FFFF00',
      HeaderTintColor: '#fff',
    });
  };

  apply_Pink = () => {
    //Function to change Title,
    //BackgRound Color and Text Color
    this.props.navigation.setParams({
      Title: 'Pink Activity',
      BackgroundColor: '#FF69B4',
      HeaderTintColor: '#fff',
    });
  };

  apply_Orange = () => {
    //Function to change Title,
    //BackgRound Color and Text Color
    this.props.navigation.setParams({
      Title: 'Orange Activity',
      BackgroundColor: '#FF3D00',
      HeaderTintColor: '#fff',
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          onPress={this.apply_Yellow}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> APPLY YELLOW COLOR </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.apply_Pink}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> APPLY PINK COLOR </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.apply_Orange}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> APPLY ORANGE COLOR </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },

  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808080',
    borderRadius: 2,
    marginTop: 12,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});*/