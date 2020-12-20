import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.setState({
      emailId: null,
      password: null,
    });
  }
  login = async (emailId, password) => {
    if (emailId && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password);
        if (response) {
          this.props.navigation.navigate("TabNavigator");
        }
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User does not exist");
            break;
          case "auth/invalid-email":
            alert("Invalid Email Address");
            break;
          default:
            alert("Invalid Password");
            break;
        }
      }
    } else {
      alert("Enter email and password");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={{ alignItems: "center", marginTop: 20 }}>
        <View>
          <Image
            source={require("../assets/Logo.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ textAlign: "center", fontSize: 30 }}>Wily</Text>
        </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="enter Password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderWidth: 1,
              marginTop: 20,
              paddingTop: 5,
              borderRadius: 7,
            }}
            onPress={() => {
              this.login(this.state.emailId, this.state.password);
            }}
          >
            <Text style={{ textAlign: "center" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
});
