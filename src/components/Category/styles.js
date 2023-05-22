import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles=StyleSheet.create({
        containerCategory:{
        flex:1
        },
    
        containerBackground:{
        opacity:.7,
    },
    
    
    ContainerTextBackground: {
        opacity:1,
    },
    
    
    imgBackground: {
        resizeMode: 'cover',
        justifyContent: 'center',
        height:130,
        margin:7 ,
        flex:1,
        justifyContent:'center' 
    },
    
    textBackground: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'justify',
        color:color.colorText,
        marginHorizontal:5,
        textTransform:'uppercase'
    },
    
        
    })

export default styles
