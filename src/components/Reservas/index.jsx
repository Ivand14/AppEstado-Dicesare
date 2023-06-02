import { Modal, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Icon  from 'react-native-vector-icons/MaterialIcons';
import color from '../../constant/color';
import styles from './styles'

const Reservas = ({item,onConfirm,onReserv}) => {

    const currentDay=item.Date
    const option={weekday:'long',day:'numeric'}
    const day= new Intl.DateTimeFormat('es-ES',option).format(currentDay).toUpperCase()
    const [openModal,setOpenModal]=useState(false)


    const onHandleOpen=()=>{
        setOpenModal(true)
    }

    const onHandleClose=()=>{
        setOpenModal(false)
    }


    return (

        <TouchableOpacity style={styles.Container} onPress={onHandleOpen}>
                <Modal 
                        animationType="slide"
                        transparent={true}
                        visible={openModal}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setOpenModal(!openModal);
                }}>
                    <View style={styles.centeredView}>
                        <Text style={styles.textModal}>{day}</Text>
                        <TouchableOpacity style={styles.ButtonReservar} onPress={onConfirm}>
                            <Icon name='add-circle' size={22} color={color.colorText}/>
                            <Text style={styles.textModal}>RESERVAR</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.ButtonReservar} onPress={onHandleClose}>
                            <Icon name='arrow-back' size={22} color={color.colorText}/>
                            <Text style={styles.textModal}>VOLVER</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
            
            <View style={styles.Reserva}>
                
                <View style={styles.Date}>
                    <Text style={styles.TextDate}>{day}</Text>
                    <Text style={styles.TextDate}>{item.hour}</Text>
                </View>

                <View style={styles.Quantity}>
                    <Text style={styles.TextQaunt}>CROSSFIT</Text>
                    <Text style={styles.TextQaunt}>Disponible ({item.quantity})</Text>
                </View>
            </View>

        </TouchableOpacity>

    )
}

export default Reservas