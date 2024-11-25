import {useEffect, useRef, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CommonButton} from '../common_components/common_button';

export const FunctionLifeCycleDemo = () => {
  const [count, setCount] = useState(0);
  const countUseRef = useRef(0);

  function onClick() {
    countUseRef.current = countUseRef.current + 1;
    console.log(`CountUseRef=${countUseRef.current}`);
  }

  useEffect(() => {
    console.log(`Count ${count}`);
    console.log(`Count2 ${countUseRef.current}`);
  }, [count]);
  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>
        Count= {count}
      </Text>
      <CommonButton
        title="usestate"
        onPress={() => setCount(count + 1)}></CommonButton>
      <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>
        Count= {countUseRef.current}
      </Text>
      <CommonButton title="useref" onPress={() => onClick()}></CommonButton>
    </SafeAreaView>
  );
};
