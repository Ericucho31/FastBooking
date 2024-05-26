import React, { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import themeComponent from '../Theme/themeComponent';
import Ionicons from '@expo/vector-icons/Ionicons';

const TextInputPassword = ({ encabezado, anyText, setText }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [iconName, setIconName] = useState('eye-off-outline')

  const handleTextChange = (text) => {
    setText(text); // Actualizar el estado local con el nuevo valor del TextInput
  };

  const handleOnPress = () => {
    setIsVisible(false)
    setIconName('eye-outline')

  }
  const handleOnPressOut = () => {
    setIsVisible(true)
    setIconName('eye-off-outline')

  }

  return (
    <View style={themeComponent.textInput.container}>
      <Text style={themeComponent.headers.header3}>{encabezado}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={themeComponent.textInput.passwordInput}
          onChangeText={handleTextChange} // Manejador de eventos para actualizar el estado local
          value={anyText} // Valor del TextInput controlado por el estado local
          secureTextEntry={isVisible}
        />
        <Pressable onPressIn={handleOnPress} onPressOut={handleOnPressOut}>
          <Ionicons style={{ marginLeft: 10 }} name={iconName} color={'gray'} size={32} />
        </Pressable>
      </View>

    </View>
  );
};

export default TextInputPassword;
