import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    video:{
        flex:1,
        opacity:.6
    },

    containerTextVideo:{
        position:'absolute',
        top: 10,
        left: 0,
        right: 0,
        bottom: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex:2
        
    },

    textVideo:{
        color:color.colorText,
        fontSize:30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -2, height: 3 },
        textShadowRadius: 10,
        fontFamily:'Primario',
        
    },

    logo:{
        height:100,
        width:100
    },

    subTextVideo:{
        color:color.colorText,
        fontSize:20,
        textAlign:'center',
        marginHorizontal:20,
        fontWeight:600,
        fontFamily:'Secundario'
    },

    buttonsGroup:{
        flexDirection:'column',
    },

    ButtonLogin:{
        textAlign:'center',
        fontFamily:'Secundario',
        padding:5,
        borderRadius:6,
        fontSize:18,
    },

    TextRegistrate:{
        color:color.colorText,
        fontSize:17,
        fontFamily:'Secundario',
    },

    txtButton:{
        textDecorationLine:"underline",
    }
})

export default styles;