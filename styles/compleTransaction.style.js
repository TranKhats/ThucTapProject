import {StyleSheet} from 'react-native';
import { leftMargin } from './shared.style';

const completeTransactionStyle=StyleSheet.create({
    interiorView:{ 
        flexDirection: 'row' ,
        justifyContent:'space-between', 
        marginTop: leftMargin 
    },

    card:{ width: 50, height: 20, resizeMode: 'contain' }
});

export default completeTransactionStyle;