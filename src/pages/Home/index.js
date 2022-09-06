import React from "react";
import { View, ScrollView, TouchableOpacity, FlatList, Image } from "react-native";

import styles from "./styles";
import { Button, Title } from "react-native-paper";

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from "../../components/ButtonVertical";
import Previews from "../../components/Previews";



const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Hero />
            
            <View style={styles.menuHeader}>
                <ButtonVertical icon="plus" text="Minha Lista" />
                <Button icon="play" mode="contained" color="#fff" uppercase={false}>
                    Assistir
                </Button>
                <ButtonVertical icon="information-outline" text="Saiba Mais" />
            </View>
            
            <View style={styles.previewContainer}>
                <Title style={styles.previewTitle}>Prévias</Title>
                <Previews />
            </View>
        </ScrollView>
    )
}

export default Home;