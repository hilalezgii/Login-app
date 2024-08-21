import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#faf0e6',
        flex: 1
    },
    inputWrapper: {
        flex: 1,

    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        objectFit: 'contain',
        marginTop: 30,
    },
    userText: {
        fontWeight: '700',
        color: '#6C2A09',
        marginLeft: 16,
        fontSize: 16,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6C2A09',
        marginTop: 5,

    },
    inputContainer: {
        marginTop: 30,
    },
    TextInput: {
        height: 50,
        width: 350,
        outline: 'none',
        marginHorizontal: 12,
        marginBottom: 12,
        marginTop: 4,
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: 'rgba(108, 42, 9, 0.45)',
        backgroundColor: 'rgba(108, 42, 9, 0.25)',
        padding: 5,
        borderRadius: 10,
        color: '#6C2A09'
    },
    button: {
        height: 50,
        width: 350,
        outline: 'none',
        margin: 12,
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#FFB901',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#6C2A09',
        fontWeight: '700',

    },


})