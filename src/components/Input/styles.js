import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
    
    formControl:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },

    label:{
        fontFamily:'Secundario',
        alignItems:'center',
    },

    Input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderColor:color.secundary,
        borderWidth:2,
        alignItems:'center',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        height:50,
        color:color.colorText,
        textAlign:'center'
    },

    error:{
        color:'red'
    }

    
})

export default styles;