import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
import { Button } from "react-native-paper";

import Header from '../../components/Header';
import Hero from '../../components/Hero';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            
            <View style={styles.menuHeader}>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon name="plus" color="#fff" size={20} />
                    <Text style={styles.buttonText}>Minha Lista</Text>
                </TouchableOpacity>

                <Button icon="play" mode="contained" color="#fff" uppercase={false}>
                    Assistir
                </Button>

                <TouchableOpacity style={styles.menuButton}>
                    <Icon name="information-outline" color="#fff" size={20} />
                    <Text style={styles.buttonText}>Saiba Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;