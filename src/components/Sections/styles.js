import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    sectionsTitle: {
        marginLeft: 20,
    },
    list: {
        width: '100%',
        height: 180,
        marginTop: 10,
        marginBottom: 30,
    },
    capa: {
        width: 120,
        height: 180,
        borderRadius: 4,
        overflow: 'hidden',
    },
    logo: {
        width: 100,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        alignSelf: 'center',
    },
});

export default styles;