import { StyleSheet } from 'react-native';
import { mainColor, bgFrame, leftMargin } from './shared.style';

const detailedDepartureStyle = StyleSheet.create({
    placeFont: {
        fontSize: 17,
        fontWeight: '300',
        color: mainColor
    },

    placeView: {
        //flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: bgFrame,
        padding: leftMargin,

    },

    detailedPlaceView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    fontLable: {
        fontSize: 16,
        color: '#464545',
        fontWeight: '500'
    },

    icon: {
        color: mainColor,
        marginTop: 10
    },
    
    inputStyle:{
        width: '90%', borderColor: '#dddde2', borderBottomWidth: 1
    }
});

export default detailedDepartureStyle;