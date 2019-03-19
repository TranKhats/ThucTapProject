import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Feather";
import { View, TouchableOpacity, TextInput } from 'react-native';
import {Button, Text} from 'native-base'
import { loginStyle } from '../styles/login.style';
import HeaderBarCustom from './HeaderBarCustom';
import { sharedStyle, mainColor } from '../styles/shared.style';

class ConfirmCodeScreen extends Component {
    render() {
        return (
            <View>
                <HeaderBarCustom />

                <View style={sharedStyle.titleFrame}>
                    <TouchableOpacity>
                        <Icon name="chevron-left" color="black" size={20} onPress={() => { console.log('BackIcon Title') }} />
                    </TouchableOpacity>
                    <Text style={[loginStyle.textTitle, loginStyle.fontWord]}>Thanh toán</Text>
                </View>

                <View style={loginStyle.content}>
                    <View>
                        <Text style={loginStyle.fontWord}>Nhập mã xác thực (Khách hàng nhận được qua SMS hoặc HardToken)</Text>
                        <TextInput style={loginStyle.input} editable={true} maxLength={400}></TextInput>
                    </View>
                    
                    <View style={{ flexDirection: 'row',alignItems:"center",justifyContent:"center",marginTop:15}}>
                        <View>
                            <Button style={[sharedStyle.fontButton,{backgroundColor:'#e5e5e9'}]} light onPress={() => { console.log("Hủy button") }}>
                            <Text uppercase={false}> Hủy </Text>
                            </Button>
                        </View>

                        <View style={{marginLeft:20}}>
                            <Button style={sharedStyle.fontButton} onPress={() => { console.log('Xác thực button') }}>
                            <Text style={{color:'white'}} uppercase={false}> Xác thực </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ConfirmCodeScreen;