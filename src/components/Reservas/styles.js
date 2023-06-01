import { StyleSheet } from "react-native";
import color from "../../constant/color";

const styles = StyleSheet.create({
    
    Container:{
        flex:1
    },

    Reserva:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:color.colorText,
        borderWidth:2,
        borderRadius:13,
        margin:5,
        alignItems:'center',
        backgroundColor:color.colorText
    },
    

    Date:{
        padding:20,
        backgroundColor:color.terciary,
        borderTopLeftRadius:11,
        borderBottomLeftRadius:11
    },

    TextDate:{
        color:color.colorText
    },

    Quantity:{
        backgroundColor:'grey',
        width:'60%',
        marginHorizontal:15,
        padding:15,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10
    },

    TextQaunt:{
        color:color.colorText,
        fontSize:15,
        fontFamily:'Secundario'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 650,
        backgroundColor:color.terciary,
        height:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        gap:20,
        padding:20

    },

    ButtonReservar:{
        flexDirection:'row',
        gap:5,
        justifyContent:'flex-start',
        marginHorizontal:5,
        alignItems:'center',
        width:'100%'
    },

    textModal:{
        fontSize:18,
        color:color.colorText
    }

    
})

export default styles;