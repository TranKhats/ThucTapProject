import { StyleSheet } from 'react-native';
import { leftMargin, mainColor } from './shared.style';

const searchTicketStyle = StyleSheet.create({
    fontLable: {
        fontSize: 16,
        color: '#464545',
        fontWeight: '500'
    },

    date: {
        padding: leftMargin,
        borderColor: '#c7c6c6',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },

    icon: {
        color: mainColor,
        marginTop: 10
    },

    inputStyle:{
        width: '90%', borderColor: '#dddde2', borderBottomWidth: 1
    }
});

export default searchTicketStyle;