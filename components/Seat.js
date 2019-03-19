import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { getValueInfoBooking } from '../constants/infobooking';

export const SeatState = {
    BUSY: 'yellow',
    ALREADY: 'white',
    UNAVAILABLE: '#cccccc',
}

class Seat extends Component {
    constructor(props) {
        super(props);
        var color;
        color = this.props.stateSeat;
        this.state = { stateColorSeat: color }
        this.quantity = getValueInfoBooking('quantity');
    }

    onPressSeat = () => {
        switch (this.state.stateColorSeat) {
            case SeatState.ALREADY: {
                if (getValueInfoBooking('seats').length < this.quantity) {
                    this.props.chooseSeatFunction(this.props.nameSeat);
                    this.setState({ stateColorSeat: SeatState.BUSY });
                } else {
                    alert('Số lượng ghế đã chọn là tối đa ' + this.quantity + ' người!')
                }
            }
                break;
            case SeatState.BUSY: {
                this.setState({ stateColorSeat: SeatState.ALREADY })
                this.props.cancleSeatFunction(this.props.nameSeat)
            }
                break;
            default: {
                alert('Ghế này đã được bán');
            }
                break;
        }
    }

    render() {
        return (
            <TouchableHighlight
                style={{
                    marginLeft: 10,
                    marginBottom: 10,
                    width: 35,
                    height: 35,
                    backgroundColor: this.state.stateColorSeat,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#8e8b8b'
                }}
                underlayColor='#fff257e0'
                onPress={this.onPressSeat}
            >
                <Text style={{ fontSize: 17 }}> {this.props.nameSeat} </Text>
            </TouchableHighlight>);
    }
}

export default Seat;