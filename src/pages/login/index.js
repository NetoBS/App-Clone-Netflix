import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles'

const Login = () => {
    return (
        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
    );
};

export default Login;