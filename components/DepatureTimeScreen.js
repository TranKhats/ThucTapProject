import React, { Component } from 'react'
import { AppRegistry, Image, ImageBackground, StatusBar, StyleSheet, View, FlatList } from 'react-native'
import { Container, Content, Text, List, ListItem, Left, Body, Right } from 'native-base'
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import { sharedStyle, mainColor } from '../styles/shared.style';
import HeaderBarCustom from './HeaderBarCustom';
import TitleCustom from './TitleCustom';
import { setValueInfoBooking } from '../constants/infobooking';

class DepartureTimeScreen extends Component {
    constructor(props) {
        super(props);
        this.searchedResult = this.props.navigation.getParam('searchedResult', new Array());
        this.preThis = this.props.navigation.getParam('bindthis', null)
    }

    selectTime = (rowData) => {
        this.preThis.setState({
            idJourney: rowData.IdJourney,
            startingTime: rowData.StartingTime,
            price: rowData.Price
        });//set lại Id chon ở màn hinh truoc (gio khoi hanh)
        // console.log(rowData)
        // setValueInfoBooking('price', rowData.Price);
        this.props.navigation.goBack();
    }

    render() {
        let icon = 'clockcircleo';
        return (

            <View style={sharedStyle.mainView}>
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Chọn giờ khởi hành'/>
                <View style={sharedStyle.mainContent}>
                    <List
                        dataArray={this.searchedResult}
                        renderRow={(rowData) => {
                            return (
                                    <ListItem button
                                        onPress={() => { alert('Choose bus!') }}
                                        icon
                                        onPress={()=>this.selectTime(rowData)}>
                                        <Left>
                                            <Icon name={icon} size={20} style={{ color: mainColor }} />
                                        </Left>
                                        <Body>
                                            <CustomText>{rowData.StartingTime + '(' + rowData.type + ')'}</CustomText>
                                        </Body>
                                        <Right>
                                            <Icon name='right' />
                                        </Right>
                                    </ListItem>
                            )}
                        } />
                </View>

            </View>
        );
    }
}

export default DepartureTimeScreen;