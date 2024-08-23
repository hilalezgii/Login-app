import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './SignUp.styles';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (name && email && password) {
            // Kayıt işlemini burada gerçekleştirebilirsiniz.
            Alert.alert('Başarılı', 'Kayıt işlemi başarılı!');
            // Kayıt başarılı olduktan sonra Login ekranına yönlendirebilirsiniz:
            navigation.navigate('Login');
        } else {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
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

                        <Text style={styles.userText}>Adınız</Text>
                        <TextInput
                            placeholderTextColor='#6C2A09'
                            style={styles.TextInput}
                            placeholder='Adınız...'
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.userText}>E-Mail Adresiniz</Text>
                        <TextInput
                            placeholderTextColor='#6C2A09'
                            style={styles.TextInput}
                            placeholder='Email...'
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.userText}>Şifreniz</Text>
                        <TextInput
                            placeholderTextColor='#6C2A09'
                            style={styles.TextInput}
                            placeholder='Şifre...'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                     
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Üye Ol</Text>
                    </TouchableOpacity>
                   
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUp;
