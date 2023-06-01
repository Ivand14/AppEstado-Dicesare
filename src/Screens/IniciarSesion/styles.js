import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
    
    ImageBackground:{
        flex:1,
        justifyContent: 'center',
        height:'100%',
        width:'100%',
    },

    CardLogin:{
        opacity:.7,
        borderColor:color.secundary,
        borderWidth:2,
        shadowColor: color.primary,
        shadowOffset: {width:3,height:2},
        elevation:4
    },

    BotonLogin:{
        fontSize:15,
        fontFamily:'Secundario',
        textAlign:'center',
    },

    Input:{
        width:'85%',
        borderTopRightRadius:10,
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0
    },

    containerInputIcon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    Icon:{
        backgroundColor:color.primary,
        padding:5,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:8,
    },
    
    Titulo:{
        fontSize:25,
        margin:10,
        textAlign:'center',
        color:color.secundaryText,
        fontFamily:'Secundario',
    },

    Gradient:{
        flex:1,
    }

    
})

export default styles;