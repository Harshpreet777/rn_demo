import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export const TextFormField = () => {
  return (
    <SafeAreaView>
      <View style={[style.textInputView, {margin: 20}]}>
        <TextInput
          placeholder="00 0000 0000"
          style={{
            flex: 1,
            borderColor: '#E9EAEB',
            backgroundColor: '#F4F4F5',
            borderWidth: 1,
            paddingVertical: 18.5,
            paddingHorizontal: 16,
            borderRadius: 8,
            marginTop: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
  },
});
