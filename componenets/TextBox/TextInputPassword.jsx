import React from 'react';
import { View, TextInput, StyleSheet, Text} from 'react-native';
import themeComponent from '../Theme/themeComponent';

const TextInputPassword = (props) => {
  return (
    <View style={themeComponent.textInput.container}>
      <Text style={themeComponent.text.headerTextbox}>Contraseña </Text>
      <TextInput
        style={themeComponent.textInput.textInput}
        placeholder={props.nombre}
        secureTextEntry={true}
        // Otros props del TextInput, como onChangeText, etc.
      />
    </View>
  );
};


export default TextInputPassword;