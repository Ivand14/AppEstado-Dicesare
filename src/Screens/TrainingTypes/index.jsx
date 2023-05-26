import { FlatList, View } from 'react-native'
import React, { useEffect } from 'react'
import { filteredCategoryTraining, selectedCategoryTraining } from '../../store/actions/categoryTraining.actions'
import { useDispatch, useSelector } from 'react-redux'

import Exercise from '../../components/Exercise'
import styles from './styles'

const TrainingTypes = ({navigation}) => {

  const trainingFiltered=useSelector(state=>state.categoryTraining.categoryFilter)
  const trainingSelected=useSelector(state=>state.categories.selected)
  const dispatch=useDispatch()

  
  useEffect(()=>{
    dispatch(filteredCategoryTraining(trainingSelected.id))
  },[])

  
  const onHandleSelected=item=>{
    dispatch(selectedCategoryTraining(item.id))
    navigation.navigate('TrainingDetails',{
      Title:item.Title
    })
  }

  const renderItem=({item})=>(
    <View  style={styles.container}>
      <Exercise item={item} onSelected={onHandleSelected}/>
    </View>
    )

  
  return (
    <View style={styles.container}>
      <FlatList
        data={trainingFiltered}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
      
        />
    </View>
  )
}

export default TrainingTypes
