import {
  Text,
  Image,
  ImageBackground,
  View,
  Pressable,
  ImageSourcePropType,
} from 'react-native';

export const ImageDemo = () => {
  const batManLogo = require('../assets/batman.png');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
      }}>
      <Pressable
        onPress={() => console.log('OnPress')}
        onPressIn={() => console.log('OnPressIn')}
        onPressOut={() => console.log('OnPressOut')}
        onLongPress={() => console.log('OnLongPress')}>
        <Image source={batManLogo} style={{height: 200, width: 200}} />
      </Pressable>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{height: 200, width: 200}}
      />
      <ImageBackground
        source={batManLogo}
        style={{height: 300, width: 300, backgroundColor: 'red'}}>
        <Text>Hello</Text>
      </ImageBackground>
    </View>
  );
};
