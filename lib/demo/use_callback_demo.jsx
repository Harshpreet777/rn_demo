import React, {useState, useCallback} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

const ChildComponent = React.memo(({onIncrement}) => {
  console.log('Child re-rendered');
  return <Button title="Increment" onPress={onIncrement} />;
});

export const UseCallBackDemo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <SafeAreaView>
      <Text>Count: {count}</Text>
      <ChildComponent onIncrement={incrementCount} />
    </SafeAreaView>
  );
};
