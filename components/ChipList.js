import { ScrollView, View } from "react-native";
import Chip from "./Chip";

const chipdata = [
  "Likes",
  "Fast Delivery",
  "Great Offers",
  "Rating 4.0",
  "New Arrivals",
  "Pure Veg",
];
export default function ChipList() {
  const renderedChipList = chipdata.map((chip) => <Chip title={chip} />);
  return (
    <ScrollView
      horizontal={true}
      style={{ marginLeft: "7%", marginTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row" }}>{renderedChipList}</View>
    </ScrollView>
  );
}
