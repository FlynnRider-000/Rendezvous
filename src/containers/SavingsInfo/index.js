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

import CustomFooter from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { width, height } from 'react-native-dimension';

class SavingsInfo extends Component{
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
                        <View style={styles.sectionDescription}>
                          <Text style={styles.moneyField}>
                            $44.07
                          </Text>
                          <Text style={styles.infoField}>
                            saved with this purchase
                          </Text>
                        </View>
                        <View style={styles.sectionImage}>
                          <Image
                              style={styles.savingImg}
                              source={require('../../assets/savingsInfoImg.png')}
                          />
                        </View>
                        <View style={styles.buttonArea}>
                          <CustomButton type = "black" text="Apply to loan"
                            pressEvt={ () => this.props.navigation.navigate('ApplyLoanScreen') }
                          />
                          <CustomButton type = "black" text="Pay monthly amount: $155"
                            pressEvt={ () => this.props.navigation.navigate('SavingMonthlyDoneScreen') }
                          />
                          <CustomButton type = "blackOutline" text="Go back"
                            pressEvt={ () => this.props.navigation.navigate('SavingsScreen') }
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
  },
  sectionDescription: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  moneyField: {
    fontWeight: 'bold',
    fontSize: 26,
    padding: 10,
  },
  infoField: {
    fontSize: 16,
    padding: 10,
  },
  sectionImage: {
    marginLeft: -32,
    marginRight: -32,
    paddingBottom: 20,
  },
  savingImg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonArea: {
    marginTop: 30,
    width: '100%',
  }
});

export default SavingsInfo;
