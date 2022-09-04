import React, { useState } from 'react';
import {Image, View} from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from './styles'

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
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
                    mode='flat'
                    label="Senha"
                    secureTextEntry
                    style={styles.marginBottom}
                    value={credenciais.senha}
                    onChangeText={(text) => setCredenciais({ ...credenciais, email: senha})}
                />
            </View>
            
        </View>
    );
};

export default Login;