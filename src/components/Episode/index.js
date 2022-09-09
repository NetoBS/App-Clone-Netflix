import React from "react";

import { Image, TouchableOpacity, View } from "react-native";
import { Caption, Title } from "react-native-paper";
import styles from "./styles";

const Episode = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.capa} source={{ uri: 'https://images7.alphacoders.com/113/1134920.jpg' }}/>
                <View>
                    <Title style={{fontSize: 15}}>1. Nome do Episódio</Title>
                    <Caption>45 mins.</Caption>
                </View>
            </View>
            <Caption>
                a série mostra um universo em que o Doutor Estranho não teve suas mãos afetadas 
                pelo acidente de trânsito. Na verdade, ele acaba perdendo Christine Palmer, o amor de sua vida.
            </Caption>
        </TouchableOpacity>
    )
};

export default Episode;