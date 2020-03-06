
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Home from './containers/Home';
import SignUp from './containers/Signup';
import Guide from './containers/Guide';
import LoginSuccess from './containers/LoginSuccess'
import PersonInfo from './containers/PersonInfo'
import StudentLoan from './containers/StudentLoan'
import EmailAccess from './containers/EmailAccess'
import EmailScan from './containers/EmailScan'
import SignIn from './containers/Signin'
import Savings from './containers/Savings'
import OfflineShopping from './containers/OfflineShopping'
import SavingsInfo from './containers/SavingsInfo'
import SavingMonthlyDone from './containers/SavingMonthlyDone'
import ApplyLoan from './containers/ApplyLoan'
import SavingTotal from './containers/SavingTotal'
import SavingTotalAmntDue from './containers/SavingTotalAmntDue'
import SavingTotalAmntDueCntn from './containers/SavingTotalAmntDueCntn'
import Congratulation from './containers/Congratulation'
import LoanAmountInput from './containers/LoanAmountInput'
import SavingOthAmntConfirm from './containers/SavingOthAmntConfirm'
import SavingOtherAmount from './containers/SavingOtherAmount'
import SavingOtherAmntDue from './containers/SavingOtherAmntDue'
import Dashboard from './containers/Dashboard'

import { width, height } from 'react-native-dimension';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity
  } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconEvil from 'react-native-vector-icons/EvilIcons';
//import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
/*
hideMenu = () => {
    mShowed =false;
  _menu.hide();
};

showMenu = () => {
  mShowed =true;
  _menu.show();
};

menuShowed = () => {
    return mShowed;
}
*/
const createStackNavigators = () => {
  return createStackNavigator({
    HomeScreen: {
        screen: Home,
    },
    SignUpScreen: {
        screen: SignUp
    },
    LoginSuccessScreen: {
        screen: LoginSuccess,
    },
    GuideScreen: {
        screen: Guide,
        navigationOptions: {
            title: "How Zero Rendezvous Works",
            headerLeft: null,
            headerTitleStyle: {
                width: width(100) - 32,
                fontSize: 18,
                textAlign: 'center'
            },
        }
    },
    PersonInfoScreen: {
        screen: PersonInfo,
    },
    StudentLoanScreen: {
        screen: StudentLoan,
        navigationOptions: ({ navigation }) => ({
            title: "Student Loan",
            headerLeft: (
                <TouchableOpacity onPress = {_ => navigation.goBack()}>
                    <Icon name={"chevron-thin-left"} size={25} style = {{paddingLeft: 25}}/>
                </TouchableOpacity>
            ),
            headerTitleStyle: {
                width: width(100) - 150,
                fontSize: 18,
                textAlign: 'center'
            },
        })
    },
    EmailAccessScreen: {
        screen: EmailAccess,
    },
    SignInScreen: {
        screen: SignIn,
    },
    EmailScanScreen:{
        screen: EmailScan,
    },
    OfflineShoppingScreen: {
        screen: OfflineShopping,
    },
    SavingsScreen:{
        screen:Savings,
    },
    SavingsInfoScreen:{
        screen: SavingsInfo,
    },
    SavingMonthlyDoneScreen: {
        screen: SavingMonthlyDone,
    },
    ApplyLoanScreen: {
        screen: ApplyLoan,
    },
    SavingTotalScreen: {
        screen: SavingTotal,
    },
    SavingTotalAmntDueScreen: {
        screen: SavingTotalAmntDue,
    },
    SavingTotalAmntDueCntnScreen:{
        screen: SavingTotalAmntDueCntn,
    },
    CongratulationScreen: {
        screen: Congratulation,
    },
    LoanAmountInputScreen: {
        screen: LoanAmountInput,
    },
    SavingOthAmntConfirmsScreen: {
        screen: SavingOthAmntConfirm,
    },
    SavingOtherAmountScreen: {
        screen: SavingOtherAmount,
        navigationOptions: ({ navigation }) => ({
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
        })
    },
    SavingOtherAmntDueScreen:{
        screen: SavingOtherAmntDue,
    },
    DashboardScreen: {
        screen: Dashboard,
    }
  }, {
    initialRouteName: 'HomeScreen'
  });
}

class Root extends Component {

  /*componentDidMount = async() => {

    var loginToken;

    await AsyncStorage.getItem("LoginToken")
    .then((response) => {
      if (response) {
        const {actSetUserInfo, actSetToken, actSignIn, actClrUserInfo, actClrToken, actSignOut} = this.props;
        
        loginToken = JSON.parse(response);
        
        // console.log("LoginToken");
        // console.log(loginToken);
        // console.log("EndLoginToken");

        api.get('/auth/access-token/' + loginToken)
        .then(response => {
          // console.log(response.status);
          if (response.status == 201) {
            actSetUserInfo(response.data.decodedToken);
            actSetToken(response.data.access_token);
            actSignIn();
            AsyncStorage.setItem("LoginToken", JSON.stringify(response.data.access_token));
          } else {
            actClrUserInfo();
            actClrToken();
            actSignOut();
            AsyncStorage.removeItem("LoginToken");
          }
        })
      }
    })
    .catch(error => {
      console.log(error.response);
    }).done();
  }*/

  render() {
      const Navigator = createStackNavigators();
      const AppContainer = createAppContainer(Navigator);
      return (
        <AppContainer/>
      );
  }
}
/*
const mapStateToProps = store => ({
    loginReducer: store.loginReducer,
    tokenValue: store.tokenReducer,
    userValue: store.userReducer,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
*/
export default Root;