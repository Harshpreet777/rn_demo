import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';

export const GetApiDemo = props => {
  const [data, setData] = useState(null);
  const url = 'https://dog.ceo/api/breeds/image/random';
  const url2 = 'https://jsonplaceholder.typicode.com/posts';
  const url3 = 'https://ca6092d76f8f5b07f39e.free.beeceptor.com/api/users/';
  // useEffect( () => {
  //    fetchData();
  // });
  const fetchData = async () => {
    try {
      let resp = await fetch(url3);
      let datas = await resp.json();
      setData(datas);
    } catch (e) {
      console.log('e', e);
    }
  };
  const postData = async () => {
    try {
      let resp = await fetch(url3, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 6,
          id: 6,
          title: 'six',
          body: 'six',
        }),
      });
      let datas = await resp.json();
      console.log(datas);
    } catch (e) {
      console.log('e', e);
    }
  };
  const putData = async () => {
    try {
      let resp = await fetch(`${url3}3`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId: 1,
          id: 1,
          title: 'one',
          body: 'one',
        }),
      });
      let datas = await resp.json();
      console.log(datas);
    } catch (e) {
      console.log('e', e);
    }
  };
  const deleteData = async () => {
    try {
      let resp = await fetch(`${url3}0`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      });
      let datas = await resp.json();
      console.log(datas);
    } catch (e) {
      console.log('e', e);
    }
  };
  return (
    <SafeAreaView style={[Styles.safeAreaView]}>
      <TouchableOpacity style={[Styles.button]} onPress={fetchData}>
        <Text style={[Styles.text]}>Get Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[Styles.button]} onPress={postData}>
        <Text style={[Styles.text]}>Post Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[Styles.button]} onPress={putData}>
        <Text style={[Styles.text]}>Put Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[Styles.button]} onPress={deleteData}>
        <Text style={[Styles.text]}>Delete Data</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.1}
            style={{
              height: 40,
              width: 200,
              backgroundColor: 'cyan',
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              props.navigation.navigate('Edit', {
                id: item.id,
              });
            }}>
            <Text>{item.title}</Text>
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
      {/* {data != null ? (
        <Image
          source={{uri: data.message}}
          style={{
            height: 200,
            width: 200,
            marginVertical: 20,
            borderRadius: 20,
          }}
        />
      ) : null} */}
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});
