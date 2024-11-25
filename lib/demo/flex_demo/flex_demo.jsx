import {SafeAreaView, View, FlatList, Text} from 'react-native';

export const FlexDemo = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection:'row', flexWrap:'wrap'  ,}}>
      <View style={{backgroundColor: 'blue', height: 300, width: 100}}></View>
      <View
        style={{backgroundColor: 'skyblue', height: 300, width: 100, }}></View>
      <View style={{backgroundColor: 'cyan', height: 300, width: 100}}></View>
      <View
        style={{backgroundColor: 'steelblue', height: 300, width: 100}}></View>
      <View
        style={{backgroundColor: 'powderblue', height: 300, width: 100}}></View>
    </SafeAreaView>
  );
};
