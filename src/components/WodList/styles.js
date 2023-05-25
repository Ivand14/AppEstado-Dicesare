import {StyleSheet} from 'react-native'
import color from '../../constant/color'

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:20,
        borderColor:color.secundary,
        borderWidth:2,
        borderRadius:10,
        backgroundColor:color.primary,
        opacity:.7
    },

    Title:{
        fontSize:25,
        textAlign:'center',
        fontFamily:'Secundario',
        marginVertical:10,
        color:color.secundary
    },

    Text:{
        fontFamily:'Primario',
        fontSize:17,
        color:color.colorText
    },

    Exercises:{
        flex:1,
        gap:10,
        margin:10,
        padding:10
    },

    containerExercise:{
        flex:1,
        gap:10
    }

})

export default styles