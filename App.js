import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Log from './telas/login';
import Home from './telas/estoque';
import Fale from './telas/faleconosco';
export default function App() {
  return (
    <View style={styles.container}>
      <Log/>
      {/* <Home/> */}
      {/* <Fale/> */}
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
