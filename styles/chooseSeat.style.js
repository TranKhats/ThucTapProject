import { StyleSheet } from 'react-native';
import { mainColor, leftMargin, bgColor, bgFrame } from './shared.style';

const chooseSeatStyle = StyleSheet.create({
    mainContent: {
        backgroundColor: 'white',
        paddingRight: 70,
        paddingLeft: 70,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default chooseSeatStyle;