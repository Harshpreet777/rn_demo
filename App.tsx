import React, {useEffect} from 'react';

import {Pressable, ScrollView, Text, View} from 'react-native';
import {Counter} from './lib/demo/counter';
import {StyleScreen} from './lib/demo/styles_screem';
import {TextFormField} from './lib/demo/textformfield';
import {Login} from './lib/demo/login_screen';
import {ImageDemo} from './lib/demo/image_demo';
import {ModalDemo} from './lib/demo/modal_demo';
import {StatusBarDemo} from './lib/demo/status_bar_demo';
import {AlertDemo} from './lib/demo/alert_demo';
import {RefreshDemo} from './lib/demo/refresh_control_demo';
import {WelcomeScreen} from './lib/form/welcome_screen';
import {LoginScreen} from './lib/form/login_screen';
import {RegistrationScreen} from './lib/form/registration_screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ClassLifeCycleDemo} from './lib/demo/lifecycle_class_demo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FunctionLifeCycleDemo} from './lib/demo/lifecycler_function_demo';
import {FlatListDemo} from './lib/demo/flatlist_demo';
import {StackScreenDemo} from './lib/demo/navigation_demo/stack_screen';
import {TabScreen} from './lib/demo/navigation_demo/tab_navigate';
import {DrawerScreenDemo} from './lib/demo/navigation_demo/drawer_screen';
import {ChatNavigation} from './lib/demo/navigation_demo/chat_navigation';
import {ScrollViewDemo} from './lib/demo/scrollview_demo/scrollview_demo';
import {HocDemo} from './lib/demo/hoc_demo';
import {UseMemoDemo} from './lib/demo/use_memo_demo';
import {UseCallBackDemo} from './lib/demo/use_callback_demo';
import {GetApiDemo} from './lib/demo/api_demo/crud_demo';
import {EditDataDemo} from './lib/demo/api_demo/edit_data';
import {ApiNavigation} from './lib/demo/api_demo/api_navigation';
import {ChatScreenDemo} from './lib/demo/chat_demo/chat_screen';
import {FlexDemo} from './lib/demo/flex_demo/flex_demo';
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  const getToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('token=', token);
    } catch (e) {
      console.log('e=', e);
    }
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
    console.log('fefef');
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });
  });
  return (
    // <FlexDemo />
    // <ApiNavigation/>
    // <ScrollViewDemo />
    // <FlatListDemo />
    // <UseCallBackDemo/>
    // <HocDemo/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'none'}}>
        <Stack.Screen
          name="Home"
          component={StackScreenDemo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreenDemo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={WelcomeScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Registration"
    //       component={RegistrationScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
