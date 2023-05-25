import { Button, FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import CardCategory from '../../components/Category'
import React from 'react'
import { selectedCategories } from '../../store/actions/categories.actions'
import styles from './styles'

const Home = ({ navigation }) => {

  const Categories=useSelector(state=>state.categories.category)
  const dispatch=useDispatch()
  
  const onHandleSelected = item => {
    dispatch(selectedCategories(item.id))
    if (item.isButton) {
      navigation.navigate('RmTracker')
    }else{
      navigation.navigate('TrainingTypes', {
        Title: item.Title,
      });
    }
  };

  const renderItem = ({ item }) => {
     
      if (item.isButton) {
        return(
          <>
          <TouchableOpacity onPress={() => onHandleSelected(item)}>
            <View style={styles.containerBackground}>
              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1526407297627-d845b359a55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                }}
                style={styles.imgBackground}
                borderRadius={10}
              >
                <View style={styles.ContainerTextBackground}>
                  <Text style={styles.textBackground}>
                    RM TRACKER
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>navigation.navigate('Running')}>
          <View style={styles.containerBackground}>
            <ImageBackground
              source={{
                uri: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=885&q=80'
              }}
              style={styles.imgBackground}
              borderRadius={10}
            >
              <View style={styles.ContainerTextBackground}>
                <Text style={styles.textBackground}>
                  RUNNING
                </Text>
              </View>
            </ImageBackground>
          </View>
          </TouchableOpacity>
          </>
        )
          }else{
        return(
          
          <CardCategory item={item} onSelected={onHandleSelected} />
        )
      }
  };

  const data=[...Categories,{id:Button,isButton:true}]


  return (
    <View style={styles.containerHome}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
