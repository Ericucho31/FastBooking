import React from 'react';
import { View, TextInput, Text} from 'react-native';
import themeComponent from '../Theme/themeComponent';

const TextInputSimple = ({encabezado, nombre}) => {
  return (
    <View style={themeComponent.textInput.container}>
      <Text style={themeComponent.text.headerTextbox}>{encabezado}</Text>
      <TextInput
        style={themeComponent.textInput.textInput}
        placeholder={nombre}
        // Otros props del TextInput, como onChangeText, etc.
      />
    </View>
  );
};


export default TextInputSimple;