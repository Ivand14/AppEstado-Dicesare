import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({

    Gradient:{
        flex:1,
    },
    
    backgroundImage:{
        flex:1,
        justifyContent:'center',
        height:'100%',
        width:'100%',
    },

    container:{
        flex:1,
        justifyContent:'center',
        height:'100%',
        width:'100%',
    },

    Titulo:{
        fontSize:22,
        margin:10,
        textAlign:'center',
        color:color.secundaryText,
        fontFamily:'Primario',
        fontWeight:700
    },

    Boton:{
        textAlign:'center',
        fontSize:16,
        fontFamily:'Secundario'
    },
    
    Card:{
        borderColor:color.secundary,
        borderWidth:2,
        shadowColor:color.secundary,
        shadowOffset: {width:2,height:1},
        elevation:3,
        opacity:.76
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