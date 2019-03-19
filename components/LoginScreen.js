import React, { Component } from 'react'
import { View, Text, TextInput, Image, AsyncStorage } from 'react-native'
import HeaderBarCustom from './HeaderBarCustom'
import { Button } from 'native-base'
import TitleCustom from './TitleCustom'
import { sharedStyle } from '../styles/shared.style'
import { StyleSheet } from 'react-native'
import { loginStyle } from '../styles/login.style'
import { USERNAME } from './Constants';
import { PREFIX, IP, PORT } from '../constants/constants';
import CustomModal from './Shared.js/CustomModal';

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        //this.childRef = null;
    }

    login = async() => {
        let url = PREFIX + IP + ':' + PORT + '/api/Customer/Login';
        await fetch(url, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
            body: JSON.stringify({
                Id: this.state.username,
                Password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                if (responseData) {
                    alert('Đăng nhập thành công');
                    <CustomModal clickOk={null} message={'Đăng nhập thành công'} />
                    try {
                        AsyncStorage.setItem(USERNAME, this.state.username);
                    } catch (error) {
                        console.log(error)
                    }
                    this.props.navigation.navigate('Mua vé');
                }
                else {
                    // alert('Đăng nhập lại');
                    <CustomModal clickOk={null} message={'Đăng nhập lại'}/>
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    resetInput = () => {
        this.inputUsername.clear();
        this.inputPassword.clear();
        // console.log(this.childRef)
        // this.childRef.setState({isVisible:true})
    this.props.navigation.navigate('Modal')
        
    }

    render() {
        return (
            <View style={sharedStyle.mainView}>
                {/* <CustomModal ref={(childRef)=>{this.childRef=childRef}}
                // ref={'childRef'}
                clickOk={null} message={'Đăng nhập lại'} /> */}

                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Đăng nhập' />
                <View style={sharedStyle.mainContent}>
                    <TextInput style={loginStyle.inputStyle} placeholder='Họ tên hoặc SĐT' 
                        onChangeText={username => this.setState({ username })}
                        ref={input => {this.inputUsername = input }} />
                    <TextInput style={loginStyle.inputStyle} placeholder='Mật khẩu' 
                        onChangeText={password => this.setState({ password })}
                        ref={input => { this.inputPassword = input }} 
                        />
                    <Text style={{ fontSize: 12, color: 'green', marginLeft: 30, marginTop: 3, textAlign: 'right' }}>
                        Xem điều khoản</Text>
                </View>
                <View style={loginStyle.submitButton}>
                    <View>
                        <Button style={[sharedStyle.fontButton, { backgroundColor: '#fdfdfd' }]} light 
                            onPress={this.resetInput}>
                            <Text uppercase={false}>Hủy</Text>
                        </Button>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Button style={sharedStyle.fontButton} onPress={this.login}>
                            <Text style={{ color: 'white' }} uppercase={false}>Xác thực</Text>
                        </Button>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Text>Đăng nhập với</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image source={require('../images/facebook.png')} style={loginStyle.imageOtherLogin} />
                        <Image source={require('../images/google_plus.png')} style={loginStyle.imageOtherLogin} />
                        <Image source={require('../images/twitter.png')} style={loginStyle.imageOtherLogin} />
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginScreen

const infoCustomerStyle = StyleSheet.create({
    inputStyle: {
        width: '100%',
        borderColor: '#dddde2',
        borderBottomWidth: 1,
        height: 35,
        marginBottom: 5
    }
})
