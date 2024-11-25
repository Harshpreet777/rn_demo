import {TabScreen1} from './tab1_screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen2} from './tab2_screen';
import {TabScreen3} from './tab3_screen';
import {Image, View} from 'react-native';
import {ImageConstants} from '../../../constants/image_constants';
import {DrawerScreenDemo} from './drawer_screen';
import { ChatNavigation } from './chat_navigation';

const Tab = createBottomTabNavigator();
export const TabNavigate3 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="e1"
        component={TabScreen1}
        options={{
          tabBarIcon: props => {
            return (
              <Image
                source={ImageConstants.homeIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: props?.focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="e2"
        component={TabScreen2}
        options={{
          tabBarIcon: props => {
            return (
              <Image
                source={ImageConstants.facebookIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: props?.focused ? 'orange' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="e3"
        component={ChatNavigation}
        options={{
          tabBarIcon: props => {
            return (
              <Image
                source={ImageConstants.googleIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: props?.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
