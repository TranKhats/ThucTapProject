import {StyleSheet} from 'react-native';
import { mainColor, leftMargin, bgColor, bgFrame } from './shared.style';

const companyStyle = StyleSheet.create({
    mainView:{
        backgroundColor: bgFrame,
        paddingTop:leftMargin,
    },

    company:{
        fontWeight:'bold',        
    },
    viewCompany:{ 
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },

    textSlogant: {
        fontSize: 21,
        color: mainColor,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: leftMargin,
        paddingBottom: leftMargin
    },

    infoContact:{
        justifyContent:'center',
        alignItems:'center'
    },

    contentView:{ 
        backgroundColor: 'white',
        padding: leftMargin
    }
});

export default companyStyle;