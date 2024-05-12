// ComponenteA.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCounter } from '../Context/GlobalStateExample';

const ComponenteA = () => {
  const { count, dispatch } = useCounter();


  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => dispatch({ type: 'INCREMENT' })} />
    </View>
  );
};

export default ComponenteA;