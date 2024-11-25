import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {StringConstant} from '../../constants/string_constants';
import {ColorConstant} from '../../constants/color_constants';
import {useRef, useState} from 'react';
import {CommonTextFormField} from '../common_components/common_textformfield';
import {ImageConstants} from '../../constants/image_constants';
import {CommonButton} from '../common_components/common_button';

export const LoginScreen = props => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const onPassChangeText = value => {
    passRef.current = value;
  };

  const onEmailChangeText = value => {
    emailRef.current = value;
  };
  const onFormSubmit = () => {
    var re =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    setIsEmailValid(re.test(emailRef.current));
    if (passRef.current !== null) {
      if (passRef.current.length < 8) {
        setIsPassValid(false);
      } else {
        setIsPassValid(true);
      }
    } else {
      setIsPassValid(false);
    }
  };
  console.log('>>>>');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{backgroundColor: ColorConstant.white, flex: 1}}>
        <View style={{paddingHorizontal: 30}}>
          <Text style={Styles.loginText}>{StringConstant.loginHere}</Text>
          <Text style={Styles.welcomeBackMsg}>
            {StringConstant.welcomeBackMsg}
          </Text>
          <CommonTextFormField
            focus={false}
            title={StringConstant.email}
            // value={emailRef.current}
            onChange={newText => {
              onEmailChangeText(newText);
            }}
          />
          {isEmailValid == false ? (
            <Text style={Styles.errorText}>{StringConstant.validEmail}</Text>
          ) : (
            <></>
          )}
          <CommonTextFormField
            focus={false}
            title={StringConstant.password}
            // value={passRef.current}
            onChange={newText => {
              onPassChangeText(newText);
            }}
            secureText={true}
          />
          {isPassValid == false ? (
            <Text style={Styles.errorText}>{StringConstant.validPass} </Text>
          ) : (
            <></>
          )}
          <Text style={[Styles.forgetText]}>{StringConstant.forgot}</Text>
          <CommonButton title={StringConstant.signIn} onPress={onFormSubmit} />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Registration')}>
            <Text
              style={[
                Styles.welcomeBackMsg,
                {fontSize: 14, paddingVertical: 25},
              ]}>
              {StringConstant.create}
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              Styles.welcomeBackMsg,
              {
                fontSize: 14,
                paddingTop: 15,
                paddingBottom: 20,
                color: ColorConstant.blue,
              },
            ]}>
            {StringConstant.orContinueWith}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={Styles.iconBtn}>
              <Image
                source={ImageConstants.googleIcon}
                style={{height: 24, width: 24}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconBtn}>
              <Image
                source={ImageConstants.facebookIcon}
                style={{height: 24, width: 24}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconBtn}>
              <Image
                source={ImageConstants.appleIcon}
                style={{height: 24, width: 24}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const Styles = StyleSheet.create({
  loginText: {
    color: ColorConstant.blue,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 30,
  },
  welcomeBackMsg: {
    color: ColorConstant.black,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 60,
    paddingBottom: 60,
  },
  forgetText: {
    color: ColorConstant.blue,
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  iconBtn: {
    backgroundColor: ColorConstant.lightGrey,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  errorText: {
    color: ColorConstant.red,
  },
});
