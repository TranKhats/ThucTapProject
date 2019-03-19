import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
//import { sharedStyle, mainColor, leftMargin } from '../styles/shared.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {default as EvilIcon } from 'react-native-vector-icons/EvilIcons';
import {default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome5';
import detailedDepartureStyle from '../../styles/detailedDeparture.style';
import { PREFIX, IP, PORT } from '../../constants/constants';
import { setValueInfoBooking, getValueInfoBooking } from '../../constants/infobooking';
import Loader from '../ShareComponent/loader';
import HeaderBarCustom from '../HeaderBarCustom';
import TitleCustom from '../TitleCustom';
import { sharedStyle, mainColor, leftMargin } from '../../styles/shared.style';
import CustomButtonSubmit from '../CustomButtonSubmit';


class DetailedDepartureScreen extends Component {
    constructor(props){
        super(props);
        this.departure = this.props.navigation.getParam('departure', '');
        this.destination = this.props.navigation.getParam('destionation', '');
        this.searchedResult = this.props.navigation.getParam('searchedResult', new Array());
        this.time = this.props.navigation.getParam('time', '');
        this.state = {
            idJourney: this.searchedResult[0].IdJourney,
            Vehicle: this.searchedResult[0].Vehicle,//luu loai xe ban dau
            idSeat: '',
            seatName: '',
            // seatName: null,
            idPickingPoint: '',
            startingTime: this.searchedResult[0].StartingTime,
            pickingPoints: new Array(),
            price: this.searchedResult[0].Price,
            isLoading: false
        };
        
    }     

    componentDidMount(){
        this.pickingPoints = this.getPickingPoint(this.departure.IdPlace);
    }

    getPickingPoint = async (idDeparture) => {
        let url;
        let result = new Array();
        if (idDeparture != null) {
            this.setState({ isLoading: true })
            url = PREFIX + IP + ':' + PORT + '/api/Ticket/GetPickingPoint?idDeparture=' + idDeparture;
            // await fetch(url, {
            //     method: 'GET',
            //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
            // })
            //     .then(respond => respond.json())
            //     .then(respondJson => {
            //         result = respondJson;
            //         this.setState({
            //             pickingPoints: respondJson,
            //             idPickingPoint: respondJson[0].Id,
            //         })
            //         return result;
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
        

            const respond = await fetch(url, {
                method: 'GET',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
            })
            const respondJson = await respond.json()
            result = respondJson;
            this.setState({
                pickingPoints: respondJson,
                idPickingPoint: respondJson[0].Id,
            })
            this.setState({ isLoading: false })
        }
        return result;
    }

    chooseTime = () => {
        this.props.navigation.navigate('ChooseTimeScreen', 
        { 
            searchedResult: this.searchedResult,
            bindthis: this 
        })
    }

    chooseSeat = async() => {
        this.setState({ isLoading: true })
        console.log('before time out')
        setTimeout(() => {
            console.log('time out')
        }, 7000);

        let url = PREFIX + IP + ':' + PORT + '/api/Ticket/FindSeats';
        // fetch(url, {
        //     method: 'POST',
        //     headers: { 'Accept': 'applycation/json', 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         IdJourney: this.state.idJourney,
        //         Time: this.time
        //     })
        // })                
        //     .then((respond) => respond.json())
        //     .then(jsonRespond => {
        //         // console.log('chooseSeat');
        //         // console.log(jsonRespond)
        //         this.props.navigation.navigate('ChooseSeatScreen', {
        //             seats: jsonRespond,
        //             bindThis: this
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        const respond = await fetch(url, {
            method: 'POST',
            headers: { 'Accept': 'applycation/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                IdJourney: this.state.idJourney,
                Time: this.time
            })
        }) 
        const jsonRespond = await respond.json()
        this.props.navigation.navigate('ChooseSeatScreen', {
            seats: jsonRespond,
            bindThis: this
        });
        this.setState({ isLoading: false })
    }

    submitNextStep = () => {
        if (getValueInfoBooking('seats').length == 0) {
            alert('Thông báo', 'Chưa có ghế nào được chọn');
        }
        if (this.state.idSeat.trim() != '') {
            setValueInfoBooking('idVehicle',this.state.Vehicle);
            setValueInfoBooking('departure', this.departure);
            setValueInfoBooking('destination', this.destination);
            setValueInfoBooking('idJourney', this.state.idJourney);
            setValueInfoBooking('price', this.state.price)
            setValueInfoBooking('time', this.state.startingTime);
            setValueInfoBooking('idPickingPoint', this.state.idPickingPoint);
            this.props.navigation.navigate('InfoCustomerScreen');
        }
    }

    render() {
        return (
            <View style={sharedStyle.mainView}>
                <Loader loading={this.state.isLoading} />
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Chọn ghế' />
                <View style={sharedStyle.mainContent}>

                    <View style={detailedDepartureStyle.placeView}>
                        <View style={detailedDepartureStyle.detailedPlaceView}>
                            <Text style={detailedDepartureStyle.placeFont}>{this.departure.NamePlace}</Text>
                            <Icon name='arrow-right-thick' color={mainColor} size={25} />
                            <Text style={detailedDepartureStyle.placeFont}>{this.destination.NamePlace}</Text>
                        </View>
                        <Text style={detailedDepartureStyle.placeFont}>Ngày {this.time} </Text>
                    </View>

                    <View style={{ paddingLeft: leftMargin }}>
                        <Text style={detailedDepartureStyle.fontLable}>Chọn giờ khởi hành</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <EvilIcon style={detailedDepartureStyle.icon}
                                name='clock' color="black" size={25} 
                                onPress={() => { console.log('BackIcon Title') }} />
                            <View style={detailedDepartureStyle.inputStyle}>
                                <TouchableOpacity onPress={this.chooseTime}>
                                    <Text>{this.state.startingTime}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingLeft: leftMargin }}>
                        <Text style={detailedDepartureStyle.fontLable}>Chọn ghế</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon style={[detailedDepartureStyle.icon,{paddingRight:5}]}
                                name='chair' color="black" size={20} 
                                onPress={() => { console.log('BackIcon Title') }} />
                            <View style={detailedDepartureStyle.inputStyle}>
                                <TouchableOpacity onPress={this.chooseSeat}>
                                    {
                                        this.state.seatName == '' ?
                                            (<Text>Chọn ghế</Text>) :
                                            (<Text>{this.state.seatName}</Text>)
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <Text style={detailedDepartureStyle.fontLable}>Chọn điểm khởi hành</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <EntypoIcon style={detailedDepartureStyle.icon}
                                name="location-pin" color="black" size={30} onPress={() => { console.log('BackIcon Title') }} />
                            <View style={detailedDepartureStyle.inputStyle}>
                                
                                <Picker
                                    note
                                    mode="dropdown"
                                    selectedValue={this.state.idPickingPoint}
                                    onValueChange={(value) => {this.setState({ idPickingPoint: value }) }}
                                >
                                    {
                                        this.state.pickingPoints.map((item, key) => {
                                            return (<Picker.Item label={item.Name} value={item.Id} key={key} />)
                                        })
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>
                <CustomButtonSubmit onPress={this.submitNextStep} title='Tiếp tục' />
            </View>
        );
    }
}

export default DetailedDepartureScreen;