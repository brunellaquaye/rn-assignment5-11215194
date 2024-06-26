import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useContext} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { ThemeContext } from "./ThemeContext";

export default function SettingScreen() {
  const {theme , toggleTheme} = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    toggleTheme();
  }
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor : theme.colors.background }}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.heading, {color: theme.colors.text}]}>Settings</Text>
        <View style={styles.links}>
          <Text style={[styles.title, {color: theme.colors.text}]}>Language</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={25}
              color="#939393"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.span}></View>

        <View style={styles.links}>
          <Text style={[styles.title, {color: theme.colors.text}]}>My Profile</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={25}
              color="#939393"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.span}></View>

        <View style={styles.links}>
          <Text style={[styles.title , {color: theme.colors.text}]}>Contact Us</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={25}
              color="#939393"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.span}></View>

        <View style={styles.links}>
          <Text style={[styles.title,{color: theme.colors.text}]}>Change Password</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={25}
              color="#939393"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.span}></View>

        <View style={styles.links}>
          <Text style={[styles.title,{color: theme.colors.text}]}>Privacy Policy</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={25}
              color="#939393"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.span}></View>

        <View style={styles.themeContainer}>
          <Text style={[styles.theme,{color: theme.colors.text}]}>Theme</Text>
          <TouchableOpacity
          onPress = {toggleThemeHandler}>
          <Fontisto
            name={theme.dark ? "toggle-on" : "toggle-off"}
            size={50}
            color="#939393"
            style={{ marginRight: 20 }}
          />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black" ,
    marginTop: 70,
    marginBottom: 80,
    textAlign: "center",
  },
  span: {
    width: 340,
    height: 1,
    backgroundColor: "#DFDFDF",
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 20,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "light",
    color: "black",
    marginLeft: 20,
  },
  theme: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
  },
  themeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
    marginRight: 5,
  },
});

// if (theme.dark) {
//  styles.title.color = "#ffffff";}
