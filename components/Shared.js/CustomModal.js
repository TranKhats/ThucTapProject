import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../CustomText';

class CustomModal extends Component{
    constructor(props) {
        super(props);
        this.state = { isVisible: false, }
    }

    pressOK = () => {
        this.setState({ isVisible: false });
        if (this.props.clickOk == null){
            return;
        }
        this.props.clickOk;//clickOK()  là một method từ component khác
    }

    pressCancel = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render(){
        console.log(this.state.isVisible)

        return (
            <View style={{marginTop:100}}>
                                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.state.isVisible}
                    onRequestClose={() => { console.log('4567') }}>
                    <View style={style.modal}>
                    <CustomText>{this.props.message}</CustomText>
                        <TouchableOpacity onPress={this.pressOK}>
                            <Text>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>OK</Text>
                    </TouchableOpacity>
                    </View>             
                </Modal>


            </View>
        )
    }
}

export default CustomModal

var style=StyleSheet.create({
    modal:{
        backgroundColor: 'white',
        margin: 150,
        alignItems: undefined,
        justifyContent: undefined,
    }
})