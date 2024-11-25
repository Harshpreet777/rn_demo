import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {StringConstant} from '../../constants/string_constants';
import {ColorConstant} from '../../constants/color_constants';
import {useState} from 'react';
import {CommonTextFormField} from '../common_components/common_textformfield';
import {ImageConstants} from '../../constants/image_constants';
import {CommonButton} from '../common_components/common_button';

export const RegistrationScreen = props => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [pass, setPass] = useState('');
  const [isPassValid, setIsPassValid] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [isConfirmPassValid, setConfirmIsPassValid] = useState(true);

  const onFormSubmit = () => {
    var re =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    setIsEmailValid(re.test(email));
    console.log(re.test(email));

    if (pass.length < 8) {
      setIsPassValid(false);
    } else {
      setIsPassValid(true);
    }
    if (pass != confirmPass) {
      setConfirmIsPassValid(false);
    } else {
      setConfirmIsPassValid(true);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: ColorConstant.white, flex: 1}}>
      <View style={{paddingHorizontal: 30}}>
        <Text style={Styles.createAccount}>{StringConstant.createAccount}</Text>
        <Text style={Styles.createAccMsg}>
          {StringConstant.createAccountMsg}
        </Text>
        <CommonTextFormField
          focus={false}
          title={StringConstant.email}
          value={email}
          onChange={value => {
            setEmail(value);
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
          value={pass}
          onChange={value => {
            setPass(value);
          }}
          secureText={true}
        />
        {isPassValid == false ? (
          <Text style={Styles.errorText}>{StringConstant.validPass} </Text>
        ) : (
          <></>
        )}
        <CommonTextFormField
          focus={false}
          title={StringConstant.confirmPass}
          value={confirmPass}
          onChange={value => {
            setConfirmPass(value);
          }}
          secureText={true}
        />
        {isConfirmPassValid == false ? (
          <Text style={Styles.errorText}>
            {StringConstant.validConfirmPass}{' '}
          </Text>
        ) : (
          <></>
        )}
        <CommonButton title={StringConstant.signUp} onPress={onFormSubmit} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text
            style={[
              Styles.createAccMsg,
              {fontSize: 14, fontWeight: '600', paddingVertical: 25},
            ]}>
            {StringConstant.alreadyHaveAcc}
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            Styles.createAccMsg,
            {
              fontSize: 14,
              paddingTop: 15,
              paddingBottom: 20,
              fontWeight: '600',
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
  );
};

const Styles = StyleSheet.create({
  createAccount: {
    color: ColorConstant.blue,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 30,
  },
  createAccMsg: {
    color: ColorConstant.black,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
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
