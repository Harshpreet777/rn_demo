import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const Drawer2 = props => {
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
            {`ChatScreen \nDrawer 2`}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
