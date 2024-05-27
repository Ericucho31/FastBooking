import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import themeComponent from '../Theme/themeComponent';
import Ionicons from '@expo/vector-icons/Ionicons';

const TextInputRegister = ({ encabezado, anyText, setText, errorMessage }) => {
  //const [textInputStlye, setTextInputStyle] = useState()

  const handleTextChange = (text) => {
    setText(text); // Actualizar el estado local con el nuevo valor del TextInput
  };


  return (
    <View style={themeComponent.textInput.container}>
      <View style={{ flexDirection: 'row', width:'100%' }}>
        <Text style={themeComponent.headers.header3}>{encabezado}</Text>

        <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end'}}>
          <Text style={themeComponent.text.errorMessage}>{errorMessage}</Text>
        </View>

      </View>
      <TextInput
        style={themeComponent.textInput.textInput}
        onChangeText={handleTextChange} // Manejador de eventos para actualizar el estado local
        value={anyText} // Valor del TextInput controlado por el estado local
      />
    </View>
  );
};

export default TextInputRegister;
