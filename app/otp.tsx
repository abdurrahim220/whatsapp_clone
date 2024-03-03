import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  return (
    <KeyboardAvoidingView>
      <Text>Page</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
