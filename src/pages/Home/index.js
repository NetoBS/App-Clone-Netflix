import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import Header from '../../components/Header';
import Hero from '../../components/Hero';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            <Text>Home</Text>
        </View>
    )
}

export default Home;