import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Button, NativeBaseProvider,Icon as NBIcon,} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeAreaProvider from './src/context/SafeAreaProvider';

const App = () => {
  return (

      <SafeAreaProvider>
        <ScrollView>
          <View>
            <Text>App</Text>
          </View>
          {/* <Button
          leftIcon={<NBIcon as={Icon} name="home" size="lg" />}
          size="sm"
          width="40"
          colorScheme="success"
          >
          About Page
        </Button> */}
        </ScrollView>
      </SafeAreaProvider>

  );
};

export default App;
