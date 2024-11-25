import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const ChatDetailsScreen = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text
          style={{
            fontSize: 25,
                  }}>
                  Chat Details Screen
        </Text>
              <TouchableOpacity onPress={() => {
                  props.navigation.navigate('Drawer');
        }} style={{backgroundColor: 'red'}}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Press to open Chat Screen
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
