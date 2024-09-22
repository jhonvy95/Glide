import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

export default function Payment() {
  const openPaymentSheet = () => {
    // Implement payment sheet logic here
    console.log("Payment sheet opened");
  };
  return (
    <View>
      <CustomButton title="Confirm Ride" className="my-10" onPress={openPaymentSheet} />
    </View>
  );
}
