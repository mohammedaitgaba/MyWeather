import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView  } from 'react-native';
import Home from './pages/Home';
export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start',
    overFlow:'hidden',
  },

});
