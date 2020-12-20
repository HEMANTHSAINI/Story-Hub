import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens.js/LoginScreen';

import ReadStoryScreen from './screens.js/ReadStoryScreen';
import WriteStoryScreen from './screens.js/WriteStoryScreen';



export default class App extends React.Component {
  render() {
    return (

      <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: ReadStoryScreen,
  WriteStory: WriteStoryScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        // console.log(routeName)
        if (routeName === "ReadStory") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 40, height: 40 }}
            />
          )

        }
        else if (routeName === "WriteStory") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 40, height: 40 }}
            />)

        }
      }
    })
  }
);
const SwitchNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer =  createAppContainer(SwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});