import { Text, View } from 'react-native'

import { ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'

const Home = ({navigation}) => {

  const levantamientoImg= require('../../assets/image/levantamiento.jpg')
  const EmomImg= require('../../assets/image/EMOM.jpg')
  const WodImg= require('../../assets/image/WOD.jpg')
  const RmImg= require('../../assets/image/RM.jpg')
  const WarmUpsImg= require('../../assets/image/warmups.jpg')
  const RunImg= require('../../assets/image/run.jpg')


  
  return (
    <View style={styles.containerHome}>
      
      <TouchableOpacity>
        <View style={styles.containerBackground}>
          <ImageBackground  source={WarmUpsImg} style={styles.imgBackground} borderRadius={10}>
              <View style={styles.ContainerTextBackground}>
                <Text style={styles.textBackground}>
                  WARMUPS
                </Text>
              </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerBackground}>
          <ImageBackground  source={EmomImg} style={styles.imgBackground} borderRadius={10}>
              <View style={styles.ContainerTextBackground}>
                <Text style={styles.textBackground}>
                  WOD
                </Text>
              </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <View>
        <View style={styles.containerBackgroundAnotaciones}>
          <TouchableOpacity>
            <ImageBackground  source={WodImg} style={styles.imgBackgroundAnotaciones} borderRadius={15}>
                <View style={styles.ContainerTextBackground}>
                  <Text style={styles.textBackgroundAnotaciones}>
                    BUILD A WOD
                  </Text>
                </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('RmTracker')}>
            <ImageBackground  source={RmImg} style={styles.imgBackgroundAnotaciones} borderRadius={15}>
                <View style={styles.ContainerTextBackground}>
                  <Text style={styles.textBackgroundAnotaciones}>
                    RM TRACKER
                  </Text>
                </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>       
      </View>

      <TouchableOpacity>
        <View style={styles.containerBackground}>
          <ImageBackground  source={levantamientoImg} style={styles.imgBackground} borderRadius={10}>
              <View style={styles.ContainerTextBackground}>
                <Text style={styles.textBackground}>
                  WEIGHTLIFTING
                </Text>
              </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerBackground}>
          <ImageBackground  source={RunImg} style={styles.imgBackground} borderRadius={10}>
              <View style={styles.ContainerTextBackground}>
                <Text style={styles.textBackground}>
                  RUNNING
                </Text>
              </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Home