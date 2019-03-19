import React, { Component } from 'react';
import {Button,Text  ,View } from "native-base";
import HeaderBarCustom from './HeaderBarCustom';
import TitleCustom from './TitleCustom';
import { paymentStyle } from '../styles/payment.style';
import { sharedStyle } from '../styles/shared.style';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { getValueInfoBooking, getValueInfoCustomer, InfoBooking, Customer, setCustomer, resetInfoBooking } from '../constants/infobooking';
import { PREFIX, IP, PORT } from '../constants/constants';

class TicketImfoScreen extends Component {
    constructor(props) {
        super(props);
        this.customer = this.props.navigation.getParam('customerInfo', null);
        this.infoBooking = InfoBooking;

        this.departure = getValueInfoBooking('departure')
        this.destination = getValueInfoBooking('destination');
        this.price = getValueInfoBooking('price');
        this.time = getValueInfoBooking('time');
        this.quantity = getValueInfoBooking('quantity');
    }

    submitTickets = async() => {
        this.props.navigation.navigate('FindTicket');
    }

    async componentWillUnmount() {
        console.log('unmount TicketInfoTicket');
        let url1 = PREFIX + IP + ':' + PORT + '/api/Customer/SaveCustomerInfo';

        const respond = await fetch(url1, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Id: Customer.id,
                Name: Customer.name,
                Email: Customer.email,
                Phone: Customer.phone,
                Passport: Customer.passport,
            })
        })
        const resJson = respond.json();
        if (resJson) {
            alert('Đã thêm thông tin khách hàng');
        }
        let url = PREFIX + IP + ':' + PORT + '/api/Ticket/BookTicket';
        fetch(url,{
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                IdCustomer:Customer.id,
                IdJourney: InfoBooking.idJourney,
                IdVehicle: InfoBooking.idVehicle,
                IdPickingPoint: InfoBooking.idPickingPoint,
                Seats: InfoBooking.seats
            })
        })
            .then(res => res.json())
            .then((resJson) => {
                console.log(resJson)
                if(resJson){
                    setCustomer('','','','','','')
                    resetInfoBooking();
                    // console.log(InfoBooking);
                    // console.log(Customer);
                }
            }).catch((err) => {
                console.log(err)
            });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#f5f6f7', height:'100%'}}>
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Thông tin đặt vé' />

                <View style={paymentStyle.content}>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Họ và tên</Text>
                        <Text uppercase={true}>{this.customer.name}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Điện thoại</Text>
                        <Text style={{ width: '55%' }}>{this.customer.phone}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>CMND/Passport</Text>
                        <Text style={{ width: '55%' }}></Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Điểm khởi hành</Text>
                        <Text style={{ width: '55%' }}>{this.departure.NamePlace}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Chuyến</Text>
                        <Text uppercase={true}>{this.destination.NamePlace}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Thời gian</Text>
                        <Text style={{ width: '55%' }}>{this.time}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Số ghế</Text>
                        <Text style={{ width: '55%' }}>{this.quantity}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Giá vé</Text>
                        <Text style={{ width: '55%' }}>{this.price}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Tổng tiền</Text>
                        <Text style={{ width: '55%' }}>{this.price * this.quantity}</Text>
                    </View>
                    <View>
                        <Text style={[paymentStyle.note, { width: '100%' }]}>(*) Giá đã bao gồm dịch vụ wifi nước và khăn lạnh</Text>
                    </View>

                </View>

                <View style={sharedStyle.alignButton}>
                    <View>
                        <Button style={sharedStyle.fontButton} onPress={this.submitTickets}>
                            <Text style={{ color: 'white' }} uppercase={false}> Xác thực </Text>
                        </Button>
                    </View>
                </View>

            </View>
        );
    }
}

export default TicketImfoScreen;