import React , {useContext} from "react";
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
import { ThemeContext } from "./ThemeContext";
import VisaCard from "./components/VisaCard";
import Actions from "./components/Actions";
import Transaction from "./components/Transaction";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';





const HomeScreen = () => {
  const { theme, toggleTheme} = useContext (ThemeContext);
  const transactionData = [
    {
      id: 1,
      logo: <AntDesign name="apple1" size={20} color={theme.colors.icon} />,
      title: "Apple Store",
      subtitle: "Entertainment",
      amount: "-$5.99",
    },
    {
      id: 2,
      logo: <FontAwesome name="spotify" size={24} color="green" />,
      title: "Spotify",
      subtitle: "Music",
      amount: "-$12.99",
    },
    {
      id: 3,
      logo: <AntDesign name="download" size={24} color={theme.colors.icon} />,
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
      logo: <AntDesign name="youtube" size={24} color="red" />,
      title: "YouTube ",
      subtitle: "Videos",
      amount: "-$88",
    },
    {
      id: 6,
      logo: <FontAwesome name="spotify" size={24} color="green" />,
      title: "Spotify",
      subtitle: "Music",
      amount: "-$88",
    },
    {
      id: 7,
      logo: <AntDesign name="apple1" size={20} color={theme.colors.icon} />,
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
      logo: <FontAwesome name="spotify" size={24} color="green" />,
      title: "Spotify",
      subtitle: "Music",
      amount: "-$88",
    },
    {
      id: 10,
      logo: <AntDesign name="apple1" size={20} color={theme.colors.icon} />,
      title: "Apple Store",
      subtitle: "Entertainment",
      amount: "-$88",
    },
    {
      id: 11,
      logo:<FontAwesome name="spotify" size={24} color="green" />,
      title: "Spotify",
      subtitle: "Music",
      amount: "-$88",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={require("./assets/profile.png")} />
          </View>
          <View>
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={[styles.subtitle,{color: theme.colors.text}]}>Eric Atsu</Text>
          </View>
          <View style={[styles.search, {backgroundColor: theme.colors.logo}]}>
          <AntDesign name="search1" size={20} color={theme.colors.icon} />
          </View>
        </View>
        <VisaCard />

        <Actions />
        <View style={styles.transactionTitle}>
          <Text style={[styles.title1,{color: theme.colors.text}]}>Transaction</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
  },
  subtitle2: {
    fontSize: 16,
    color: "#3951A8",
    marginRight: 30,
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
