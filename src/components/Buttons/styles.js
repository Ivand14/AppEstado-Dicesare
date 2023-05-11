import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
    
    Button:{
        backgroundColor:color.secundary,
        padding:10,
        borderRadius:20,
        fontSize:15,
        fontWeight:500,
        color:'#fff',
        margin:20,
        padding:15,
    },

    txtButton:{
        fontFamily:'Primario',
        color:color.secundaryText,
    }
    
})

export default styles;