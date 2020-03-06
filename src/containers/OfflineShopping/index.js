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
import CustomButton from '../../components/CustomButton';
import CustomFooter from '../../components/Footer';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';

class OfflineShopping extends Component{
    static navigationOptions = ({navigation}) => {
      return {
        title: "Offline Shopping",
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
                      <Image
                            style={styles.recepitImg}
                            source={require('../../assets/receipts.png')}
                      />
                      <View style={styles.container}>
                        <Text style={styles.sectionDescription}>
                          Do you shop offline? Activate your camera. Take a picture of your receipts.
                        </Text>
                      </View>
                      <View style={styles.buttonArea}>
                        <CustomButton type = "black" text="Activate camera"/>
                        <CustomButton type = "blackOutline" text="Go back"
                          pressEvt={ () => this.props.navigation.navigate('EmailScanScreen') }
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
  recepitImg: {
    marginLeft: -32,
    marginRight: -32,
    width: width(100),
  },
  container: {
    width: '100%',
  },
  sectionDescription: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'center',
  },
  buttonArea:{
    width: '100%',
    marginTop: 20,
  }
});

export default OfflineShopping;
