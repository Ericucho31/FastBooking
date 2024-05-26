import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import themeComponent from '../Theme/themeComponent';
import Ionicons from '@expo/vector-icons/Ionicons';

const TextInputRegister = ({ encabezado, anyText, setText, isPassword, passwordStyle}) => {
  //const [textInputStlye, setTextInputStyle] = useState()

  const handleTextChange = (text) => {
    setText(text); // Actualizar el estado local con el nuevo valor del TextInput
  };


  return (
    <View style={themeComponent.textInput.container}>
      <Text style={themeComponent.headers.header3}>{encabezado}</Text>
      <TextInput
        style={[themeComponent.textInput.textInput, passwordStyle]}
        onChangeText={handleTextChange} // Manejador de eventos para actualizar el estado local
        value={anyText} // Valor del TextInput controlado por el estado local
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default TextInputRegister;
