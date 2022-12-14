import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import styles from './styles';

const Header = () => {
    return (
        <LinearGradient
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
            style={styles.header}
        >
            <View style={styles.headerSafeAreaView}>
                <Image source={require('../../assets/NewLogo.png')}/>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Minha Lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default Header;