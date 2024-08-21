import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './SignUp.styles';

const SignUp = () => {
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
                        />

                        <Text style={styles.userText}>Şifreniz</Text>
                        <TextInput
                            placeholderTextColor='#6C2A09'
                            style={styles.TextInput}
                            placeholder='Şifre...'
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Üye Ol</Text>
                    </TouchableOpacity>
                   
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUp;
