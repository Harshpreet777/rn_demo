import {StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import {ColorConstant} from '../../constants/color_constants';
import {useState} from 'react';
export const CommonTextFormField = ({
  focus = false,
  secureText = false,
  title,
  onChange,
  ref,
  value,
}) => {
  const [isFocus, setIsFocus] = useState(focus);

  return (
    <TextInput
      ref={ref}
      clearTextOnFocus={true}
      autoCapitalize={false}
      autoCorrect={false}
      selectTextOnFocus={false}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      placeholder={title}
      placeholderTextColor={ColorConstant.grey}
      value={value}
      secureTextEntry={secureText}
      style={[Styles.textfield, {borderWidth: isFocus == '' ? 0 : 2}]}
      onChangeText={newText => {
        onChange(newText);
      }}></TextInput>
  );
};
const Styles = StyleSheet.create({
  textfield: {
    backgroundColor: ColorConstant.lightBlue,
    padding: 20,
    borderRadius: 10,
    color: ColorConstant.grey,
    fontSize: 16,
    fontWeight: '400',
    borderColor: ColorConstant.blue,
    marginVertical: 15,
  },
});
