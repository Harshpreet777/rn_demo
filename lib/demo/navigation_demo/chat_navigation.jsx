import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatListScreen} from './chat_list_screen';
import {ChatDetailsScreen} from './chat_details_screen';
import {TabScreen3} from './tab3_screen';
const Stack = createNativeStackNavigator();

export const ChatNavigation = props => {
  return (
    <Stack.Navigator screenOptions={{animation: 'none'}}>
      <Stack.Screen
        name="Tab3"
        component={TabScreen3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
