import React, { Component } from 'react';
import {Button,Text  ,View } from "native-base";
import { PREFIX, IP, PORT } from '../../constants/constants';
import HeaderBarCustom from '../HeaderBarCustom';
import TitleCustom from '../TitleCustom';
import { paymentStyle } from '../../styles/payment.style';
import { sharedStyle } from '../../styles/shared.style';

class ShowHistoryScreen extends Component {
    constructor(props) {
        super(props); 
        this.state = { detailHistoryBooking: null };
    }

   componentWillMount(){
       this.setState({ detailHistoryBooking: this.props.navigation.getParam('detailHistoryBooking', null) })    
   }

    render() {
        console.log(this.state.detailHistoryBooking.Customer)
        return (
            <View style={{ backgroundColor: '#f5f6f7', height:'100%'}}>
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Thông tin đặt vé' />

                <View style={paymentStyle.content}>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Họ và tên</Text>
                        <Text uppercase={true}>{this.state.detailHistoryBooking.Customer.Name}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Điện thoại</Text>
                        <Text style={{ width: '55%' }}>{this.state.detailHistoryBooking.Customer.Phone}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Điểm khởi hành</Text>
                        <Text style={{ width: '55%' }}>{this.state.detailHistoryBooking.Departure}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Chuyến</Text>
                        <Text uppercase={true}>{this.state.detailHistoryBooking.Destination}</Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Thời gian</Text>
                        <Text style={{ width: '55%' }}></Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Số ghế</Text>
                        <Text style={{ width: '55%' }}></Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Giá vé</Text>
                        <Text style={{ width: '55%' }}></Text>
                    </View>
                    <View style={paymentStyle.row}>
                        <Text style={{ width: '40%' }}>Tổng tiền</Text>
                        <Text style={{ width: '55%' }}>{this.price * this.quantity}</Text>
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

export default ShowHistoryScreen;