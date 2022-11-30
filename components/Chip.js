import { StyleSheet, Text, View } from "react-native";

export default function Chip({ title }) {
  return (
    <View style={styles.chipcontainer}>
      <Text style={styles.chiptext}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chipcontainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    padding: 6,
    borderRadius: 10,
    height: 30,
  },
  chiptext: {
    color: "#333",
  },
});
