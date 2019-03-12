/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react'
import {View, Button} from 'react-native'
import TextField from 'textfield'
import validation from 'validation'
import validate from 'validation_wrapper'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    }
  }

  register() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })

    if (!emailError && !passwordError) {
      alert('Details are valid!')
    }
  }

  render() {
    return (
      <View>
      <TextField
        onChangeText={value => this.setState({email: value.trim()})}
        onBlur={() => {
          this.setState({
            emailError: validate('email', this.state.email)
          })
        }}
        error={this.state.emailError}/>

      <TextField
        onChangeText={value => this.setState({password: value.trim()})}
        onBlur={() => {
          this.setState({
            passwordError: validate('password', this.state.password)
          })
        }}
        error={this.state.passwordError}
        secureTextEntry={true}/>

      <Button
        title='Register'
        onPress={this.validateRegister}/>

    </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
