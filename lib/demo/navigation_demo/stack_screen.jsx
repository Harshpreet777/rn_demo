import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const StackScreenDemo = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Tab');
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
            }}>
            Press to use Stack Navigation
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
