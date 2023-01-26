import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
const Weathershower = () => {
  return (
    <View style={styles.container}>
        <Text>ddd</Text>
        <Image   style={styles.img} source={require('../assets/images/rany.png')} />
        <View style={styles.weatherInfo} >
            <Text style={styles.weather}>21</Text>
            <Text style={styles.degree}>°</Text>
            <Text style={styles.weatherInfo.type}>Thunderstorm</Text>
            <Text style={styles.moreWeatherInfo.Text}>Mondey,17 May</Text>
        </View>
        <View style={styles.moreWeatherInfo} >
            <View style={styles.items}>
                <Image style={styles.moreWeatherInfo.img} source={require('../assets/images/rany.png')} />
                <Text style={styles.moreWeatherInfo.number}>13km/h</Text>
                <Text style={styles.moreWeatherInfo.Text}>Wind</Text>
            </View>            
            <View style={styles.items}>
                <Image style={styles.moreWeatherInfo.img} source={require('../assets/images/rany.png')} />
                <Text style={styles.moreWeatherInfo.number}>13km/h</Text>
                <Text style={styles.moreWeatherInfo.Text}>Wind</Text>
            </View>
            <View style={styles.items}>
                <Image style={styles.moreWeatherInfo.img} source={require('../assets/images/rany.png')} />
                <Text style={styles.moreWeatherInfo.number}>13%</Text>
                <Text style={styles.moreWeatherInfo.Text}>Wind</Text>
            </View>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-around',
        paddingBottom:'20px',
        color:'white',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
        height : '70vh',
        width:'100%',
        borderBottomLeftRadius:"45px",
        borderBottomRightRadius:"45px",
        boxShadow: 'rgba(7, 63, 141, 0.45) 0px 25px 20px -10px'
    },
    weather:{
        color:'white',
        fontSize:'132px',
        fontWeight:'700'
    },
    weatherInfo:{
        position:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        type:{
            color:'white',
            fontSize:'28px'
        }
    },
    degree:{
        position:'absolute',
        fontSize:'62px',
        right:'0',
        top:'32px',
        color:'#ffffffa3'
    },
    moreWeatherInfo:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        number:{
            color:'white',
            fontWeight:'600',
            fontSize:'14px'
        },
        Text:{
            color:'#ffffffa3'
        },
        img:{
            width:'25px',
            height:'25px'
        }
    },
    items:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:'200px',
        height:'200px',
    }
})
export default Weathershower