import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

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
            <AntDesign name="arrowup" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Sent</Text>
      </View>

      <TouchableOpacity>
        <View>
          {/* Style the icon for the receive icon so that it looks aligned and centered */}
          <View style={styles.icons}>
            <AntDesign name="arrowdown" size={24} color="white" />
          </View>
          <Text style={styles.text}>Receive</Text>
        </View>
      </TouchableOpacity>
      <View>
      <TouchableOpacity>
        <View style={styles.icons}>
        <FontAwesome6 name="dollar" size={24} color="white" />
        </View>
        </TouchableOpacity>
        <View>
        <Text style={styles.text}>Loan</Text>
        </View>
      </View>

      <View style = {{marginRight:10}}>
      <TouchableOpacity>
        <View style={styles.icons}>
        <Ionicons name="cloud-upload-outline" size={25} color="white" />
        </View>
        </TouchableOpacity>
        <View>
        <Text style={styles.text}>Topup</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: "#1F1134",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontWeight: "light",
    textAlign: "center",
    color: "#939393",

      }
});

export default Actions;
