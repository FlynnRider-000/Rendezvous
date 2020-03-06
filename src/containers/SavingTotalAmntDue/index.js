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
import CustomFooter from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import ComboBox from '../../components/ComboBox';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';

class SavingTotalAmntDue extends Component{
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
                      <View>
                        <Text style={styles.textHeading}>
                          How would you like to pay?
                        </Text>
                      </View>
                      <View>
                        <Image
                          style={styles.sectionLogo}
                          source={require('../../assets/card.png')}
                          />
                      </View>
                      <View style={styles.sectionCombo}>
                        <ComboBox custyle={{fontSize:14,padding: 2}} data={[
                          "Checking/Savings account #5555","Checking/Savings account #4555",
                          "Checking/Savings account #3555","Checking/Savings account #2555",
                          "Checking/Savings account #1555","Checking/Savings account #0555"]}/>
                      </View>
                      <View>
                        <Text style={styles.textNote}>
                          Would you like to make the deduction?
                        </Text>
                      </View>
                      <View style={styles.buttonArea}>
                        <CustomButton text = "Continue" type = "black"
                          pressEvt={ () => this.props.navigation.navigate('SavingTotalAmntDueCntnScreen') }
                        />
                        <CustomButton text = "Go back" type = "blackOutline"
                          pressEvt={ () => this.props.navigation.navigate('SavingTotalScreen') }
                        />
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height(100) - 144,
  },
  noteIcon: {
    padding: 5,
  },
  textHeading: {
    marginTop: 70,
    fontSize: 18,
    textAlign: 'center',
  },
  sectionCombo: {
    width: '100%',
  },
  sectionNote: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textNote:{
    fontSize: 12,
    padding: 4,
  },
  sectionDescription: {
    maxHeight: 180,
    padding: 20,
    overflow: 'scroll',
    backgroundColor: '#fafafa',
  },
  textDescription: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Avenir Book',
    textAlign: 'justify',
  },
  buttonArea: {
    width: '100%',
  }
});

export default SavingTotalAmntDue;
