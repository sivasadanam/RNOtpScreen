import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
// import DrawerNavigator from '../navigation/DrawerNavigator'


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
     
      <Text>This is the HOME screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />

      <Button
        title="Go to  Screen 1"
        onPress={() => navigation.navigate("Screen 1")}
      />
       <Button
        title="Go to  Screen 2"
        onPress={() => navigation.navigate("Screen 2")}
      />
       <Button
        title="Go to  Screen 3"
        onPress={() => navigation.navigate("Screen 3")}
      />
       <Button
        title="Go to  Splash"
        onPress={() => navigation.navigate("Splash")}
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

export default Home;
