import { useState } from 'react';
import { Animated } from 'react-native';

const useAnimation = () => {
  const [expandido, setExpandido] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleAnimation = () => {
    const toValue = expandido ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpandido(!expandido);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50], // Adjust height as needed
  });

  const animatedStyle = {
    height: heightInterpolate,
    width: '100%',
  };

  return { toggleAnimation, animatedStyle };
};

export default useAnimation;
