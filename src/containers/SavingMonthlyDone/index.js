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

import { width, height } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import CustomFooter from '../../components/Footer';
import CustomButton from '../../components/CustomButton';

class SavingMonthlyDone extends Component{
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
          fontSize: 20,
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
                            Done
                          </Text>
                          <View style={styles.buttonArea}>
                            <CustomButton type = "blackOutline" text="Go back"
                              pressEvt={ () => this.props.navigation.navigate('SavingsInfoScreen') }
                            />
                          </View>
                        </View>
                      </View>
                  </ScrollView>
                  <CustomFooter index = {3} navigation = {this.props.navigation}/>
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
  container: {
    height: height(100) - 150,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  sectionDescription: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  }
});

export default SavingMonthlyDone;
