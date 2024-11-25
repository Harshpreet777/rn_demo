import { useState } from "react";
import { Button, StatusBar, View } from "react-native";

export const StatusBarDemo = () => {
    const [isHidden, setIsHidden] = useState(false);
    return (
        
        <View style={{ backgroundColor: 'yellow', flex: 1, padding: 100 }}>
            {/* backgroundColor does not work on ios for statusbar */}
            <StatusBar barStyle='dark-content' hidden={isHidden}></StatusBar>
            <Button title='Show/Hide Status Bar' onPress={() => setIsHidden(!isHidden)}></Button>
        </View>
    );
};