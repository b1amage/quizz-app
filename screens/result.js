import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../components/title";
import homeImg from "../assets/home.png";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <Title text={`Result: ${score} / 100`} />

      <View style={styles.bannerContainer}>
        <Image source={homeImg} style={styles.banner} />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: "100%",
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  banner: {
    width: 300,
    height: 300,
  },
  button: {
    width: "100%",
    backgroundColor: "#1a759f",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
