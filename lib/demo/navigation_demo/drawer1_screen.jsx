import {CommonActions} from '@react-navigation/native';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const Drawer1 = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
            }}>
            {`ChatScreen \nDrawer1`}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={() => {
          props.navigation.navigate('T3');
          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Tab3'}],
            }),
          );
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
