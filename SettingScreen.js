import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function SettingScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.heading}>Settings</Text>
        <View style={styles.links}>
          <Text style={styles.title}>Language</Text>
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
          <Text style={styles.title}>My Profile</Text>
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
          <Text style={styles.title}>Contact Us</Text>
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
          <Text style={styles.title}>Change Password</Text>
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
          <Text style={styles.title}>Privacy Policy</Text>
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
          <Text style={styles.theme}>Theme</Text>
          <Fontisto
            name="toggle-off"
            size={50}
            color="#939393"
            style={{ marginRight: 20 }}
          />
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
    color: "black",
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
