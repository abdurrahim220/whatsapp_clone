import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

import welcomeImage from "../assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  const openLink = () => {
    Linking.openURL("https://google.com")
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome} />
      <Text style={styles.headline}>Welcome to Whatsapp Clone</Text>
      <Text style={styles.description}>
        Read Our
        <Text style={styles.link} onPress={openLink}>
          {" "}
          Privacy Policy
        </Text>{" "}
        . {'Tag "Agree & Continue" to accept the'}
        <Text style={styles.link} onPress={openLink}>
          Terms of Services
        </Text>
      </Text>
      <Link href={"/otp"} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
  },
});
