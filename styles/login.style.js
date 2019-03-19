import { StyleSheet } from 'react-native'

export const loginStyle = StyleSheet.create({
    inputStyle: {
        width: '100%',
        borderColor: '#dddde2',
        borderBottomWidth: 1,
        height: 35,
        marginBottom: 5
    },

    submitButton: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },

    imageOtherLogin:{ width: 50, height: 30, resizeMode: 'contain' }
});
