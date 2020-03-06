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
import { width, height } from 'react-native-dimension';
import CustomButton from '../../components/CustomButton';
import CustomFooter from '../../components/Footer';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';

class EmailScan extends Component{
    static navigationOptions = ({navigation}) => {
      return {
        title: "Email Scans",
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
          fontSize: 18,
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
                          <View style={styles.buttonArea}>
                            <CustomButton type = "black" text="Scan email now"/>
                            <CustomButton type = "black" text="Edit Scanning preferences"/>
                            <CustomButton pressEvt={ () => this.props.navigation.navigate('OfflineShoppingScreen') } type = "black" text="Offline Shipping"/>
                          </View>
                          <View>
                            <Text style={styles.note}>
                              WE'LL SCAN YOUR OFFLINE RECEPIT AS WE DO ONLINE ONES.
                            </Text>
                          </View>
                          <View style={styles.table}>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.headerItem}>
                                SCAN DATE
                              </Text>
                              <Text  style = {styles.headerItem}>
                                ORDERS FOUND
                              </Text>
                            </View>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.tableItem}>
                                6.31.2018
                              </Text>
                              <Text  style = {styles.tableItem}>
                                12
                              </Text>
                            </View>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.tableItem}>
                                4.12.2018
                              </Text>
                              <Text  style = {styles.tableItem}>
                                4
                              </Text>
                            </View>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.tableItem}>
                                2.23.2018
                              </Text>
                              <Text  style = {styles.tableItem}>
                                20
                              </Text>
                            </View>
                          </View>
                          <View style = {styles.offerPanel}>
                            <Text style={styles.note1}>
                              ADDITIONAL OFFERS
                            </Text>
                            <Image
                              style={styles.offerImage}
                              source={require('../../assets/offers.png')}
                            />
                          </View>
                      </View>
                  </ScrollView>
                  <CustomFooter index = {1} navigation = {this.props.navigation}/>
                </View>               
            </>
        );
    }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    minHeight: height(100) - 500,
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
  registerItemInput: {
    fontSize: 12,
    width: '85%',
    padding: 0,
    paddingLeft: 20,
  },
  buttonArea: {
    width: '100%',
    marginTop: 10,
  },
  note: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  note1: {
    marginTop: 15,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scanHistoryPanel: {
    width: '100%',
  },
  offerImage: {
    width: '100%',
    marginTop: 15,
  },
  table: {
    marginTop: 20,
  },
  tableColumn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    padding: 6,
    marginLeft: -32,
    marginRight: -32,
    paddingLeft: 32,
    paddingRight: 32,
  },
  headerItem: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableItem: {
    width:'50%',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default EmailScan;
