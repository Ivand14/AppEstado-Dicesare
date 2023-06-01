import { FlatList, Modal, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RESERVAS } from '../../data/reservas'
import Reservas from '../../components/Reservas'
import { styles } from './styles'

const ReservationDay = () => {
  const currentDay=RESERVAS.date
  const options={weekday:'long' ,day:'numeric', year:'numeric'}
  const fullDay=new Intl.DateTimeFormat('es-ES',options).format(currentDay).toUpperCase()
  const UserName=useSelector(state=>state.Reservation.UserName)
  const dispatch=useDispatch()

  const confirmUser=()=>{
    dispatch(UserName)
}
  

  const renderReseva=({item})=>(
    <View>
      <Reservas item={item} onConfirm={confirmUser}/>
    </View>
  )

  return (
    <View style={styles.Container}>
      <View style={styles.ContainerDates}>
        <Text style={styles.textDay}>{fullDay}</Text>
        <FlatList
          data={RESERVAS}
          renderItem={renderReseva}
          keyExtractor={item=>item.id}
        />
      </View>
    </View>
  )
}

export default ReservationDay
