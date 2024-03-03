import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

export default function Page() {
  const { phone, signIn } = useLocalSearchParams<{
    phone: string;
    signIn: string;
  }>();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otp.length === 6) {
      console.log("otp", otp);
      // TODO: verify top
    }
  }, [otp]);

  const verifyCode = async () => {};

  const verifySingIn = async () => {};
  const resendOtp = async () => {};
  
  return (
    <View>
      <Text>Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
