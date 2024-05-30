import WebView from "react-native-webview";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { GetAllAvailableDates, GetDateById } from "../Handler/API/APIHandler";
import RegisterModal from "../Modals/RegisterModal";
import { Button } from "@rneui/base";
import { useDataContext } from "../Context/GlobalStateContext";

import { Dimensions } from "react-native";




export default function PaypalPayment({ link }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (

        <WebView style={{ width: windowWidth }} source={{ uri: link }}>

        </WebView>


    )

}