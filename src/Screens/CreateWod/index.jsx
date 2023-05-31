import { FlatList, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Cronometro from '../../components/Cronometro'
import React from 'react'
import { View } from 'react-native-animatable'
import WodList from '../../components/WodList'
import { deleteWod } from '../../store/actions/createWodAction.actions'
import styles from './styles'

const CreateWod = () => {
  const dispatch=useDispatch()
  const items=useSelector(state=>state.CreateWod.itemSelected)

  console.log(items)

  const onHandleDelete=id=>{
    console.log(id)
    dispatch(deleteWod(id))
  }

  const renderWod=({item})=>(
    <WodList item={item} onDelete={onHandleDelete}/>
  )
  

  return (

    <ImageBackground source={{uri:'https://images.unsplash.com/photo-1632758205663-972d4b6bebb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80'}} style={styles.containerImg}>


      <View style={styles.containerCronometro}>
        <Cronometro/>
      </View>

      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderWod}
          keyExtractor={item=>item.id}
          
          />
      </View>
    </ImageBackground>
)
}

export default CreateWod