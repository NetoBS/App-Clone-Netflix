import React from 'react';
import { View, TouchableOpacity, FlatList, Image } from "react-native";

import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Previews = () => {
    return (
        <FlatList
            horizontal
            style={styles.flatListContainer}
            data={[1,2,3,4,5,6]}
            renderItem={({ item, index }) => (
                <TouchableOpacity 
                    key={index} 
                    style={{ marginLeft: index == 0 ? 20 : 0, marginRight: 10}}>
                    <View style={styles.circle}>
                    <Image 
                        style={styles.capa} 
                        source={{uri: 'https://images7.alphacoders.com/113/1134920.jpg'}}
                    />

                    <Image 
                        resizeMode="contain"
                        style={styles.logo} 
                        source={{uri: 'https://www.seekpng.com/png/full/132-1325626_infinity-war-desktop-wallpaper-and-newest-trailer-avengers.png'}}
                    /> 

                    <LinearGradient
                        style={styles.gradient}
                        colors={['rgba(0,0,0,0)', '#16162a']} 
                    />
                </View>
            </TouchableOpacity>
        )}
    />
    );
};

export default Previews;