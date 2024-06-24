import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const VisaCard = () => {
  return (
    <View style = {styles.card}>
        <Image source = {require ("../assets/Card.png")}/>
    </View>
  )
}
const styles = StyleSheet.create({
card: {
    marginLeft: 20,
    marginTop: 20,
}
})

export default VisaCard