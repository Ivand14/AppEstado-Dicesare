import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';

const Cronometro = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const seconds = prevTime.seconds + 1;
          const minutes = prevTime.minutes + Math.floor(seconds / 60);
          const hours = prevTime.hours + Math.floor(minutes / 60);

          return {
            seconds: seconds % 60,
            minutes: minutes % 60,
            hours: hours % 24,
          };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const onHandleStart = () => {
    setRunning(true);
  };

  const onHandleStop = () => {
    setRunning(false);
  };

  const onHandleReset = () => {
    setRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  console.log(time);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {time.hours.toString().padStart(2, '0')}:{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}
      </Text>
      <View style={styles.ButtonsGroup}>
        <Button title="Start" onPress={onHandleStart} />
        <Button title="Stop" onPress={onHandleStop} />
        <Button title="Reset" onPress={onHandleReset} />
      </View>
    </View>
  );
};

export default Cronometro;
