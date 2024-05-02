import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setExpanded(!expanded);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust height as needed
  });

  const animatedStyle = {
    height: heightInterpolate,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.content, animatedStyle]}>
        <Text>{content}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 5,
    overflow: 'hidden',
  },
  header: {
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
});

export default Accordion;
