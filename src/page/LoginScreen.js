import React from 'react'
import styles from './LoginPage.style'
import { Image, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/coffee.jpg')} />
            <Text style={styles.text}>Giriş Yap, Kahve Keyfini Yaşa!</Text>
        </View>
    )

}
export default LoginScreen;