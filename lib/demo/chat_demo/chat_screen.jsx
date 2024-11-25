import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {CommonButton} from '../../common_components/common_button';
import {CommonTextFormField} from '../../common_components/common_textformfield';
import {useRef, useState} from 'react';
export const ChatScreenDemo = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const messageUseRef = useRef('');
  const onChangeText = value => {
    setMessage(value);
  };

  const onPress = () => {
    console.log(data);

    setData(prevData => [message, ...prevData]);
    setMessage('');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>AppBar</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <FlatList
          inverted={true}
          style={{flex: 1}}
          data={data}
          renderItem={({item}) => (
            <Text
              style={{
                color: 'black',
                backgroundColor: 'red',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                overflow: 'hidden',
                alignSelf: 'flex-start',
                margin: 10,
              }}>
              {item}
            </Text>
          )}></FlatList>
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View
          style={{
            paddingHorizontal: 10,
            flex: 5,
          }}>
          <CommonTextFormField
            value={message}
            title="Enter Message"
            onChange={onChangeText}
          />
        </View>
        <View style={{paddingHorizontal: 0, flex: 2, paddingHorizontal: 10}}>
          <CommonButton title="Send" onPress={onPress} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
