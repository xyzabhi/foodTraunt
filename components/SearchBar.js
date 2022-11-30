import { Image, StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require("/Users/abkech/Desktop/foodApp/assets/images/icons8-search-50.png")}
        style={{ width: 30, height: 30 }}
      />
      <TextInput
        placeholder="Restaurant name, cuisine, or a dish..."
        style={styles.searchinput}
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    borderWidth: 1.8,
    borderColor: "#ccc",
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
  },
  searchinput: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});
