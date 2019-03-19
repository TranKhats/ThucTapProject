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
import introduceStyle from '../styles/introduce.style';

class IntroduceScreen extends Component {

    render() {
        const value =(
            <View style={introduceStyle.contentView}>
                <CustomText>
                    Để đảm bảo công tá quản lý tài chính và bảo đảm hệu quả hoạt động SXKD, Công ty dư kiến hành lập các công ty con:
                </CustomText>
                <CustomText>- Công ty Cổ phần Thủy điên Thành Bưởi-tổ chức đầu tư xây dựng và sản xuất kinh doanh điện.</CustomText>                  
                <CustomText>- Công ty Cổ phần Thủy điên Thành Bưởi-tổ chức đầu tư xây dựng và sản xuất kinh doanh điện.</CustomText>                  
                <CustomText>- Công ty Cổ phần Thủy điên Thành Bưởi-tổ chức đầu tư xây dựng và sản xuất kinh doanh điện.</CustomText>                  
            </View>
        );

        return (
            <CompanyScreen contentText={value}/>
        );
    }
}

export default IntroduceScreen;