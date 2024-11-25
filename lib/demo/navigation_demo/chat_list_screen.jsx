import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const ChatListScreen = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => {props.navigation.navigate('ChatDetails')}}>
        <View>
          <Text
            style={{
              fontSize: 25,
            }}>
            Chat List Screen
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
