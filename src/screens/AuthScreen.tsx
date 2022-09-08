import {StyleSheet, View} from 'react-native';
import React from 'react';
import InputFields from '../components/InputFields';
import {Text} from '@rneui/base';

const AuthScreen = () => {
  return (
    <View style={styles.defaultStyle}>
      <Text style={styles.header}>Log In</Text>
      <InputFields type="Sign In" />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
