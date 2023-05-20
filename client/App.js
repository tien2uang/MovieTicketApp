import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Main from "/src/Main.js";

export default function App() {
  return <Main></Main>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
