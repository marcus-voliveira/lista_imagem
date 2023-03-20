import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Livraria</Text>
      <View>        
        <Text style={{ fontSize: 20, color: '#fff'}}>Livro 1</Text>
      </View>
      <View>        
        <Text style={{ fontSize: 20, color: '#fff'}}>Livro 1</Text>
      </View>
      <View>        
        <Text style={{ fontSize: 20, color: '#fff'}}>Livro 1</Text>
      </View>
      <View>        
        <Text style={{ fontSize: 20, color: '#fff'}}>Livro 1</Text>
      </View>
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
