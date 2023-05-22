import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import styles from './styles'

const Exercise = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
          <LinearGradient
            colors={['#000', '#191919']}
            style={styles.gradient}
            start={{ x: 1, y: 1 }}
            end={{ x: 0.8, y: .1 }}
          />
          <Text style={styles.text}>{item.Title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Exercise;


