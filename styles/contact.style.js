import {StyleSheet} from 'react-native';
import { mainColor, leftMargin } from './shared.style';

const contactStyle = StyleSheet.create({
    company:{
        fontWeight:'bold',        
    },
    viewCompany:{ 
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center' 
    },

    textSlogant: {
        fontSize: 21,
        color: mainColor,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: leftMargin
    },

    infoContact:{
        justifyContent:'center',
        alignItems:'center'
    }
});

export default contactStyle;