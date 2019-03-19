import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Button, View, Text as TextBase } from 'native-base'
import HeaderBarCustom from './HeaderBarCustom'
import { paymentStyle } from '../styles/payment.style'
import { sharedStyle, mainColor, leftMargin, bgFrame } from '../styles/shared.style'
import { TextInput } from 'react-native-gesture-handler'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import CustomText from './CustomText'
import companyStyle from '../styles/company.style'

class CompanyScreen extends Component {

  render () {
    return (
        <View style={sharedStyle.mainView}>
            <HeaderBarCustom />
            <View style={companyStyle.mainView}>
                <View style={companyStyle.viewCompany}>
                    <View style={{ marginRight: 40 }}>
                        <Image style={{ width: 70, height: 70 }} source={require('../images/logo.png')} />
                    </View>
                    <View>
                        <TextBase uppercase={true} style={{ fontSize: 11, color: mainColor, fontWeight: 'bold' }}>
                            Công ty trách nhiệm hữu hạn
              </TextBase>
                        <TextBase uppercase={true} style={{ fontSize: 25, color: 'red', fontWeight: 'bold' }}>
                            thành bưởi
              </TextBase>
                    </View>
                </View>
                <View>
                    <TextBase uppercase={true} style={companyStyle.textSlogant}>
                        khẳng định chất lượng
            </TextBase>
                </View>
                <View style={companyStyle.contentView}>
                   
                    {this.props.contentText}
                </View>
            </View>
        </View>
    )
  }
}

export default CompanyScreen
