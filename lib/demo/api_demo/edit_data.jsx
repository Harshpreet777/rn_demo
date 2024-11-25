import {CommonTextFormField} from '../../common_components/common_textformfield';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {CommonButton} from '../../common_components/common_button';
import {useRef} from 'react';

export const EditDataDemo = props => {
  const { id } = props.route.params;

  const url = 'https://ca6092d76f8f5b07f39e.free.beeceptor.com/api/users/';
  const userIdRef = useRef('');
  const bodyRef = useRef('');
  const userIdChangeText = value => {
    userIdRef.current = value;
  };
  const bodyChangeText = value => {
    bodyRef.current = value;
  };
  const onPress = async () => {
    try {
      console.log(userIdRef.current);

      let resp = await fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify({
          userId: userIdRef.current,
          id: id,
          title: bodyRef.current,
          body: bodyRef.current,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let datas = await resp.json();
      console.log(datas);
    } catch (e) {
      console.log('e', e);
    }
  };
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={{paddingHorizontal: 20}}>
        <CommonTextFormField
          title="UserId"
          focus={false}
          onChange={userIdChangeText}
        />
        <CommonTextFormField
          title="Body"
          focus={false}
          onChange={bodyChangeText}
        />
        <CommonButton title="Edit Data" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
