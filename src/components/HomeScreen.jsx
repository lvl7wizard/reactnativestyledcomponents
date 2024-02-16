import { Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to cat page"
      onPress={() =>
        navigation.navigate('Catpage')
      }
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export {HomeScreen, ProfileScreen}