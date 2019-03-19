import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button, Text as TextBase, View } from "native-base";
import HeaderBarCustom from './HeaderBarCustom';
import TitleCustom from './TitleCustom';
import { paymentStyle } from '../styles/payment.style';
import { sharedStyle } from '../styles/shared.style';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import CustomText from './CustomText';

class CustomButtonSubmit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 }}>
                <View>
                    <Button style={sharedStyle.fontButton} onPress={ this.props.onPress}>
                        <Text style={{ color: 'white' }} uppercase={false}> {this.props.title} </Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default CustomButtonSubmit;