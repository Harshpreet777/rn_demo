import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetApiDemo} from './crud_demo';
import {EditDataDemo} from './edit_data';

const Stack = createNativeStackNavigator();

export const ApiNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'none'}}>
        <Stack.Screen
          name="Crud"
          component={GetApiDemo}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Edit" component={EditDataDemo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
