import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserListScreen from '../screens/UserList/UserList';
import UserDetailScreen from '../screens/UserDetail/UserDetail';
import { RootStackParamList } from './AppNavigator.types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='UserList' component={UserListScreen} />
        <Stack.Screen name='UserDetail' component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
