import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Actions = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-around",
      }}
    >
      <View>
        <TouchableOpacity>
          <View style={styles.icons}>
            <AntDesign name="arrowup" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <Text>Sent</Text>
      </View>

      <TouchableOpacity>
        <View>
          {/* Style the icon for the receive icon so that it looks aligned and centered */}
          <View style={styles.icons}>
            <AntDesign name="arrowdown" size={24} color="black" />
          </View>
          <Text>Receive</Text>
        </View>
      </TouchableOpacity>
      <View>
      <TouchableOpacity>
        <View style={styles.icons}>
          <Image source={require("../assets/loan.png")} />
        </View>
        </TouchableOpacity>
        <Text>Loan</Text>
      </View>

      <View>
      <TouchableOpacity>
        <View style={styles.icons}>
          <Image source={require("../assets/topUp.png")} />
        </View>
        </TouchableOpacity>
        <Text>Topup</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icons: {
    padding: 10,
    backgroundColor: "#DFDFDF",
    borderRadius: 50,
    justifyContent: "center",
  },
});

export default Actions;
