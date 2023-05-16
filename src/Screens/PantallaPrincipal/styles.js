import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
        containerHome: {
            flex: 1,
            backgroundColor:color.primary,
            justifyContent:'center'
        },
        
        containerBackground:{
            opacity:.7,
        },

        
        imgBackground: {
            resizeMode: 'cover',
            justifyContent: 'center',
            height:130,
            margin:7  
        },
        
        
        ContainerTextBackground: {
            opacity:1,
        },
        
        textBackground: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'justify',
            color:color.colorText,
            marginHorizontal:5
        },

        containerBackgroundAnotaciones:{
            opacity:.7,
            flexDirection:'row',
            justifyContent:'center',
            width:'100%',
        },

        imgBackgroundAnotaciones: {
            resizeMode: 'cover',
            justifyContent: 'center',
            height:120,
            padding:19,
            marginHorizontal:5,
            width:200
        },

        textBackgroundAnotaciones: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'justify',
            color:color.colorText,
            marginHorizontal:5
        },

    
})

export default styles;