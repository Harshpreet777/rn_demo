import {TabScreen1} from './tab1_screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen2} from './tab2_screen';
import {TabScreen3} from './tab3_screen';
import {Image, View} from 'react-native';
import {ImageConstants} from '../../../constants/image_constants';
import {DrawerScreenDemo} from './drawer_screen';
import { ChatNavigation } from './chat_navigation';
import { TabNavigate3 } from './tab_navigate3';

const Tab = createBottomTabNavigator();
export const TabNavigate2 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
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
        name="Tab2"
        component={TabNavigate3}
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
        name="ChatNavigate"
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
