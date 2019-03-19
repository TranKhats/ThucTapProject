import React from 'react';
import { createDrawerNavigator, DrawerItems, createAppContainer ,createStackNavigator} from 'react-navigation'
import { Image, Button ,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Header, Body, Text as TextBase } from 'native-base'
import DepartureTimeScreen from './components/DepatureTimeScreen'
import { mainColor, leftMargin, bgColor } from './styles/shared.style'
import LoginScreen from './components/LoginScreen';
import SearchTicketScreen from './components/SearchTicketScreen';

export class OpenMenuScreen extends React.Component {
    render() {
        return (
            <Button onPress={() => this.props.navigation.openDrawer()} title='Go back home' />
        )
    }
}

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
const DrawerNav = createDrawerNavigator({
    'Đăng nhập/ Đăng ký': {
        screen: LoginScreen,
        navigationOptions: {
            drawerIcon: () => (
                <Icon name='alarm' color='#F50057' />
            ),    
        }
    },
    'SearchTicket': {
        screen: SearchTicketScreen,
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
            }
        },
       
    })




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

const MyApp = createAppContainer(DrawerNav)

export default MyApp
