import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    menuHeader: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonText: {
        color: '#fff',
    },
    menuButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;