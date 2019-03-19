import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Text as BaseText} from 'native-base';
import { sharedStyle, leftMargin, mainColor } from '../styles/shared.style';
import HeaderBarCustom from './HeaderBarCustom';
import TitleCustom from './TitleCustom';
import CustomButtonSubmit from './CustomButtonSubmit';
import completeTransactionStyle from '../styles/compleTransaction.style';

class CompleteTransactionScreen extends Component {
    render() {
        return (
            <View style={sharedStyle.mainView}>
                <HeaderBarCustom />
                <TitleCustom action='Thanh toán' />
                <View style={{ padding: 35, backgroundColor: 'white' }}>
                    <View>
                        <Text style={{ textAlign: 'center', color: mainColor }}>Số tiền cần thanh toán: 250.000.VND</Text>
                    </View>

                    <View style={{margin:leftMargin}}>
                        <BaseText style={{ fontSize: 15 }}>Thanh toán bằng thẻ nôi địa</BaseText>
                        <View style={completeTransactionStyle.interiorView}>
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/acb.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/donga.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/SHB.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/ocb.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/viettin.png')}
                            />
                        </View>

                        <View style={completeTransactionStyle.interiorView}>
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/acb.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/donga.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/SHB.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/ocb.png')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/viettin.png')}
                            />
                        </View>

                    </View>

                    <View style={{margin:leftMargin}}>
                        <BaseText style={{ fontSize: 15}}>Thanh toán bằng thẻ quốc tế</BaseText>
                        <View style={{ flexDirection: 'row' ,justifyContent:'flex-start', marginTop: leftMargin }}>
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/visa.jpg')}
                            />
                            <Image style={completeTransactionStyle.card}
                                source={require('../images/mastercard.jpg')}
                            />
                        </View>
                    </View>

                </View>
                <CustomButtonSubmit title='Hoàn thành' />
            </View>
        );
    }
}

export default CompleteTransactionScreen;