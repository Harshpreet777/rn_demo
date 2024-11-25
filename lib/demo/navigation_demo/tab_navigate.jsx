import {TabScreen1} from './tab1_screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen2} from './tab2_screen';
import {TabScreen3} from './tab3_screen';
import {Image, View} from 'react-native';
import {ImageConstants} from '../../../constants/image_constants';
import {DrawerScreenDemo} from './drawer_screen';
import { ChatNavigation } from './chat_navigation';
import { TabNavigate2 } from './tab_navigate2';

const Tab = createBottomTabNavigator();
export const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="T1"
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
        name="T2"
        component={TabNavigate2}
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
        name="T3"
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
