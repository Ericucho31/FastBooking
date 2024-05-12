// ComponenteB.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCounter } from '../Context/GlobalStateExample';

const ComponenteB = () => {
  const { count, dispatch } = useCounter();

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="Decrementar" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
};

export default ComponenteB;