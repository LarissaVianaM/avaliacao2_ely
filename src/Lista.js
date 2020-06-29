import React from 'react';
import {Button, Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Lista extends React.Component {
  static navigationOptions = {
    title: 'Times',
    
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
  constructor (props) {
    super(props);
    this.state = {dados: []};
    this.props.navigation.addListener(
          'didFocus',
          payload => {
            this.listar();
          }
    );
  } 
listar() {
  fetch('https://crudcrud.com/api/a3e40d1354fb4a95857caa968b650366/futebol')
      .then((response) => response.json())
      .then((responseJson) => {
        //Success 
        console.log(responseJson); 
        this.setState({dados: responseJson});
      })
      .catch((error) => console.error(error));
}

onVoltar(){
  this.props.navigation.navigate('Futebol');

}    
render() {
    return(
      <View> 
        <View style={styles.container}>
              {this.state.dados.map((l,i) => (
                <Text style={styles.corpo}>> O time {l.nome} foi fundado em {l.fundacao}. Tem como presidente {l.presidente} e seu mascote é o(a) {l.mascote}.</Text>))
              }

          <TouchableOpacity style={styles.botoes} onPress={this.onVoltar.bind(this)}>
              <Text style={styles.outros}> Voltar </Text>
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
  botoes: {
    textAlign: 'center',
    backgroundColor: '#F08080',
    borderRadius: 7,
    margin: 20,
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
  corpo: {
    textAlign: 'justify',
    color: '#191970',
    margin: 7,
    marginHorizontal: 15,
    fontFamily: 'Courier',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
