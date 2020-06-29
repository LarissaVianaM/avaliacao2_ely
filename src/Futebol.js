import React from 'react';
import {Button, Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Futebol extends React.Component {
  static navigationOptions = {
    title: 'Início',
    
    headerStyle: {
      backgroundColor: '#6A5ACD'
      
    },
    headerTintColor: '#FAF0E6',
    headerTitleStyle: {
      fontSize: 20,
      fontFamily: 'Jazz LET', 
      fontWeight: 'bold',
    },
  };
  render() {
    return(
      <View> 
        <View style={styles.container}>
          <Text style={styles.titulo}>Times de futebol feminino no Brasil </Text>

          <Image style={styles.foto} source={require('../assets/futebol.jpg')}/>

          <Text style={styles.outros} > Você sabia?</Text>

          <Text style={styles.corpo}> As primeiras referências de partidas de futebol feminino surgiram nos anos 20.</Text>

          <Text style={styles.corpo}> Após anos de resistência e barreiras quebradas, elas conquistaram muitas vitórias e atualmente há vários times espalhados pelo Brasil...</Text>

           <TouchableOpacity style={styles.botoes} 
              onPress={() => this.props.navigation.navigate('Lista')}>
              <Text style={styles.textobotao}> Conheça os times </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes} 
            onPress={() => this.props.navigation.navigate('Novo')}>
            <Text style={styles.textobotao}>Cadastrar novo time </Text>
          </TouchableOpacity>

          
        </View> 
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    margin: 10,
    color: '#F08080',
    fontFamily: 'Monotype Corsiva',
    fontWeight: 'bold',
  },
  botoes: {
    textAlign: 'center',
    backgroundColor: '#6A5ACD',
    borderRadius: 7,
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 4,
    
  },
  textobotao:{
    color: '#FAF0E6',
    fontSize: 20,
    fontFamily: 'Jazz LET', 
    fontWeight: 'bold',
  },
  corpo: {
    textAlign: 'justify',
    color: '#191970',
    marginHorizontal: 15,
    fontFamily: 'Courier',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outros: {
    textAlign: 'center',
    color: '#F08080',
    fontWeight: 'bold',
    fontFamily: 'Courier', 
    fontSize: 18,
    backgroundColor: '#FFE4C4',
    borderRadius: 10,
    margin: 10,
  },
  foto: {
    margin: 5 ,
    height: 130,
    width: 170,
    borderRadius: 50,
}, 
});

