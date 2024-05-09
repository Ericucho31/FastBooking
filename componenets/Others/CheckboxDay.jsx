import React, { useState } from "react";
import { Text, View } from "react-native";
import { CheckBox } from '@rneui/themed';

export default function CheckboxDay({day}) {
    
    const [check, setCheck]= useState(false);

    const toggleCheckbox = () => setCheck(!check);

    return (
            <CheckBox
                center
                title={day}
                checked={check}
                onPress={toggleCheckbox}
            />
    )
}