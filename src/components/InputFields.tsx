import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthContextType} from '../@types';
import {AuthContext} from '../../App';
import {Button, Input, Text} from '@rneui/themed';

const InputFields = (props: {type: string | undefined}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn, signUp} = React.useContext(AuthContext) as AuthContextType;

  return (
    <View style={styles.container}>
      <View>
        <Input
          value={email}
          keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="none"
          autoFocus={true}
          onChangeText={setEmail}
        />
        <Input
          containerStyle={styles.input}
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <Button
        title="Login"
        containerStyle={styles.button}
        onPress={() => {
          props.type === 'Sign Up'
            ? signUp(email, password)
            : signIn(email, password);
        }}
      />
      <Text>{props.type}</Text>
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  button: {
    // flex: 1,
    width: 200,
  },
  input: {
    width: 200,
  },
});
