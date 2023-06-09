import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
