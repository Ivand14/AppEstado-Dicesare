import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
    
    backgroundImage:{
        flex:1,
        justifyContent:'center',
        height:'100%',
        width:'100%',
        opacity:.75
    },

    Titulo:{
        fontSize:22,
        marginHorizontal:10,
        padding:10,
        textAlign:'center',
        color:color.secundaryText,
        fontFamily:'Secundario',
    },

    Boton:{
        textAlign:'center',
        marginHorizontal:50,
        fontSize:13,
        fontFamily:'Secundario'
    },
    
    Card:{
        borderColor:color.secundary,
        borderWidth:2,
        shadowColor:color.secundary,
        shadowOffset: {width:2,height:1},
        elevation:3,
        opacity:.989
    },

    input:{
        textAlign:'center',
    },

    Text:{
        fontSize:12,
        color:color.colorText,
        textAlign:'center',
        fontFamily:'Secundario'
    }
})

export default styles;