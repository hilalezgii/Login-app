import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './LoginPage.style';

const LoginScreen = ({ navigation }) => {
    const eMail = 'hilalezgi@hotmail.com'; 
    const password = '123';

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleLogin = () => {
        if (inputEmail === eMail && inputPassword === password) {
            Alert.alert('Başarılı', 'Giriş başarılı!');
        } else {
            Alert.alert('Hata', 'E-mail veya şifre yanlış.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='padding'
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/coffee.jpg')}
                    />
                    <Text style={styles.text}>Giriş Yap, Kahve Keyfini Yaşa!</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.userText}>E-Mail Adresiniz</Text>
                        <TextInput
                            placeholderTextColor='#6C2A09'
                            style={styles.TextInput}
                            placeholder='Email...'
                            value={inputEmail}
                            onChangeText={setInputEmail}
                        />

                        <Text style={styles.userText}>Şifreniz</Text>
                        <TextInput
                            placeholderTextColor='#6C2A09'
                            style={styles.TextInput}
                            placeholder='Şifre...'
                            secureTextEntry
                            value={inputPassword}
                            onChangeText={setInputPassword}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Giriş Yap</Text>
                    </TouchableOpacity>
                    <View style={styles.link}>
                        <Text>Sen hala üye olmadın mı ? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={styles.buttonText}>Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;
