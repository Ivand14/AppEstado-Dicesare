import { StyleSheet } from "react-native";
import color from '../../constant/color';

export const styles= StyleSheet.create({
    itemContainer:{
        backgroundColor:color.terciary,
        borderColor:color.colorText,
        borderWidth:5,
        height:'70%',
        marginVertical:50,
        justifyContent:"flex-start"
    },

    Container:{
        flex:1,
        justifyContent:'center',
        height:'100%'
    },

    ContainerCarousel:{
        flex:1,
        justifyContent:'center',
        height:'50%',
    },


    imageStyle:{
        height:200,
        width:200,
        opacity:.2,
        marginVertical:'50%',
        marginHorizontal:50
    },

    TextCarousel:{
        fontSize:18,
        fontFamily:'Secundario',
        marginVertical:4,
        color:color.colorText
    },


    TitleCarousel:{
        fontSize:18,
        textAlign:'center',
        marginVertical:10,
        borderBottomColor:color.secundary,
        borderBottomWidth:1,
        width:'100%',
        textTransform:'uppercase',
        color:color.colorText
    }

})
