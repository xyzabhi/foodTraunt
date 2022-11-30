import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function LoginScreen() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#cc1e30", "#e0126e"]}
      start={[0, 0]}
      end={[1, 0]}
    >
      <View>
        <Image
          source={require("/Users/abkech/Desktop/foodApp/assets/images/62964f452be59dc55430cab7.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.phone}>
          <Text style={styles.phncode}>+91</Text>
          <TextInput
            style={styles.phninput}
            keyboardType="numeric"
            placeholder="Phone Number"
          />
        </View>
        <Pressable onPress={() => console.log("clicked")}>
          <View style={styles.loginbtn}>
            <Text style={styles.loginbtntext}>Send OTP</Text>
          </View>
        </Pressable>
        <View style={styles.ordivider}>
          <View style={styles.orline}></View>
          <Text style={styles.ortext}>OR</Text>
          <View style={styles.orline}></View>
        </View>
        <View style={styles.loginemail}>
          <Text style={styles.loginemailtext}>Continue With Email</Text>
        </View>
        <View style={styles.socialogin}>
          <View style={styles.google}>
            <Text style={styles.sociallogintext}>Google</Text>
          </View>
          <View style={styles.twitter}>
            <Text style={styles.sociallogintext}>Twitter</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc1e30",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputcontainer: {
    marginBottom: 100,
  },
  phone: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    width: 350,
    marginBottom: 15,
  },
  phninput: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  phncode: {
    letterSpacing: 2,
    marginRight: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  loginbtn: {
    backgroundColor: "#000",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  loginbtntext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  ordivider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  orline: {
    height: 2,
    width: 155,
    margin: 5,
    backgroundColor: "#fff",
  },
  ortext: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginemail: {
    marginTop: 35,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginemailtext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  twitter: {
    backgroundColor: "#30c4f1",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
  },
  google: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#28b446",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  socialogin: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sociallogintext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    width: 160,
    height: 40,
  },
});
