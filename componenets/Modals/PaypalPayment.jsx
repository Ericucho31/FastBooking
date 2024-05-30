import WebView from "react-native-webview";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useDataContext } from "../Context/GlobalStateContext";

export default function PaypalPayment({ route }) {
  const { link } = route.params; // Acceder al parámetro 'link'
  const windowWidth = Dimensions.get('window').width;
  const [paypalLink, setPaypalLink] = useState('')
  const {state, dispatch} = useDataContext()

  useEffect(() => {
    const checkPayment = async () => {
        setPaypalLink(await state.userData.PaypalPaymentUrl)
        console.log(paypalLink)
    };

    checkPayment();
  }, []);

  return (
    <WebView style={{ width: windowWidth }} source={{ uri: paypalLink }} />
  );
}
