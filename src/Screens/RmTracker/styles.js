import {StyleSheet} from 'react-native'
import color from '../../constant/color'

const styles = StyleSheet.create({

    ImageBackground: {
        flex:1,
        justifyContent:'center',
        height:'100%',
    },


    Input:{
        justifyContent:'flex-start',
        width:'70%',
        color:color.primary,
        backgroundColor:color.secundary,
        borderRadius:10
    },


    containerBackground:{
        flex:1,
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        justifyContent:'center'
    },

    BotonAdd:{
        fontFamily:'Secundario',
        textAlign:'center',
        fontSize:17,
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:'25%'
    },

    ContainerList:{
        flex:1,
        backgroundColor:color.primary,
        justifyContent:'flex-start',
        height:'100%'
    },

    List:{
        flexDirection:'row',
        alignContent:'flex-start',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        width:'100%',
        marginVertical:10
    }, 

    datos:{
        color:color.primary,
        fontFamily:'Secundario',
        fontSize:12
    },

    gradient:{
        ...StyleSheet.absoluteFillObject,
        zIndex:1,
        opacity:.4
    }


})


export default styles