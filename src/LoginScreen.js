import React, { Component } from 'react';
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import PasswordVisibilityIcon from './PasswordVisibilityIcon';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        showPassword: false,
        showUsernameError: false,
        showPasswordError: false,
    };
    this.passwordVisibilityToggled = this.passwordVisibilityToggled.bind(this);
    this.submitPressed = this.submitPressed.bind(this);
  }

  passwordVisibilityToggled() {
    console.log("this.state: ", this.state);
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  submitPressed() {
    console.log("submitPressed this.state: ", this.state);
    this.setState({
        showUsernameError: this.state.username.length < 4,
        showPasswordError: this.state.password.length < 8,
    });
  }

  render() {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View>

                <Text style={styles.header}>Login</Text>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                        onChangeText={(username) => this.setState({username})}
                    />
                    {this.state.showUsernameError &&
                        <Text style={styles.errorText}>Please enter a user name.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                  <PasswordVisibilityIcon showPassword={this.state.showPassword} onIconTapped={this.passwordVisibilityToggled}/>
                  <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={this.state.showPassword}
                    onChangeText={(password) => this.setState({password})}
                  />
                    {this.state.showPasswordError &&
                        <Text style={styles.errorText}>Please enter a password.</Text>
                    }
                </View>

                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={this.submitPressed} />
                </View>

              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      padding: 24,
      margin: 12,
      textAlign: "center",
    },
    inputTextWrapper: {
      marginBottom: 24,
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      paddingRight: 30,
    },
    errorText: {
        color: 'red',
        fontSize: 10,
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop:36,
    }
  });
