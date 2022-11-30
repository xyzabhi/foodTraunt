import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
