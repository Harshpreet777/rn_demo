import React, { useState, useMemo } from 'react';
import { View, Text, Button,SafeAreaView } from 'react-native';


export const UseMemoDemo = () => {
  const [count, setCount] = useState(0);

  const numbers = [1, 2, 3, 4, 5];

  const sum = useMemo(() => {
    console.log('Recalculating sum');
    return numbers.reduce((acc, number) => acc + number, 0);
  }, [numbers]); 
  return (
    <SafeAreaView>
      <Text>Sum of numbers: {sum}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
    </SafeAreaView>
  );
};



