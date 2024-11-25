import {useState} from 'react';
import {Button, Modal, View} from 'react-native';

export const ModalDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{backgroundColor: 'yellow', flex: 1, padding: 100}}>
      <Button title="Press me" color="red" onPress={() => setIsVisible(true)} />
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="slide"
        presentationStyle="formSheet">
        <View style={{backgroundColor: 'red', flex: 1, padding: 0}}>
          <Button
            title="Press me"
            color="blue"
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};
