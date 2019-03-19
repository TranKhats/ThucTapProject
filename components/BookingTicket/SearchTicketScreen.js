import React, { Component } from 'react';
import { Text, View, TextInput, Picker,Alert} from 'react-native';
import { Button, ListItem, Header } from 'react-native-elements';
import HeaderBarCustom from '../HeaderBarCustom';
import TitleCustom from '../TitleCustom';
import { sharedStyle, leftMargin, mainColor } from '../../styles/shared.style';
import Icon from 'react-native-vector-icons/Entypo';
import { default as Ionicon } from "react-native-vector-icons/Ionicons";
import {  DatePicker } from 'native-base';
import searchTicketStyle from '../../styles/searchTicket.style';
import CustomButtonSubmit from '../CustomButtonSubmit';
import { IP, PORT, PREFIX } from '../../constants/constants';
import { setValueInfoBooking } from '../../constants/infobooking';
import Loader from '../ShareComponent/loader';

class SearchTicketScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeSrc: new Array(),
            departure: '',
            destination:'',
            destinationSrc: new Array(),
            startingTime: new Date(),
            quantity: 0,
            isLoading: false
        };
        
    }

    componentDidMount() {
        this.loadPlaces()
    }

    loadPlaces = async () => {
        this.setState({ isLoading: true });
        let url = PREFIX + IP + ':' + PORT + '/api/Ticket/LoadPlaces';
        const response=await fetch(url, {
                method: 'GET',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            })
        const resJson = await response.json();
        this.setState({
            placeSrc: resJson,
            departure: resJson[0].IdPlace
        })
        this.getDestinations();
        this.setState({ isLoading: false })
    }

    getDestinations = async(idDestination = null) => {
        let url;
        if (idDestination == null) {
            url = PREFIX + IP + ':' + PORT + '/api/Ticket/GetDestinations';
        }
        else{
            this.setState({ isLoading: true })//neu ban dau thi ko set
            url = PREFIX + IP + ':' + PORT + '/api/Ticket/GetDestinations?id=' + idDestination;           
        }
        
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        });
        const responseJson = await response.json();
        this.setState({
            destinationSrc: responseJson,
            destination: responseJson[0].IdPlace
        })
        if (idDestination != null) {
            this.setState({ isLoading: false })//neu ban dau thi ko set
        }
    }

    onValueChangeDeparture(value){
        this.setState({
            departure: value
        })
        this.getDestinations(value);
    }

    searchTicket = async () => {        
        if (this.state.quantity > 0) {
            this.setState({ isLoading: true })
            let url = PREFIX + IP + ':' + PORT + '/api/Ticket/FindTickets';
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    IdDeparture: this.state.departure,
                    IdDestination: this.state.destination,
                    StartingTime: this.state.startingTime.toDateString(),
                    quantity: 0
                }),
            });
            const jsonResponse = await response.json();
            if (jsonResponse.length == 0) {
                Alert.alert(
                    'Thông báo',
                    'Không tìm thấy chuyến đi nào',
                    [
                        { text: 'OK', onPress: () => console.log('Ask me later pressed') },
                    ]
                );
            }
            else {
                setValueInfoBooking('quantity', this.state.quantity);
                this.props.navigation.navigate('DetailedDepartureScreen',
                    {
                        departure: this.state.placeSrc[0],
                        destionation: this.state.destinationSrc[0],
                        time: this.state.startingTime.toDateString(),
                        searchedResult: jsonResponse
                    })
            }
            this.setState({ isLoading: false })
        }
        else{
            Alert.alert(
                'Thông báo',
                'Không tìm thấy  chuyến đi nào',
                [
                    {text: 'OK', onPress:()=>{console.log('Nhập số lượng')}}
                ]
            )
        }
    }

    render() {
        const title = 'Chọn nơi đi/nơi đến';
        return (
            <View style={sharedStyle.mainView}>
                <Loader loading={this.state.isLoading} />
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.navigation} action={title} />
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ padding: leftMargin }}>
                        <Text style={searchTicketStyle.fontLable}>Chọn nơi đi</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon style={searchTicketStyle.icon}
                                name="location-pin" color="black" size={30} onPress={() => { console.log('BackIcon Title') }} />
                            <View style={searchTicketStyle.inputStyle}>
                                <Picker
                                    note mode="dropdown"
                                    selectedValue={this.state.departure}
                                    onValueChange={this.onValueChangeDeparture.bind(this)}
                                    >
                                    { 
                                        this.state.placeSrc.map((item, key) => {
                                            return (<Picker.Item label={item.NamePlace} value={item.IdPlace} key={key} />) 
                                        })    
                                    }                                   
                                </Picker>

                            </View>
                        </View>
                    </View>

                    <View style={{ paddingLeft: leftMargin, paddingRight: leftMargin, paddingBottom: leftMargin }}>
                        <Text style={searchTicketStyle.fontLable}>Chọn nơi đến</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon style={searchTicketStyle.icon}
                                name="location-pin" color="black" size={30} onPress={() => { console.log('BackIcon Title') }} />
                            <View style={searchTicketStyle.inputStyle}>
                                <Picker 
                                    note 
                                    mode="dropdown"
                                    selectedValue={this.state.destination}
                                    onValueChange={(value) => { this.setState({ destination: value }) }}
                                    >
                                    { 
                                        this.state.destinationSrc.map((item, key) => {
                                            return (<Picker.Item label={item.NamePlace} value={item.IdPlace} key={key} />) 
                                    })}                                   
                                </Picker>

                            </View>
                        </View>
                    </View>

                    <View style={searchTicketStyle.date}>
                        <View>
                            <Text style={searchTicketStyle.fontLable}>Ngày khởi hành</Text>
                            <View style={{ flexDirection: 'row', paddingLeft: 5 }}>
                                <Icon style={searchTicketStyle.icon}
                                    name="calendar" color="black" size={20} onPress={() => { console.log('BackIcon Title') }} />
                                <View style={searchTicketStyle.inputStyle}>
                                    <DatePicker
                                        defaultDate={new Date(2018, 5, 5)}
                                        minimumDate={new Date(2010, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={"vi"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        textStyle={{ color: "green" }}
                                        placeHolderTextStyle={{ color: "#cbccd0" }}
                                        disabled={false}
                                        date={this.state.startingTime}
                                        onDateChange={startingTime=>{this.setState({startingTime})}}
                                    />
                                </View>

                            </View>
                        </View>

                    </View>

                    <View style={{ padding: leftMargin }}>
                        <Text style={searchTicketStyle.fontLable}>Số lượng vé</Text>
                        <View style={{ flexDirection: 'row', paddingLeft: 5 }}>
                            <Ionicon style={searchTicketStyle.icon}
                                name="md-people" color="black" size={25} onPress={() => { console.log('BackIcon Title') }} />
                            <TextInput style={searchTicketStyle.inputStyle} keyboardType='numeric'
                                onChangeText={quantity => this.setState({ quantity })}
                            />
                        </View>
                    </View>

                </View>
                <CustomButtonSubmit title='Tìm vé' onPress={this.searchTicket} />
            </View>

        );
    }
}

export default SearchTicketScreen;