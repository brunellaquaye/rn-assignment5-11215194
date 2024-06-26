import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const Transaction = ({ logo, title, subtitle, amount }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.logo}>{logo}</View>
        <View>
          <Text style = {styles.title}>{title}</Text>
          <Text style = {styles.subtitle}> {subtitle}</Text>
        </View>
        <Text style = {styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    flex:1,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "#1F1134",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    fontWeight: "condensedBold",
    fontSize: 20,
    marginLeft: 15,
    color: "white",
  },
  subtitle: {
    color:"#939393",
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "condensedBold"
  },
  amount:{
   marginLeft:'auto',
   marginRight: 30,
   alignContent:"flex-end",
   justifyContent:"flex-end",
   color: "white",
  }

});

export default Transaction;
