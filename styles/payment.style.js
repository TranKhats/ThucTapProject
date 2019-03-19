import { StyleSheet } from 'react-native'
import { mainColor, leftMargin } from './shared.style';

export const paymentStyle = StyleSheet.create({
    intro: {
        color: mainColor,
        fontWeight: 'bold'
    },

    content:{
        padding: leftMargin,
        backgroundColor:'white'
    },

    note: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: '100',
        width:'70%'
    },
    row:{
        marginTop:7,
        flexDirection:'row',
        //justifyContent: 'flex-start',
    }
});