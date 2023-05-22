import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    Container:{
      flex:1,
    },

    ContainerDescriptions:{
      flex:1,
      justifyContent:'flex-start',
      gap:20,
      height:'100%'
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
      height:350
    },

    descriptions:{
      padding:20,
      gap:15
    }


})

export default styles