import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ImageBackground
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
      s.resultText = 'Obesidade grau 2'
    }
    else {
      s.resultText = 'Obesidade grau 3'
    }
    this.setState(s)
  } 

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.mainContainer}>
          <ImageBackground
            style={styles.bgImage}
            source={require('./img/bg_white.jpg')}>
            <View>
              <Text style={styles.title}>IMC</Text>
              <Text style={styles.description}>(Índice de Massa Corpórea)</Text>
              <Image 
                style={styles.img}
                source={require('./img/coracao.png')}/>
              
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

                <TouchableOpacity 
                  style={styles.btnCalculate} 
                  onPress={this.calculate}
                  onPressIn={Keyboard.dismiss}
                >
                  <Text style={styles.textBtn}>Calcular</Text>
                </TouchableOpacity>

                <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
                <Text style={[styles.result, {fontSize: 30, textAlign: 'center'}]}>{this.state.resultText}</Text>

                <Text style={styles.footer}>
                  Desenvolvido por: <Text style={{color: '#f10'}}>Lucas Fernando</Text>.
                </Text>

            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
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
    margin: 5,
    fontSize: 25,
    textAlign: 'center',
    borderRadius: 10,
  },
  btnCalculate: {
    marginTop: 15,
    backgroundColor: '#89ffa5',
    alignSelf: 'center',
    width: '94%',
    borderRadius: 10,
  },
  textBtn: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    height: 60,
    fontSize: 25,
    fontWeight: '600',
  },
  result: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 45,
    paddingTop: 15,
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
    marginBottom: 10,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  footer: {
    alignSelf: 'center',
    marginTop: 130,
    justifyContent: 'flex-end',
  },
}); 
