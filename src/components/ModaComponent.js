import { Button, Modal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ModalComponent = ({isVisible,deleteItem,newItem}) => {
  return (
    <Modal visible={isVisible} animationType='slide' transparent={true}>
      <View style={styles.ContainerModal}>
        <View style={styles.ModalView}>  
          <Text>Estas seguro que quieres eliminar <Text>{newItem.name}</Text> de tu lista?</Text>
          
          <Button
            title='Eliminar'
            onPress={()=>deleteItem()}
          />
        </View>
      </View>
      
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  ContainerModal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#000',
  },

  ModalView:{
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    shadowColor:'#000',
    elevation:20,
    width:250,
    textAlign:'center',
    padding:10,
    margin:5,
  }
})