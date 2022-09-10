import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles'

const Login = ({ navigation }) => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    })
    return (
        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />

            <View>
                <TextInput
                    mode='flat'
                    label="Email ou número de telefone"
                    style={styles.marginBottom}
                    value={credenciais.email}
                    onChangeText={(text) => setCredenciais({ ...credenciais, email: text})}
                />

                <TextInput
                    label="Senha"
                    mode='flat'
                    secureTextEntry
                    style={styles.marginBottom}
                    value={credenciais.senha}
                    onChangeText={(text) => setCredenciais({ ...credenciais, senha: text})}
                />

                <Button
                    mode="contained"
                    style={styles.marginBottom}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                    Entrar
                </Button>

                <Button
                    style={styles.marginBottom}
                    onPress={() => console.log('Pressed')}
                    theme={{colors: {primary: '#fff'}}}>
                    Recuperar Senha
                </Button>

                <Text style={styles.textSmall}>
                    O acesso está protegido pelo Google reCAPTCHA para garantir que você não é
                    um robo. Saiba mais.
                </Text>
            </View>
            
        </View>
    );
};

export default Login;