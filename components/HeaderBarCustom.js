import React,{Component} from 'react'
import {Header,Icon} from 'react-native-elements'
import  {View,Text} from 'react-native'
import {loginStyle} from '../styles/login.style'
import { mainColor } from '../styles/shared.style';
import { DrawerActions } from 'react-navigation';

class HeaderBarCustom extends Component{
    constructor(props){
        super(props);

    }

    render (){
        return (
            <Header backgroundColor={mainColor} leftComponent={{
                icon: 'menu', color: '#fff',
                onPress: () => {
                    this.props.navigation.dispatch(DrawerActions.openDrawer());
                }
            }}
                centerComponent={{ text: 'THÀNH BƯỞI', style: { color: '#fff', fontSize: 20, fontStyle: "italic", fontWeight: 'bold' } }}
            />          
        );
    }  

}

export default HeaderBarCustom