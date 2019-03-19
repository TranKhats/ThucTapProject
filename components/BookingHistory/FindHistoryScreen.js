import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator,ProgressBarAndroid } from 'react-native';
import { Button, Text } from 'native-base'
import { sharedStyle } from '../../styles/shared.style';
import HeaderBarCustom from '../HeaderBarCustom';
import TitleCustom from '../TitleCustom';
import { PREFIX, IP, PORT } from '../../constants/constants';
import Loader from '../ShareComponent/loader';

class FindHistoryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { idTicket: '', isLoading: false }
    }

    findHistoryTicket = async(idTicket) => {
        this.setState({ isLoading: true })
        let url = PREFIX + IP + ':' + PORT + '/api/Ticket/FindHistoryBooking?idTicket=' + idTicket;
        const respond = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        })
        const resJson= await respond.json()
        console.log(resJson)
        if (resJson != null) {
            this.props.navigation.navigate('ShowHistoryScreen', { detailHistoryBooking: resJson });
        }
        else{
            alert('Nhap  lai ma dat ve')
        }
        this.setState({ isLoading: false })
    }

    render() {

        return (
            <View style={sharedStyle.mainView}>
                <Loader loading={this.state.isLoading} />
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.navigation} action='Xem lịch sử vé' />
                <View style={{backgroundColor: 'white' }}>
                    <View style={{ width: '90%', padding: 15 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ marginTop: 7, padding: 15 }}>Nhập mã xác thực (Khách hàng nhận được qua SMS hoặc HardToken)</Text>
                            <TextInput style={style.inputStyle} editable={true} maxLength={400}
                                onChangeText={(text) => this.setState({ idTicket: text })} />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 15, alignItems: "center", justifyContent: "center" }}>
                    <View>
                        <Button style={[sharedStyle.fontButton, { width: 150 }]}
                            onPress={() => { this.findHistoryTicket(this.state.idTicket) }}>
                            <Text style={{ color: 'white' }} uppercase={false}> Xem lịch sử vé </Text>
                        </Button>
                    </View>
                </View>
                
            </View>
        );
    }
}

export default FindHistoryScreen;

const style = StyleSheet.create({
    inputStyle: {
        width: '50%',
        height: 35,
        borderColor: '#dddde2',
        borderWidth: 1
    }
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      padding: 10,
    },
  });