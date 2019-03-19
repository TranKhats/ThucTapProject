import React, { Component } from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import { Button, View, Text as TextBase, Container, Content, Body } from 'native-base'
import { mainColor, leftMargin, bgFrame } from '../styles/shared.style'
import companyStyle from '../styles/company.style'
import { DrawerItems } from 'react-navigation';

class CustomMenuDrawerHeader extends Component {

    render() {
        return (
            <Container style={{backgroundColor:'black'}}>
                <Body>
                    <View style={style.mainView}>
                        <View style={companyStyle.viewCompany}>
                            <View style={{ margin: 23 }}>
                                <Image style={{ width: 50, height: 50 }} source={require('../images/logo.png')} />
                            </View>
                            <View>
                                <TextBase uppercase={true}
                                    style={{ fontSize: 11, color: mainColor, fontWeight: 'bold' }}> Công ty trách nhiệm hữu hạn </TextBase>
                                <TextBase uppercase={true}
                                    style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>thành bưởi </TextBase>
                            </View>
                        </View>
                        <View>
                            <TextBase uppercase={true} style={style.textSlogant}> khẳng định chất lượng</TextBase>
                        </View>
                    </View>
                </Body>
                <Content>
                </Content>
            </Container>

        )
    }
}

export default CustomMenuDrawerHeader

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
        paddingTop: leftMargin,
    },
})
