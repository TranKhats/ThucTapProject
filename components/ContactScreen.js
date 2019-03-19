import React, { Component } from 'react';
import { Image, Text } from 'react-native'
import { Button, View, Text as TextBase } from "native-base";
import HeaderBarCustom from './HeaderBarCustom';
import { paymentStyle } from '../styles/payment.style';
import { sharedStyle, mainColor, leftMargin } from '../styles/shared.style';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import CustomText from './CustomText';
import contactStyle from '../styles/contact.style';
import CompanyScreen from './CompanyScreen';

class ContactScreen extends Component {

    render() {
        const value =(
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150 }} source={require('../images/hotline.png')} />
                </View>
                <View style={contactStyle.infoContact}>
                    <Text>Trung tâm chăm sóc khách hàng</Text>
                    <CustomText>266-268 Lê Hồng Phong, P6, Q5, Tp Hồ Chí Minh</CustomText>
                </View>
                <View style={sharedStyle.alignButton}>
                    <View>
                        <Button style={[sharedStyle.fontButton, { width: 'auto' }]} onPress={() => { console.log('Xác thực button') }}>
                            <TextBase style={{ color: 'white' }} uppercase={false}> Hotline: 1900 6079 </TextBase>
                        </Button>
                    </View>
                </View>
            </View>
        );

        return (
            <CompanyScreen contentText={value}/>
        );
    }
}

export default ContactScreen;