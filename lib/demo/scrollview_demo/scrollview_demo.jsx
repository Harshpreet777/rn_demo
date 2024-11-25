import {useRef} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Animated from 'react-native-reanimated';

export const ScrollViewDemo = props => {
  const scrollViewRef1 = useRef(null);
  const scrollViewRef2 = useRef(null);

  const onScroll1 = event => {
    const contentOffSetY = event.nativeEvent.contentOffset.y;
    if (scrollViewRef2.current) {
      scrollViewRef2.current.scrollTo({y: contentOffSetY, animated: false});
    }
  };
  const onScroll2 = event => {
    const contentOffSetY = event.nativeEvent.contentOffset.y;
    if (scrollViewRef1.current) {
      scrollViewRef1.current.scrollTo({y: contentOffSetY, animated: false});
    }
  };

  const Vertical = () => {
    return Array.from({length: 100}, (_, index) => ['Vertical']);
  };
  const BothDirection = () => {
    return Array.from({length: 100}, (_, index) => [
      'Both Direction Vertical and Horizontal',
    ]);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView ref={scrollViewRef1} onScroll={onScroll1}>
        <FlatList
          scrollEnabled={false}
          data={Vertical()}
          renderItem={({item}) => (
            <Text
              style={{
                fontSize: 25,
                color: 'red',
                alignSelf: 'center',
                paddingVertical: 10,
              }}>
              {item}
            </Text>
          )}
        />
      </ScrollView>
      <ScrollView ref={scrollViewRef2} onScroll={onScroll2}>
        <ScrollView horizontal={true}>
          <FlatList
            scrollEnabled={false}
            data={BothDirection()}
            renderItem={({item}) => (
              <Text
                style={{
                  fontSize: 25,
                  color: 'blue',
                  alignSelf: 'center',
                  paddingVertical: 10,
                }}>
                {item}
              </Text>
            )}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
