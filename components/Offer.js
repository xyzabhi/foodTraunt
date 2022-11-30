import { LinearGradient, Text } from "expo-linear-gradient";
import { View } from "react-native";

export default function Offer() {
  return (
    <LinearGradient colors={["#ff2b27", "#ffa360"]}>
      <View
        style={{ width: "60%", height: 300, backgroundColor: "red" }}
      ></View>
      {/* <Text>{title}</Text> */}
    </LinearGradient>
  );
}
