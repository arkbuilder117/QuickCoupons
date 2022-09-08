import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.defaultStyle}>
      <Text>MainScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
