import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Image,  Text, View } from 'react-native';

function Card(props) {

  return (
    <View style={styles.card}>
      <Image
        style={{
          resizeMode:'100%',
          width: '100%',
          height: 200,
          marginBottom: 10
        }}/>
    </View>
  )
}
export default function App() {
  const livro = require('./assets/images/nada.jpeg')

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Livraria</Text>
      <View style={styles.card}>
        <Image style={{resizeMode: 'stretch', width: '100%', height: '200', marginBottom: 10 }} source={livro} />
        <Text style={{ fontSize: 20, color: '#fff'}}>Título</Text>
        <Text style={{ fontSize: 20, color: '#fff'}}>Preço</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#555',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#000',
    width: '40%',
    height: 270,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
