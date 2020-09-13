import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, result:0, resultText: ''}
    this.calculate = this.calculate.bind(this)
  }

  calculate(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)

    let s = this.state
    s.result = imc

    if (s.result < 16){
      s.resultText = 'Magreza grave'
    } 
    else if (s.result < 17) {
      s.resultText = 'Magreza moderada'
    }
    else if (s.result < 18.5) {
      s.resultText = 'Magreza leve'
    }
    else if (s.result < 25) {
      s.resultText = 'Saudável'
    }
    else if (s.result < 30) {
      s.resultText = 'Sobrepeso'
    }
    else if (s.result < 35) {
      s.resultText = 'Obesidade grau 1'
    }
    else if (s.result < 40) {
      s.resultText = 'Obesidade grau 2 (Severa)'
    }
    else {
      s.resultText = 'Obesidade grau 3 (Mórbida)'
    }
    this.setState(s)
  } 

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>

          <Text style={styles.title}>IMC</Text>
          <Text style={styles.description}>(Índice de Massa Corpórea)</Text>
          
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={'Massa'}
                keyboardType={'numeric'}
                style={styles.inputFields}
                onChangeText={(massa)=>{this.setState({massa})}}
              />
              <TextInput
                placeholder={'Altura'}
                keyboardType={'numeric'}
                style={styles.inputFields}
                onChangeText={(altura)=>{this.setState({altura})}}
              />
            </View>

            <TouchableOpacity style={styles.btnCalculate} onPress={this.calculate}>
              <Text style={styles.textBtn}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
            <Text style={[styles.result, {fontSize: 30, textAlign: 'center'}]}>{this.state.resultText}</Text>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputFields: {
    height: 60,
    width: '45%',
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 25,
    textAlign: 'center',
  },
  btnCalculate: {
    marginTop: 20,
    backgroundColor: '#89ffa5',
    alignSelf: 'center',
    width: '90%'
  },
  textBtn: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    height: 60,
    fontSize: 25,
  },
  result: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 45,
    paddingTop: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
  },
  description: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
}); 
