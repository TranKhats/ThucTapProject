import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import Seat from './Seat';
import HeaderBarCustom from './HeaderBarCustom';
import TitleCustom from './TitleCustom';
import chooseSeatStyle from '../styles/chooseSeat.style';
import CustomButtonSubmit from './CustomButtonSubmit';
import { ButtonGroup } from 'react-native-elements';
import { bgColor, sharedStyle } from '../styles/shared.style';
import chooseLyingSeatStyle from '../styles/chooseLyingSeat.style';

class ChooseLyingSeatScreen extends Component {
    render() {
        const buttons = ['Hello', 'Buttons']
        //const { selectedIndex } = this.state
        return (
            <View style={sharedStyle.mainView}>
                <HeaderBarCustom/>
                <TitleCustom action='Chọn ghế' />

                <View style={chooseLyingSeatStyle.mainContent}>
                    <View >
                        <ButtonGroup
                            onPress={this.updateIndex}
                            //selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{ height: 35 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                        </View>

                        <View>
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                        </View>

                        <View>
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={false} />
                            <Seat stateSeat={true} />
                            <Seat stateSeat={false} />
                        </View>
                    </View>

                </View>
                <CustomButtonSubmit title='Tiếp tục' />

            </View>

        );
    }
}

export default ChooseLyingSeatScreen;