import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const { authToken } = useSelector((state) => state.auth);
  useEffect(() => {
    axios
      .get(
        "https://authentication-template-9fac4-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" +
          authToken
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [authToken]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colors.primary100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
});
