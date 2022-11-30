import { ScrollView, View } from "react-native";
import Offer from "./Offer";

export default function OfferList() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ height: 200 }}>
        <Offer />
        <Offer />
        <Offer />
      </View>
    </ScrollView>
  );
}
