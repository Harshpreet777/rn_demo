import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import {Drawer1} from './drawer1_screen';
import { Drawer2 } from './drawer2_screen';
const Drawer = createDrawerNavigator();

export const DrawerScreenDemo = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Drawer1"
        component={Drawer1}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Drawer2"
        component={Drawer2}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
