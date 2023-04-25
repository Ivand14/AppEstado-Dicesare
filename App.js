import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import ModalComponent from './src/components/ModaComponent'

const App = () => {

  const [textInput,setTetxtInput]=useState('')
  const [list,setList]=useState([])
  const [modalVisible,setModalVisible]=useState(false);
  const [newItem,setNewItem]=useState({})

  const onHandleChangeText=text=>{
    setTetxtInput(text)
  }

  const Add=()=>{
    setList(prevState=>[...prevState,{name: textInput, id: Math.random().toString()}])
    setTetxtInput('')
  }

  const onHandleModal=item=>{
    setNewItem(item)
    setModalVisible(true)
  }

  const deleteItem=item=>{
    setList(listElements=>listElements.filter(element=> element.name !=  item.name))
    setModalVisible(false)
  }

  const renderItem=({item})=>(

    <View  style={styles.containerItems}>
      <View style={styles.Items} key={item.id}>  
        <Text>{item.name}</Text>
        <Button
          title='Delete'
          onPress={()=>onHandleModal(item)}
        />
      </View>
    </View>


  )

    
  return (
      <ImageBackground source={require('./src/assets/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg')}  style={styles.image}>
    <View style={styles.container}>
          <View style={styles.containerInput}>
            <TextInput
                  placeholder="Write..."
                  onChangeText={onHandleChangeText}
                  value={textInput}
                  style={styles.containerTextInput}
                />
                <Button
                  onPress={Add}
                  title='Add'
                  style={styles.Button}
                />
          </View>
          <View style={styles.containerItems}>
              <FlatList

                data={list}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                  
              />
          </View>

          <ModalComponent
            isVisible={modalVisible}
            deleteItem={()=>deleteItem(newItem)}	
            newItem={newItem}
          />
      
    </View>
      </ImageBackground>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },

  image:{
    flex:1,
    justifyContent:'center',
  },

  containerInput:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    gap:5,
    backgroundColor:'rgba(239, 246, 224,0.3)',
    justifyContent:'center',
    padding:20
  },

  containerTextInput:{
    width:150,
    borderBottomColor:'#000',
    borderBottomWidth:1
  },


  containerItems:{
    flex:4,
    height: 45,
    flexDirection:'row',
    justifyContent:'center',
    margin:10,
    fontSize:10
    
  },

  Items:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    paddingHorizontal:10,
    paddingVertical:5,
    padding:1,
    backgroundColor:'#ffffff',
    borderRadius:10,
    shadowColor:'#000',
    elevation:5,
    
  }
})

