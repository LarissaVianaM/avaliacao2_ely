import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Futebol from './src/Futebol';
import Lista from './src/Lista';
import Novo from './src/Novo';

const Projeto = createStackNavigator({
  Futebol,
  Lista,
  Novo
});
export default createAppContainer(Projeto);
