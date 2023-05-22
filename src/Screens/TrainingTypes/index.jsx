import { FlatList, View } from 'react-native'

import CategoryTraining from '../../data/CategoryTraining'
import Exercise from '../../components/Exercise'
import React from 'react'
import styles from './styles'

const TrainingTypes = ({navigation,route}) => {

  const crossfit=CategoryTraining.filter(training=>training.Category==route.params.Categories)

  const onHandleSelected=item=>{
    navigation.navigate('TrainingDetails',{
      Exercise:item,
      Title:item.Title
    })
  }

  const renderItem=({item})=>(
    <Exercise item={item} onSelected={onHandleSelected}/>
  )

  
  return (
    <View style={styles.container}>
      <FlatList
        data={crossfit}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
      
      />
    </View>
  )
}

export default TrainingTypes
