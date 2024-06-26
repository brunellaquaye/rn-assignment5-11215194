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
  StatusBar
} from "react-native";
import VisaCard from "./components/VisaCard";
import DarkActions from "./components/DarkActions";
import DarkTransaction from "./components/DarkTransaction";
import { AntDesign } from '@expo/vector-icons';

const transactionData = [
  {
    id: 1,
    logo: <AntDesign name="apple1" size={20} color="white" />,
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
    logo: <AntDesign name="apple1" size={20} color="white" />,
    title: "Money Transfer",
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
    logo: <AntDesign name="apple1" size={20} color="white" />,
    title: "Apple Store",
    subtitle: "Entertainment",
    amount: "-$88",
  },
  {
    id: 6,
    logo: <Image source={require("./assets/spotify.png")} />,
    title: "Spotify",
    subtitle: "Music",
    amount: "-$88",
  },
  {
    id: 7,
    logo: <AntDesign name="apple1" size={20} color="white" />,
    title: "Apple Store",
    subtitle: "Game Shopping",
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
    logo: <Image source={require("./assets/spotify.png")} />,
    title: "Spotify",
    subtitle: "Music",
    amount: "-$88",
  },
  {
    id: 10,
    logo: <AntDesign name="apple1" size={20} color="white" />,
    title: "Apple Store",
    subtitle: "Entertainment",
    amount: "-$88",
  },
  {
    id: 11,
    logo: <Image source={require("./assets/spotify.png")} />,
    title: "Spotify",
    subtitle: "Music",
    amount: "-$88",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ 
      flex: 1, 
      //backgroundColor:"#110426"
     }}>
     {/* Use the StatusBar from react-native to style the status bar and it's background color to match the dark theme. */}
     <StatusBar barStyle="light-content" backgroundColor={"#110426"} />

      <View style={{ flex: 1 , backgroundColor:"#110426" }}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={require("./assets/profile.png")} />
          </View>
          <View>
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.subtitle}>Eric Atsu</Text>
          </View>
          <View style={styles.search}>
          <AntDesign name="search1" size={20} color="white" />
                    </View>
        </View>
        <VisaCard />

        <DarkActions />
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
              <DarkTransaction
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
    backgroundColor: "#1F1134",
    borderRadius: 50,
    padding: 15,
    marginLeft:20,
    marginRight: 30,

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
    color: "white",
    marginLeft: 10,
    paddingRight: 100,
    borderRadius: 50,
    width: "100%",
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
  subtitle2: {
    fontSize: 16,
    color: "#3951A8",
    marginRight:35,
  },
  profile: {
    marginLeft: 10,
  },
  transactionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,},
    marginLeft: 20,

});

export default HomeScreen;
