import { StyleSheet, Text, View,ScrollView,Button  } from 'react-native';
import React, { useState, useEffect } from 'react';
import Weathershower from '../componnents/weathershower';
import DaysWeather from '../componnents/DaysWeather';
import DaySwitcher from '../componnents/DaySwitcher';
import * as Location from 'expo-location';


export default function Home({navigation}) {
  const [logged, setlogged] = useState(true)
  const [data, setData] = useState([])
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitudew, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  
  let text = 'Waiting..';
  let key = "f513209bdb0890ce3722a8b63edbb556"
  let latitude = ''
  let longitude = ''
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();

  }, []);
  useEffect(()=>{
    getWeather()
  },[longitude])
  
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
     latitude = JSON.stringify(location.coords.latitude)
     longitude = JSON.stringify(location.coords.longitude)
  }
  const getWeather = async()=>{
    console.log(latitude);
    console.log(longitude);
    await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=32.2945181&lon=-9.2406895&units=metric&cnt=8&appid=${key}`)
      .then(res => res.json())
      .then(data=>setData(data))
      .catch(err=>console.log(err))
  }
  return (
    <>
{
  data?
    <View style={styles.container}>
    
        <Weathershower data={data}/>
        <View style={styles.daySwitcher}>
            <DaySwitcher data={data}/>
        </View>
        <View style={styles.days} >
            <DaysWeather data={data}/>
        </View>
        <View style={{width:'90%',padding:'30px'}}>
          <Text style={styles.text}>{latitude}{longitude}</Text>
        </View>
    </View>:null
}
    </>

  )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'black'
    },
    days:{
        display:"flex",
        flexDirection:'row',
      },
      daySwitcher:{
        width:'80%',
      },
      text : {
        color: '#fff',
      }
})