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
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { width, height } from 'react-native-dimension';

class Guide extends Component{
    state = {
      guides: [
        {guide:"Shop online as you normally do.", fontSize:21},
        {guide:"Designate an email to receive your receipts.", fontSize:21},
        {guide:"We scan your designated email for those receipts showing savings or discounts received on completed purchases.", fontSize:21},
        {guide:"We also scan for coupon/ discount offers from retailers you’ve patronized.",fontSize:21},
        {guide:"We will inform you of those savings or discounts and ask whether you’d like us to deduct this amount or some other amount from your savings or checking account and hold it for future student loan payments.", fontSize:17},
        {guide:"We save that amount in an FDIC insured savings account on your behalf and submit that amount to your student loan provider. The Federal Deposit Insurance Corporation (FDIC) is a United States government  corporation providing deposit insurance to depositors in U.S. commercial banks and  savings institutions.",fontSize:16}
      ],
      index: 0,
    }
    onContinueBtnPressed = () => {
      if(this.state.index < this.state.guides.length - 1)
        this.setState({index: this.state.index + 1});
      else
        this.props.navigation.navigate('PersonInfoScreen')
    }
    onBackBtnPressed = () => {
      if(this.state.index > 0)
        this.setState({index: this.state.index - 1});
      else
        this.props.navigation.navigate('LoginSuccessScreen')
    }
    static navigationOptions = {
      title: "How Zero Rendezvous Works",
      headerLeft: null,
      headerTitleStyle: {
          width: width(100) - 32,
          fontSize: 18,
          textAlign: 'center',
      },
    };
    render(){
        return (
            <>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    contentInsetAdjustmentBehavior="scrollableAxes"
                    scrollEnabled
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Image
                            style={styles.sectionLogo}
                            source={require('../../assets/logo.png')}
                            />
                            <View style = {styles.sectionPanel}>
                              <Text style={{...styles.sectionInfo, fontSize: this.state.guides[this.state.index].fontSize}}>
                                {this.state.guides[this.state.index].guide}
                              </Text>
                            </View>
                        </View>
                        <View style={styles.buttonArea}>
                          <CustomButton pressEvt={this.onContinueBtnPressed} type = "yellow" text="Continue"/>
                          <CustomButton pressEvt={this.onBackBtnPressed} type = "grey" text="Go back"/>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 32,
    marginRight: 32,
  },
  sectionContainer: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionLogo: {
    width: 220, 
    height: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionPanel: {
    minHeight: 210,
    justifyContent: 'center',
    paddingTop: 20,
  },
  sectionInfo: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Avenir Light',
    textAlign: 'center',    
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 28,
  },
  buttonArea:{
    width: '100%',
  }
});

export default Guide;
