import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    Container:{
      flex:1,
    },

    ContainerDescriptions:{
      flex:1,
      justifyContent:'flex-start',
      height:500
    },

    Text:{
      fontSize:18,
      fontFamily:'Secundario',
      textTransform:'capitalize'
    },

    iconText:{
      flexDirection:'row',
      alignItems:'center',
      gap:10
    },

    image:{
      width: '100%',
      aspectRatio: 16 / 9
    },

    descriptions:{
      padding:20,
      gap:15
    },

    TextBoton:{
      fontFamily:'Secundario',
      fontSize:15,
    },

    button:{
      textAlign:'center'
    }


})

export default styles