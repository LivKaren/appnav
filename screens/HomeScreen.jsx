import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { Image } from "expo-image";
import { Text } from "react-native-paper";
import styles from "../config/styles";

export default function HomeScreen({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <Text variant="titleLarge">Inicial</Text>
      <Text variant="bodyMedium">Bem vindo</Text>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => navigation.navigate("SobreScreen")}
        title="Ir para sobre"
      />
    </View>
  );
}
