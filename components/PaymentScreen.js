import React, { Component } from 'react';
import { Text } from 'react-native'
import {Button,Text as TextBase  ,View } from "native-base";
import HeaderBarCustom from './HeaderBarCustom';
import TitleCustom from './TitleCustom';
import { paymentStyle } from '../styles/payment.style';
import { sharedStyle } from '../styles/shared.style';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import CustomText from './CustomText';
import CustomButtonSubmit from './CustomButtonSubmit';

class PaymentScreen extends Component {
    
    render() {
        let radio_props = [
            { label: 'SMS', value: 0 },
            { label: 'Token', value: 1 }
        ];
        let action = 'Thanh toán';
        return (
            <View style={sharedStyle.mainView}>
                <HeaderBarCustom />
                <TitleCustom action={action} />
                <View style={sharedStyle.titleFrame}>
                    <CustomText style={paymentStyle.intro}>Thanh toán bằng thẻ ATM NH TMCP Đại Dương</CustomText>
                </View>
                <View style={paymentStyle.content}>
                   
                        <View>
                            <Text style={paymentStyle.note}>(Tất cả các thông tin bắt buột phải nhập)</Text>
                        </View>
                        <View style={paymentStyle.row}>
                            <CustomText style={{ }}>Mã thẻ ATM</CustomText>
                            <TextInput style={[sharedStyle.input]} editable={true}></TextInput>
                        </View>
                        <View style={paymentStyle.row}>
                            <CustomText style={{ }}>Xác thực GD</CustomText>
                            <RadioForm style={{ marginLeft: 10 }}
                                radio_props={radio_props}
                                initial={0}
                                onPress={(value) => { alert(value) }}
                                buttonColor={'#36393c'}
                                selectedButtonColor='#141415'
                                buttonSize={7}
                                borderWidth={9}
                                formHorizontal={true}
                            />
                        </View>
                        <View style={paymentStyle.row}>
                            <CustomText style={{ width: '30%' }}>Mã xác nhận</CustomText>
                            <TextInput style={[sharedStyle.input, { width: '40%' }]} editable={true}></TextInput>
                        </View>

                </View>

                <CustomButtonSubmit title='Xác nhận'/>
            </View>
        );
    }
}

export default PaymentScreen;