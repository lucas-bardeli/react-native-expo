import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.containter}>
      <Text style={styles.title}>Hello From React Native Expo</Text>
      <Text>Meu App</Text>
    </View>
  );
}
