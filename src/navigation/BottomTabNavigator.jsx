import { StyleSheet, Text, View } from 'react-native'

import  Icon  from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import Training from './Training'
import Wod from './Wod'
import color from '../constant/color'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabNavigator = () => {

    const TabNavigator=createBottomTabNavigator()
    
  return (
    <TabNavigator.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:styles.TabBar
    }}>
        <TabNavigator.Screen name='Training' component={Training} options={{
            tabBarIcon:()=>(
                <View>
                    <Icon name='fitness-center' size={30}/>
                </View>
            )
        }}/>
        <TabNavigator.Screen name='Wod' component={Wod}  options={{
            tabBarIcon:()=>(
                <View>
                    <Icon name='assignment' size={30}/>
                </View>
            )
        }}/>
    </TabNavigator.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    TabBar:{
        height:55,
        shadowColor:color.primary,
        shadowOffset:{width:0,height:1},
        elevation:3,
    }
})
