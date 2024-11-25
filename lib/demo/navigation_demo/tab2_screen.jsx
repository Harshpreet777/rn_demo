import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';

export const TabScreen2 = () => {
    return (
        <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 25,
            }}>
            Tab 2
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    );
}