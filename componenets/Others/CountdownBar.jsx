import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";

export default function CountdownBar() {
    const [progress, setProgress] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 30000,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.bar,
                    {
                        width: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["100%", "0%"],
                        }),
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 20,
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden",
    },
    bar: {
        height: "100%",
        backgroundColor: "green",
    },
});
