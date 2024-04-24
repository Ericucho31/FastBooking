import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import themeComponent from '../Theme/themeComponent';

const TextInputSimple = ({ encabezado, nombre, onTextChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text) => {
    setInputValue(text); // Actualizar el estado local con el nuevo valor del TextInput
    if (onTextChange) {
      onTextChange(text); // Llamar a la función de devolución de llamada con el nuevo valor
    }
  };

  return (
    <View style={themeComponent.textInput.container}>
      <Text style={themeComponent.text.headerTextbox}>{encabezado}</Text>
      <TextInput
        style={themeComponent.textInput.textInput}
        placeholder={nombre}
        onChangeText={handleTextChange} // Manejador de eventos para actualizar el estado local
        value={inputValue} // Valor del TextInput controlado por el estado local
      />
    </View>
  );
};

export default TextInputSimple;
