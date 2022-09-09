import React from 'react';

import { Text, View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Title } from 'react-native-paper';

import styles from './styles';

const Sections = ({ hasTopBorder }) => {
    return (
        <View style={styles.container}>
            
        {hasTopBorder && <View style={styles.borderTop} />}

            <Title style={styles.sectionsTitle}>Nome da Seção</ Title>

            <FlatList
                style={styles.list}
                horizontal
                data={[1, 2, 3, 4, 5, 6,]}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                        <ImageBackground 
                            style={[styles.capa, {marginRight: 10, marginLeft: index == 0 ? 20 : 0},]}
                            source={{ uri: 'https://images7.alphacoders.com/113/1134920.jpg' }}
                        >
                            <Image 
                                resizeMode="contain" 
                                style={styles.logo} 
                                source={{ uri: 'https://www.seekpng.com/png/full/132-1325626_infinity-war-desktop-wallpaper-and-newest-trailer-avengers.png' }} 
                            />
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Sections;