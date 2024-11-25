import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ImageConstants} from '../../constants/image_constants';
import {StringConstant} from '../../constants/string_constants';
import {ColorConstant} from '../../constants/color_constants';

export const WelcomeScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={ImageConstants.welcomeImage} style={Styles.image} />
          <Text style={[Styles.titleText, {paddingTop: 40}]}>
            {StringConstant.welcomeTitle}
          </Text>
          <Text style={[Styles.titleText, {paddingTop: 10}]}>
            {StringConstant.welcomeTitle2}
          </Text>
          <Text style={[Styles.text]}>{StringConstant.welcomeMessage}</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 50,
              paddingHorizontal: 40,
            }}>
            <TouchableOpacity
              style={[Styles.button, Styles.shadow]}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={Styles.loginText}>{StringConstant.login}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Registration')}
              style={[
                Styles.button,
                {backgroundColor: ColorConstant.white, marginLeft: 40},
              ]}>
              <Text style={[Styles.loginText, {color: ColorConstant.black}]}>
                {StringConstant.register}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  image: {
    height: 360,
    width: 360,
    alignSelf: 'center',
  },
  titleText: {
    color: ColorConstant.blue,
    fontSize: 35,
    fontWeight: '600',
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: ColorConstant.black,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  button: {
    backgroundColor: ColorConstant.blue,
    borderRadius: 10,
    justifyContent: 'center',
    width: '45%',
    height: 50,
  },
  shadow: {
    shadowColor: ColorConstant.blue,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 5},
  },
  loginText: {
    color: ColorConstant.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
