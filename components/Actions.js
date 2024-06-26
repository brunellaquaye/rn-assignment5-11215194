import React , {useContext} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { ThemeContext } from "../ThemeContext";



const Actions = () => {
  const {theme , toggleTheme} = useContext(ThemeContext);

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
          <View style={[styles.icons, {backgroundColor: theme.colors.logo}]}>
            <AntDesign name="arrowup" size={24} color={theme.colors.icon} />
          </View>
        </TouchableOpacity>

        <Text style={[styles.text, {color: theme.colors.text}]}>Sent</Text>
      </View>

      <TouchableOpacity>
        <View>
          {/* Style the icon for the receive icon so that it looks aligned and centered */}
          <View style={[styles.icons, {backgroundColor: theme.colors.logo}]}>            
          <AntDesign name="arrowdown" size={24} color={theme.colors.icon} />
          </View>
          <Text style={[styles.text, {color: theme.colors.text}]}>Receive</Text>
        </View>
      </TouchableOpacity>
      <View>
      <TouchableOpacity>
      <View style={[styles.icons, {backgroundColor: theme.colors.logo}]}>
      <FontAwesome6 name="dollar" size={24} color={theme.colors.icon} />
        </View>
        </TouchableOpacity>
        <View>
        <Text style={[styles.text, {color: theme.colors.text}]}>Loan</Text>
        </View>
      </View>

      <View>
      <TouchableOpacity>
      <View style={[styles.icons, {backgroundColor: theme.colors.logo}]}>
      <Ionicons name="cloud-upload-outline" size={25} color={theme.colors.icon} />
        </View>
        </TouchableOpacity>
        <View>
        <Text style={[styles.text, {color: theme.colors.text}]}>Topup</Text>
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
    backgroundColor: "#DFDFDF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontWeight: "light",
    textAlign: "center",
      }
});

export default Actions;
