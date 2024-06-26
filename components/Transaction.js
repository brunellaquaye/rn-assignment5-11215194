import { View, Text, StyleSheet, FlatList } from "react-native";
import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";


const Transaction = ({ logo, title, subtitle, amount }) => {
  const {theme , toggleTheme} = useContext(ThemeContext);
  return (
    <View>
      {/* <Text>Transaction</Text>
      <Text>Sell All</Text> */}
      <View style={styles.container}>
        <View style={[styles.logo,{backgroundColor: theme.colors.logo}]}>{logo}</View>
        <View>
          <Text style = {[styles.title, {color: theme.colors.text}]}>{title}</Text>
          <Text style = {styles.subtitle}> {subtitle}</Text>
        </View>
        <Text style = {[styles.amount, {color: theme.colors.text}]}>{amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    flex:1,
   // justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "#DFDFDF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    fontWeight: "condensedBold",
    fontSize: 20,
    marginLeft: 15,
  },
  subtitle: {
    color:"#939393",
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "condensedBold"
  },
  amount:{
   marginLeft:'auto',
   marginRight: 20,
   alignContent:"flex-end",
   justifyContent:"flex-end",
  }

});

export default Transaction;
