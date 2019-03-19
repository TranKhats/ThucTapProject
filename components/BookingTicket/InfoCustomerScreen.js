import React, { Component } from 'react';
import { View, TextInput, Text,TouchableOpacity } from 'react-native';
import { sharedStyle} from '../../styles/shared.style';
import HeaderBarCustom from '../HeaderBarCustom';
import TitleCustom from '../TitleCustom';
import CustomText from '../CustomText';
import infoCustomerStyle from '../../styles/InfoCustomer.style';
import { CheckBox } from 'native-base';
import CustomButtonSubmit from '../CustomButtonSubmit';
import { PREFIX, IP, PORT } from '../../constants/constants';
import { setValueInfoBooking, setValueInfoCustomer, getValueInfoCustomer, setCustomer, InfoBooking } from '../../constants/infobooking';

class InfoCustomerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            passport: '',
            isAccepted: false,
        };
    }

    componentWillUnmount() {
        var id=  Math.floor(Math.random() * 10000) + 1 ;
        let url = PREFIX + IP + ':' + PORT + '/api/Customer/SaveCustomerInfo';
        setCustomer(id, this.state.name, this.state.phone, this.state.email, this.state.passport);
        
        // const respond = fetch(url, {
        //     method: 'POST',
        //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         Id: id,
        //         Name: this.state.name,
        //         Email: this.state.email,
        //         Phone: this.state.phone,
        //         Passport: this.state.passport,
        //     })
        // })
        // const resJson = respond.json();
        // if (resJson) {
        //     alert('Đã thêm thông tin khách hàng');
        //     console.log(id);
        //     console.log("customer" + getValueInfoCustomer('id'))

        // }

            // .then(respond => respond.json())
            // .then((respondJson) => {
            //     if(respondJson){
            //         alert('Đã thêm thông tin khách hàng');
            //         console.log(id);
            //         console.log("customer"+getValueInfoCustomer('id'))

            //     }
            //     return respondJson;
            // }).catch((err) => {
            //     alert('Lỗi hệ thống, vui lòng thử lại');
            //     console.log(err);
            // });
    }

    go = () => {
        let isValid = !(this.state.name.trim() == '' 
                        || this.state.phone.trim() == '');
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        isValid = this.state.isAccepted && reg.test(this.state.email);
        return isValid;
    }

    loadPolicy = () => {

    }

    saveCusomer = async () => {
        if (this.go()) {
            let customer = {
                 name: this.state.name, 
                 phone: this.state.phone, 
                 email: this.state.email, 
                 passport: this.state.passport, 
                }
            this.props.navigation.navigate('TicketInfoScreen', { customerInfo: customer });
        }
        else {
            alert('Điền thiếu thông tin.')
        }
    }

    goToPolicy = () => {
        this.props.navigation.navigate('PolicyScreen');
    }

    render() {
        return (
            <View style={sharedStyle.mainView}>
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Thông tin khách hàng' />

                <View style={sharedStyle.mainContent}>
                    <TextInput style={infoCustomerStyle.inputStyle} placeholder='Họ tên (*)' 
                        onChangeText={val => this.setState({ name: val })} value={this.state.name}></TextInput>
                    <TextInput style={infoCustomerStyle.inputStyle} placeholder='Email (*)'
                        onChangeText={val => this.setState({ email: val })} value={this.state.email}></TextInput>
                    <TextInput style={infoCustomerStyle.inputStyle} placeholder='Số điện thoại (*)'
                        onChangeText={val => this.setState({ phone: val })} value={this.state.phone}></TextInput>
                    <TextInput style={infoCustomerStyle.inputStyle} placeholder='CMND (Hộ chiếu)' 
                        onChangeText={val => this.setState({ passport: val })} value={this.state.passport}></TextInput>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <CheckBox checked={this.state.isAccepted} onPress={() => { this.setState({ isAccepted: !this.state.isAccepted }) }} color='grey' style={{ marginRight: 15 }} />
                        <TouchableOpacity>
                            <CustomText>Chấp nhận điều khoản</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToPolicy}>
                            <Text style={{ fontSize: 12, color: 'green', marginLeft: 30, marginTop: 3 }}>Xem điều khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButtonSubmit title='Tiếp tục' onPress={this.saveCusomer}/>
            </View>
        );
    }
}

export default InfoCustomerScreen;