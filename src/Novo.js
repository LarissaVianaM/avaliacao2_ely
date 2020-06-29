import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default class App extends Component {
  static navigationOptions = {
    title: 'Cadastro',
    
    headerStyle: {
      backgroundColor: '#F08080'
      
    },
    headerTintColor: '#FFF0F5',
    headerTitleStyle: {
      fontSize: 20,
      fontFamily: 'Jazz LET', 
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
      this.state = {
        nome: '',
        fundacao: '',
        presidente: '',
        mascote: ''
      };
  }

onSalvar() {
  fetch('https://crudcrud.com/api/a3e40d1354fb4a95857caa968b650366/futebol', {
     headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify(this.state)
})
.then(response => response.json())
.then(data => {
  this.props.navigation.navigate('Lista');
  })
}

onCancelar(){
  this.props.navigation.navigate('Futebol');

}
render() {
    return (
        <View>
          <View style={styles.container}>       
            <TextInput style={styles.titulo} value={this.state.nome}  onChangeText={(nome) => this.setState({ nome })} placeholder={'Nome do time'} />

            <TextInput style={styles.titulo} value={this.state.fundacao}  onChangeText={(fundacao) => this.setState({fundacao})} placeholder={'Ano de fundação'}  />

            <TextInput style={styles.titulo} value={this.state.presidente}  onChangeText={(presidente) => this.setState({ presidente})} placeholder={'Nome do presidente'} />
            
            <TextInput style={styles.titulo} value={this.state.mascote}  onChangeText={(mascote) => this.setState({ mascote})} placeholder={'Mascote'} />
           
            <TouchableOpacity style={styles.botoes} onPress={this.onSalvar.bind(this)}>
              <Text style={styles.outros}> Salvar </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoes} onPress={this.onCancelar.bind(this)}>
              <Text style={styles.outros}> Cancelar </Text>
            </TouchableOpacity>
          </View>  
        </View>

        
);
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    textAlign: 'center',
    margin: 5,
    fontFamily: 'Courier',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#FFF0F5',   
    borderRadius: 7, 
    paddingHorizontal: 50,
    paddingVertical: 4,

  },
  botoes: {
    textAlign: 'center',
    backgroundColor: '#F08080',
    borderRadius: 7,
    margin: 10,  
    paddingHorizontal: 50,
    paddingVertical: 4,
  },
  outros: {
    textAlign: 'center',
    color: '#FFF0F5',
    margin: 1,
    fontFamily: 'Jazz LET', 
    fontSize: 20,
    fontWeight: 'bold',
  },
});
