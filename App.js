import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}