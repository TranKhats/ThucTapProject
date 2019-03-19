import { StyleSheet } from 'react-native'

export const mainColor = '#03a720';
export const leftMargin = 15;
export const bgColor = '#ebedef';
export const bgFrame = '#eceef1fa';

export const sharedStyle = StyleSheet.create({
    mainView: {
        backgroundColor: bgColor,
        height: '100%'
    },
    mainContent: {
        backgroundColor: 'white',
        padding: leftMargin
    },
    titleFrame: {
        color: 'red',
        height: 60,
        width: '100%',
        backgroundColor: bgFrame,
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: '#e6e9ea'
    },
    fontButton: {
        fontSize: 15,
        width: 100,
        justifyContent: 'center',
        //color:'white',
        textAlign: 'center',
        height: 30,
        backgroundColor: mainColor
    },
    input: {
        //marginTop: 15,
        //width: '100%',
        height: 25,
        borderWidth: 1,
        borderColor: '#e6e9ea',
        width: '50%', marginLeft: 50
    },

    alignButton: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },

    fontWord: {
        fontSize: 15,
        fontWeight: '900',
        color: '#332f2f'
    },

    // titleFrame: {
    //     color: 'red',
    //     height: 60,
    //     width: '100%',
    //     backgroundColor: '#eceef1fa',
    //     flexDirection: 'row',
    //     padding: 15,
    //     borderWidth: 1,
    //     borderColor: '#e6e9ea'
    // },
    textTitle: {
        width: '100%',
        textAlign: 'center',

    },

    content: {
        width: '100%',
        padding: 15,
    },
    input: {
        marginTop: 15,
        //width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: '#e6e9ea'
    },
    // fontButton: {
    //     fontSize: 15,
    //     width: 100,
    //     justifyContent:'center',
    //     color:'black',
    //     textAlign:'center',
    //     height:30
    // },
});