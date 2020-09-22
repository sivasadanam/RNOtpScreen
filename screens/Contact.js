import React from "react";
import { View,Button, StyleSheet, Text } from "react-native";

const Contact = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the contact screen</Text>
      <Button
        title="Go to  Screen 3"
        onPress={() => navigation.navigate("Screen 3")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;
