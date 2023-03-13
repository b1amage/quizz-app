import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";
import homeImg from "../assets/home.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title text="Quizz App" />
      <View style={styles.bannerContainer}>
        <Image source={homeImg} style={styles.banner} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
