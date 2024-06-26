import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import VisaCard from "./components/VisaCard";
import Actions from "./components/Actions";
import Transaction from "./components/Transaction";

const transactionData = [
  {
    id: 1,
    logo: <Image source={require("./assets/apple.png")} />,
    title: "Apple Store",
    subtitle: "Entertainment",
    amount: "-$5.99",
  },
  {
    id: 2,
    logo: <Image source={require("./assets/spotify.png")} />,
    title: "Spotify",
    subtitle: "Music",
    amount: "-$12.99",
  },
  {
    id: 3,
    logo: <Image source={require("./assets/moneyTransfer.png")} />,
    title: "MoneyTransfer",
    subtitle: "Transaction",
    amount: "-$300",
  },
  {
    id: 4,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 5,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 6,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 7,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 8,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 9,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 10,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
  {
    id: 11,
    logo: <Image source={require("./assets/grocery.png")} />,
    title: "Grocery",
    subtitle: "Shopping",
    amount: "-$88",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={require("./assets/profile.png")} />
          </View>
          <View>
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.subtitle}>Eric Atsu</Text>
          </View>
          <View style={styles.search}>
            <Image source={require("./assets/search.png")} />
          </View>
        </View>
        <VisaCard />

        <Actions />
        <View style={styles.transactionTitle}>
          <Text style={styles.title1}>Transaction</Text>
          <Text style={styles.subtitle2}>Sell All</Text>
        </View>

        <FlatList
          data={transactionData}
          vertical
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Transaction
                title={item.title}
                logo={item.logo}
                subtitle={item.subtitle}
                amount={item.amount}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
// Check out the colours and find the right ones that look like the UI mockup
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginTop: 40,
  },
  search: {
    backgroundColor: "#DFDFDF",
    borderRadius: 50,
    padding: 10,
    marginLeft: 40,
  },
  title: {
    fontSize: 15,
    fontWeight: "light",
    color: "#939393",
    marginLeft: 10,
    paddingRight: 100,
    borderRadius: 50,
    width: "100%",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    paddingRight: 100,
    borderRadius: 50,
    width: "100%",
  },
  title1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
  subtitle2: {
    color: "blue",
    marginRight: 30,
  },
  profile: {
    marginLeft: 10,
  },
  transactionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default HomeScreen;
