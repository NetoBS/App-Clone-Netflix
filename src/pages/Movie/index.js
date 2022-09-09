import React, { useState } from "react";

import { 
    ScrollView, 
    ImageBackground, 
    View, 
    TouchableOpacity, 
    Text, 
    FlatList,
} from 'react-native';
import { Title, Button, Paragraph, Caption } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonVertical from "../../components/ButtonVertical";
import Sections from "../../components/Sections";
import Episode from "../../components/Episode";

import styles from "./styles";

const Movie = () => {
    const [type] = useState('serie')

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: 'https://images7.alphacoders.com/113/1134920.jpg' }} style={styles.hero} />
            <View style={styles.containerPadding}>
                <Title>Nome do Filme</Title>

                <Button style={styles.buttonPlay} icon="play" mode="contained" color="#fff" uppercase={false}>
                    Assistir
                </Button>

                <Paragraph>
                    Após Thanos eliminar metade das criaturas vivas de todo o universo, 
                    os heróis sobreviventes precisam lidar com a dor da perda de amigos e seus entes queridos.
                </Paragraph>

                <Caption style={styles.captionInfos}>
                    Elenco:{' '}
                        <Caption style={styles.captionWhite}>
                            Downey Jr., Hemsworth, Evans, Pratt, Rudd, Cumberbatch, Holland.
                        </Caption>{' '}
                    Gênero:{' '}
                        <Caption style={styles.captionWhite}>
                            Ação, Super-herói, Aventura, Ficção científicaFantasia, The Avengers/Genres. 
                        </Caption>{' '}
                    Cenas e momentos:{' '}
                        <Caption style={styles.captionWhite}>
                            The Avengers/Genres. 
                        </Caption>
                </Caption>

                <View style={styles.menuIcons}>
                    <ButtonVertical icon="plus" text="Minha Lista" />
                    <ButtonVertical icon="thumb-up" text="Classifique" />
                    <ButtonVertical icon="send" text="Compartilhe" />
                    <ButtonVertical icon="download" text="Baixar" />
                </View>

                {type == 'serie' && (
                <>
                    <TouchableOpacity style={styles.buttonSeason}>
                        <Text style={styles.seasonName}>Temporada 1</Text>
                        <Icon name="chevron-down" color="#fff" size={20} />
                    </TouchableOpacity>

                    <FlatList 
                        data={[1, 2, 3, 4]}
                        renderItem={({item, index}) => <Episode key={index}/>}
                    />
                </>
            )}
            </View>

            {type == 'filme' && <Sections hasTopBorder />}
            
        </ScrollView>
    );
};

export default Movie;