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
import ComboBox from '../../components/ComboBox';
import CustomFooter from '../../components/Footer';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';

class Savings extends Component{
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
                      <View style={styles.container}>
                        <Text style={styles.sectionDescription}>
                          GUILT-FREE ZONE!
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.comboText}>
                          DATE RANGE
                        </Text>
                        <ComboBox custyle={{fontSize:14,padding: 2}} data={["3.1.2018-6.31.2018","3.1.2018-6.31.2017",
                                        "3.1.2018-6.31.2016","3.1.2018-6.31.2015",
                                        "3.1.2018-6.31.2014","3.1.2018-6.31.2013",]}/>
                      </View>
                      <View style={styles.table}>
                          <TouchableOpacity onPress = { () => this.props.navigation.navigate('SavingsInfoScreen') }>
                            <View style = {styles.tableColumn}>
                              <Text style = {styles.headerItem}>
                                DATE
                              </Text>
                              <Text  style = {styles.headerItem}>
                                STORE
                              </Text>
                              <Text  style = {styles.headerItem}>
                                DISCOUNT
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                                6.31.2018
                              </Text>
                              <Text  style = {styles.tableItem}>
                                Kohl's
                              </Text>
                              <Text  style = {styles.tableItem}>
                                $44.07
                              </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
                          <View style = {styles.tableColumn}>
                            <Text style = {styles.tableItem}>
                              6.31.2018
                            </Text>
                            <Text  style = {styles.tableItem}>
                              Kohl's
                            </Text>
                            <Text  style = {styles.tableItem}>
                              $44.07
                            </Text>
                          </View>
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
  },
  sectionDescription: {
    marginTop: 35,
    marginBottom: 35,
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  },
  comboText:{
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
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
    width:'33%',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableItem: {
    width:'33%',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Savings;
