import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import styles from './styles';

const Header = () => {
    return (
        <LinearGradient
            colors={['#000', '#000']}
            style={styles.header}
        >
            <View style={styles.headerSafeAreaView}>
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