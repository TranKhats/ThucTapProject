import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import HeaderBarCustom from '../HeaderBarCustom';
import TitleCustom from '../TitleCustom';
import Seat, { SeatState } from '../Seat';
import chooseSeatStyle from '../../styles/chooseSeat.style';
import CustomButtonSubmit from '../CustomButtonSubmit';
import { getValueInfoBooking, setValueInfoBooking, InfoBooking } from '../../constants/infobooking';

class ChooseSeatScreen extends Component {
    constructor(props) {
        super(props)
        this.seats = this.props.navigation.getParam('seats', null);
        this.preThis = this.props.navigation.getParam('bindThis', null);
        this.quantity = getValueInfoBooking('quantity');
        this.seatArr = new Array();
        this.seatRow = 7;
    }

    renderColumn = (start) => {
        var output = new Array(); 
        var tempItem;
        for (i = start; i <= this.seatRow + start; i++) {
            tempItem = '';
            if (this.seats.findIndex(t => t.Name == i) > -1) {
                tempItem = (
                    <Seat key={i} nameSeat={i} stateSeat={SeatState.UNAVAILABLE} 
                        chooseSeatFunction={this.chooseSeat} cancleSeatFunction={this.cancleSeat} />
                );    
            }
            else{
                if (InfoBooking.seats.findIndex(t => t.Name == i) > -1) {
                    tempItem = (
                        <Seat key={i} nameSeat={i} stateSeat={SeatState.BUSY}
                            chooseSeatFunction={this.chooseSeat} cancleSeatFunction={this.cancleSeat} />
                    );
                }
                else {
                    tempItem = (
                        <Seat key={i} nameSeat={i} stateSeat={SeatState.ALREADY}
                            chooseSeatFunction={this.chooseSeat} cancleSeatFunction={this.cancleSeat} />
                    );
                }
            }
            output.push(tempItem);
        }
        // InfoBooking.seats.forEach(item => {
        //     console.log(item);
        //     console.log(output[item.Name]);
        //     output[item.Name].props.stateSeat = SeatState.BUSY;
        //     console.log(output[item.Name]);
        // });
        return output;      
    }

    chooseSeat = (seatName) => {  
        console.log(this.preThis.state.seatName)
        if (this.seatArr.length < this.quantity) {
            var idSeat = seatName + this.preThis.state.idJourney + this.preThis.state.Vehicle;
            let seats = 'Ghế ' + seatName + ', ';
            this.preThis.setState({
                idSeat: idSeat,
                // seatName: seatName,
                seatName: this.preThis.state.seatName + seats,
            })
           
            let seat = { Id: idSeat, Name: seatName }
            this.seatArr.push(seat);
        } 
        setValueInfoBooking('seats', this.seatArr);
    }//ham chon ghe truy qua component SeatScreen

    cancleSeat = (seatName) => {
        var idSeat = seatName + this.preThis.state.idJourney + this.preThis.state.Vehicle;
        this.seatArr.splice(this.seatArr.findIndex(t => t == idSeat), 1)
        setValueInfoBooking('seats', this.seatArr);//xoa ghe bi bo
        console.log(getValueInfoBooking('seats'));
    }

    goToNextStep = () => {
        if (getValueInfoBooking('seats').length == this.quantity) {
            this.props.navigation.navigate('DetailedDepartureScreen')
        }
        else {
            alert('Bạn phải chọn đủ ' + this.quantity + ' ghế')
        }
    }

    render() {
        return (
            <View>
                <HeaderBarCustom navigation={this.props.navigation} />
                <TitleCustom navigation={this.props.navigation} action='Chọn ghế' />

                <View style={chooseSeatStyle.mainContent}>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            {this.renderColumn(1)}
                        </View>
                        <View>
                            {this.renderColumn(this.seatRow + 1)}
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            {this.renderColumn(2 * this.seatRow + 1)}
                        </View>
                        <View>
                            {this.renderColumn(3 * this.seatRow + 1)}
                        </View>
                    </View>

                </View>
                <CustomButtonSubmit onPress={this.goToNextStep} title='Tiếp tục' />
            </View>

        );
    }
}

export default ChooseSeatScreen;