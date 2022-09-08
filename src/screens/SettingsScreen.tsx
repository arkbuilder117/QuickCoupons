import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';
import {AuthContext} from '../../App';
import {AuthContextType} from '../@types';

const SettingsScreen = () => {
  const {signOut} = React.useContext(AuthContext) as AuthContextType;

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="log out" onPress={() => signOut()} />
    </View>
  );
};

export default SettingsScreen;
