import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const TabScreen3 = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('ChatList')}>
        <View>
          <Text
            style={{
              fontSize: 25,
            }}>
            Tab 3
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
