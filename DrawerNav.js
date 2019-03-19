import React from 'react'
import { createDrawerNavigator, DrawerItems, createAppContainer ,createStackNavigator} from 'react-navigation'
import { Image} from 'react-native'
///import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View } from 'react-native';
import { Container, Content, Header, Body, Text as TextBase } from 'native-base'
import DepartureTimeScreen from './components/DepatureTimeScreen'
import { mainColor, leftMargin, bgColor } from './styles/shared.style'
import LoginScreen from './components/LoginScreen';
import ChooseSeatScreen from './components/BookingTicket/ChooseSeatScreen';
import InfoCustomerScreen from './components/BookingTicket/InfoCustomerScreen';
import TicketImfoScreen from './components/TicketInfoScreen';
import PolicyScreen from './components/PolicyScreen';
import CustomModal from './components/Shared.js/CustomModal';
import FindHistoryScreen from './components/BookingHistory/FindHistoryScreen';
import ShowHistoryScreen from './components/BookingHistory/ShowHistoryScreen';
import SearchTicketScreen from './components/BookingTicket/SearchTicketScreen';
import DetailedDepartureScreen from './components/BookingTicket/DetailedDepartureScreen';

const CustomDrawerContentComponent = (props) => (
    <Container style={{ backgroundColor: bgColor }}>
            <View style={style.mainView}>
                <View style={style.viewCompany}>
                    <View style={{ margin: 23 }}>
                        <Image style={{ width: 50, height: 50 }} source={require('./images/logo.png')} />
                    </View>
                    <View>
                        <TextBase uppercase={true} 
                        style={{ fontSize: 11, color: mainColor, fontWeight: 'bold' }}>Công ty trách nhiệm hữu hạn</TextBase>
                        <TextBase uppercase={true} 
                        style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>thành bưởi</TextBase>
                    </View>
                </View>
                <View>
                    <TextBase uppercase={true} style={style.textSlogant}>khẳng định chất lượng</TextBase>
                </View>

            </View>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)


const AccountStack = createStackNavigator({
    'Login': LoginScreen,
    'SignUp': DepartureTimeScreen,
    'PolicyScreen': PolicyScreen,
    'CustomModal':CustomModal,
    

},{
        headerMode: 'none'
})

const BuyTicketStack = createStackNavigator({
    'FindTicket': SearchTicketScreen,
    'DetailedDepartureScreen': DetailedDepartureScreen,
    'ChooseTimeScreen': DepartureTimeScreen,
    'ChooseSeatScreen': ChooseSeatScreen,
    'InfoCustomerScreen': InfoCustomerScreen,
    'TicketInfoScreen': TicketImfoScreen,
    'PolicyScreen': PolicyScreen
},{
        headerMode: 'none'
})

const HistoryBookingStack=createStackNavigator({
    'FindHistoryScreen':FindHistoryScreen,
    'ShowHistoryScreen':ShowHistoryScreen
},{
        headerMode: 'none'
})

const DrawerNav = createDrawerNavigator({

    'Đăng nhập/ Đăng ký': {
        screen: AccountStack,
        navigationOptions: {
            drawerIcon: () => (
                <Icon name="user-circle" size={20} color="#495057" />
            ),    
        }
        
    },

    'Mua vé': {
        screen: BuyTicketStack,
        // navigationOptions: {
        //     drawerIcon: () => (
        //         <Icon name="undo" size={20} color="#495057" />
        //     ),    
        // }
    },

    'Xem lịch sử': {
        screen: HistoryBookingStack,
        navigationOptions: {
            drawerIcon: () => (
                <Icon name="history" size={20} color="#495057" />
            ),    
        }
    }


},
    {
        initialRouteName: 'Đăng nhập/ Đăng ký',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: '#F50057',
            inactiveTintColor: '#E8EAF6',
            activeBackgroundColor: mainColor,
            labelStyle: {
                color: 'yellow'
            },
        },
    }
)




const style = StyleSheet.create({
    textSlogant: {
        fontSize: 13,
        color: mainColor,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: leftMargin
    },

    mainView: {
        backgroundColor: 'white',
        paddingTop: leftMargin
    },

    viewCompany: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

})

const MyApp2 = createAppContainer(DrawerNav)

export default MyApp2
