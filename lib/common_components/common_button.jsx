import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ColorConstant} from '../../constants/color_constants';

export const CommonButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={Styles.signInBtn} onPress={onPress}>
      <Text style={Styles.signInText}>{title}</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  signInBtn: {
    backgroundColor: ColorConstant.blue,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  signInText: {
    color: ColorConstant.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
