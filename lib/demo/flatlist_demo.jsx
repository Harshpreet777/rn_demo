import {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Pressable,
  RefreshControl,
} from 'react-native';

export const FlatListDemo = () => {
  const initialData = Array.from({length: 15}, (_, index) => ({
    id: index + 1,
    item: `Item ${index + 1}`,
  }));
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  function onRefresh() {
    setRefresh(true);
    setData(initialData);
    setRefresh(false);
  }
  function pagination() {
    console.log('enter ------>>');
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const newData = Array.from({length: 15}, (_, index) => ({
        id: data.length + index + 1,
        item: `Item ${data.length + index + 1}`,
      }));
      setData(prevData => [...prevData, ...newData]);
      setLoading(false);
    }, 1000);
  }

  return (
    <SafeAreaView style={[Styles.safeAreaView]}>
      <FlatList
        data={data}
        refreshControl={
          refresh === false ? (
            <RefreshControl
              onRefresh={() => {
                onRefresh();
              }}
              tintColor="blue"
              refreshing={refresh}
            />
          ) : null
        }
        onEndReached={pagination}
        // onEndReachedThreshold={0.5}
        keyExtractor={item => item.id}
        ListFooterComponent={() => {
          console.log('>>>>');
          return loading ? <ActivityIndicator size="large" /> : null;
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.1}
            style={{
              height: 40,
              backgroundColor: 'cyan',
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => Alert.alert(`${item.id}`)}>
            <Text>{item.item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
