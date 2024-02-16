import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BasicComponents from './BasicComponents';
import ButtonTest from './ButtonTest';
import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'PlantPal'}}
        />
        <Stack.Screen name="Catpage" component={BasicComponents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;