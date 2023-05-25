import { StyleSheet } from "react-native";
import color from "../../constant/color";

export const styles = StyleSheet.create({

    container: {
        flex: 2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:color.primary,
        margin:5,
        borderRadius:10,
        opacity:.8,
        borderColor:color.secundary,
        borderWidth:2
    },

    number:{
        fontFamily:'Primario',
        color:color.primary,
        fontSize:30,
        color:color.colorText,
    },

    ButtonsGroup:{
        flexDirection:'row',
        gap:10
    }
})

 

