import React from 'react'
import styles from './LoginPage.style'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/coffee.jpg')} />
            <Text style={styles.text}>Giriş Yap, Kahve Keyfini Yaşa!</Text>
            <View style={styles.inputContainer}>

                <Text style={styles.userText}>E-Mail Adresiniz</Text>
                <TextInput
                    placeholderTextColor='#6C2A09'
                    style={styles.TextInput}
                    placeholder='Email...' />

                <Text style={styles.userText}>Şifreniz</Text>
                <TextInput
                    placeholderTextColor='#6C2A09'
                    style={styles.TextInput}
                    placeholder='Şifre...' />

            </View>
            <TouchableOpacity style={styles.button}>
                <Text style ={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    )

}
export default LoginScreen;