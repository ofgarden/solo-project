/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitionScreen from '../screens/ExhibitionScreen';

const Stack = createStackNavigator();

export default function ExhibitionStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#152238',
        },
        headerTitleAlign: 'left',
        headerTintColor: '#FFFFF3',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: '25',
        },
      }}
    >
      <Stack.Screen name="Current" component={ExhibitionScreen} />
    </Stack.Navigator>
  );
}
