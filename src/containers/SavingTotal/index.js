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
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { width, height } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';

class SavingTotal extends Component{
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
                          Would you like to add this amount towards satisfying the current amount due or towards making an extra payment to lower the principal?
                        </Text>
                      </View>
                      <View style={styles.sectionNote}>
                        <View>
                          <MateIcon style = {styles.noteIcon} name="shield-check-outline" size={28} />
                        </View>
                        <View>
                          <Text style={styles.textNote}>
                            NOTE: Check with your student loan servicer for details on making payments on the principal. When you make large payments, lenders are required to put your payment toward any outstanding fees first, then interest and then your principal. The Consumer Financial Protection Bureau has created a sample letter to help you get started. You can use the following template to send a message to your lender via snail mail or email:
                          </Text>
                        </View>
                      </View>
                      <ScrollView style={styles.sectionDescription}>
                        <Text style={styles.textDescription}>
                        {"I am writing to provide you with instructions on how to apply payments when I send an amount greater than the minimum amount due. Please apply payments as follows:\n\nAfter applying the minimum amount due for each loan, any additional amount should be applied to the loan that is accruing the highest interest rate.\n\nIf there are multiple loans with the same interest rate, please apply the additional amount to the loan with the lowest outstanding principal balance.\n\nIf any additional amount above the minimum amount due ends up paying off an individual loan, please then apply any remaining part of my payment to the loan with the next highest interest rate.\n\nIt is possible that I may find an option to refinance my loans to a lower rate with another lender. If this lender or any third party makes payments to my account on my behalf, you should use the instructions outlined above.\n\nRetain these instructions. Please apply these instructions to all future overpayments. Please confirm that these payments will be processed as specified or please provide an explanation as to why you are unable to follow these instructions."}
                        </Text>
                      </ScrollView>
                      <View style={styles.buttonArea}>
                        <CustomButton text = "Current amount due" type = "black"
                          pressEvt={ () => this.props.navigation.navigate('SavingTotalAmntDueScreen') }
                        />
                        <CustomButton text = "Payment to lower principal" type = "blackOutline"
                          pressEvt={ () => this.props.navigation.navigate('SavingTotalAmntDueScreen') }
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
    fontSize: 18,
    textAlign: 'center',
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

export default SavingTotal;
