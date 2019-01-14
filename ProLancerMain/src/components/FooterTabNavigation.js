import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Content, Icon } from 'native-base';
import styles from '../styles/styles.js';
import SearchScreen from '../screens/SearchScreen';

const getTabBarIcon = (navigation, focused) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Profile') {
    iconName = 'user';
  } else if (routeName === 'Settings') {
    iconName = 'gear';
  } else if (routeName === 'Search') {
    iconName = 'search';
  }

  // You can return any component that you like here!
  return (
    <Content style={{paddingTop: 8}}>
      <Icon type="FontAwesome" name={iconName}
            style={[{fontSize: 20}, {color: focused? 'white':'black'}]} 
      />
    </Content>
    );
};


export default FooterTabNAvigation = createAppContainer (
  createBottomTabNavigator(
    {
      Profile: { screen: ProfileScreen },
      Search: { screen: SearchScreen },
      Settings: { screen: SettingsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) =>
          getTabBarIcon(navigation, focused),
      }),
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        style: { 
          backgroundColor: '#9f0001'
         }
      },
    }
  )
);
