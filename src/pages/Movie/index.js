import React from "react";

import { ScrollView, ImageBackground, View } from 'react-native';
import { Title, Button } from 'react-native-paper';

import styles from "./styles";

const Movie = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: 'https://images2.alphacoders.com/551/551538.jpg' }} style={styles.hero} />
            <View style={styles.containerPadding}>
                <Title>Nome do Filme</Title>

                <Button style={styles.buttonPlay} icon="play" mode="contained" color="#fff" uppercase={false}>
                    Assistir
                </Button>
            </View>
        </ScrollView>
    );
};

export default Movie;