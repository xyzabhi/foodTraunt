import { useRef, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function OtpScreen() {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [active, setActive] = useState(false);

  return (
    <SafeAreaView style={styles.outer}>
      <View>
        <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 16 }}>
          We have sent OTP on mobile +91 9575119863
        </Text>
        <View style={styles.container}>
          <View style={styles.otpcontainer}>
            <TextInput
              ref={pin1Ref}
              style={styles.otpinput}
              keyboardType="number-pad"
              maxLength={1}
              onChange={(pin1) => {
                setPin1(pin1);
                if (pin1 !== "") {
                  pin2Ref.current.focus();
                }
              }}
              value={pin1}
            />
          </View>
          <View style={styles.otpcontainer}>
            <TextInput
              ref={pin2Ref}
              style={styles.otpinput}
              keyboardType="number-pad"
              maxLength={1}
              onChange={(pin2) => {
                setPin2(pin2);
                if (pin2 !== "") {
                  pin3Ref.current.focus();
                }
              }}
              value={pin2}
            />
          </View>
          <View style={styles.otpcontainer}>
            <TextInput
              ref={pin3Ref}
              style={styles.otpinput}
              keyboardType="number-pad"
              maxLength={1}
              onChange={(pin3) => {
                setPin3(pin3);
                if (pin3 !== "") {
                  pin4Ref.current.focus();
                }
              }}
              value={pin3}
            />
          </View>
          <View style={styles.otpcontainer}>
            <TextInput
              ref={pin4Ref}
              style={styles.otpinput}
              keyboardType="number-pad"
              maxLength={1}
              onChange={(pin4) => {
                setPin4(pin4);
              }}
              value={pin4}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            Didn't recieve the code ?
          </Text>
          <Text
            style={{
              fontSize: 16,
              justifyContent: "center",
              marginTop: 8,
              color: "green",
            }}
          >
            0:34
          </Text>
          <Text
            style={
              active
                ? {
                    fontSize: 16,
                    color: "#2AA9ED",
                    fontSize: 16,
                    borderWidth: 1.5,
                    borderColor: "#2AA9ED",
                    padding: 8,
                    borderRadius: 8,
                  }
                : {
                    fontSize: 16,
                    color: "#bbb",
                    fontSize: 16,
                    borderWidth: 1.5,
                    borderColor: "#bbb",
                    padding: 8,
                    borderRadius: 8,
                  }
            }
          >
            Resend
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  otpcontainer: {
    borderRadius: 8,
    height: 40,
    borderWidth: 1.5,
    borderColor: "#bbb",
  },
  otpinput: {
    height: 40,
    width: 40,
    fontSize: 18,
    padding: 5,
    color: "#555",
    textAlign: "center",
  },
});
