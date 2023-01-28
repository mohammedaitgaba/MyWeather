import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const DaysWeather = () => {
  return (
    <View style={styles.Card}>
        <Text style={styles.text}>23°</Text>
        <Text style={styles.text}>image</Text>
        <Text style={styles.text}>23°</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    Card:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 204, 255, 1), rgba(0, 113, 255, 1))`,
        width:'80px',
        height:'110px',
        border:"1px solid grey",
        borderRadius:"30px",
    },
    text:{
        color:'white',
        fontWeight:'600',
        fontSize:'18px'
    }
})
export default DaysWeather