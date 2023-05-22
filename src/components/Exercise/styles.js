import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
        container: {
        height: 220,
        overflow: 'hidden',
        },
        imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        },
        gradient: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
        opacity: 0.5,
        },
        text: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        textAlign: 'left',
        color: color.colorText,
        textTransform: 'uppercase',
        fontFamily: 'Secundario',
        fontSize: 20,
        zIndex: 2,
        },
    });

    export default styles