import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
//import * as Svg from 'react-native-svg';

export default function App() {

const [Voltaje, setVoltaje] = useState()
const [Intensidad, setIntensidad] = useState()
const [Resistencia, setResistencia] = useState()
const [Resultado, setResultado] = useState()

const resultR = () => {
  setResistencia (parseFloat(Voltaje) / parseFloat(Intensidad))
  setVoltaje("")
  setIntensidad("")
}

const resultV = () => {
  setVoltaje (parseFloat(Resistencia) * parseFloat(Intensidad))  
  setResistencia("")
  setIntensidad("")
}
const resultI = () => {
  setIntensidad (parseFloat(Voltaje) / parseFloat(Resistencia))
  setResistencia("")
  setVoltaje("")
}

const ResultadoT = () => {
  setIntensidad (parseFloat(Voltaje) / parseFloat(Resistencia))
  setResistencia (parseFloat(Voltaje) / parseFloat(Intensidad))
  setVoltaje (parseFloat(Intensidad) * parseFloat(Resistencia))
}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Ohm</Text>
      <Text style={styles.subtitulo}> Voltaje | Intensidad | Resistencia </Text>
      <TextInput
        keyboardType='number-pad'
        placeholder="Introduce el voltaje"
        style={styles.textInput}
        onChangeText = {setVoltaje}
        value = {Voltaje}
      />
      <TextInput
        keyboardType='number-pad'
        placeholder="Introduce Intensidad"
        style={styles.textInput}
        onChangeText = {setIntensidad}
        value = {Intensidad}
      />

       <TextInput
        keyboardType='number-pad'
        placeholder="Introduce Resistencia"
        style={styles.textInput}
        onChangeText = {setResistencia}
        value = {Resistencia}
      />
      <Text style={styles.result}> {Resistencia} ohm | {Voltaje} V | {Intensidad} Amp</Text>
      
      <Button title='Resultado' onPress={ResultadoT}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subtitulo: {
    fontSize: 12,
    color: 'gray',
  },
  textInput: {
    fontSize: 18,
    paddingStart: 30,
    width: '80%',  
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginVertical: 15
  },
  result: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
