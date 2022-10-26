import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Characters from "./src/components/Characters";
import Display from "./src/components/Display";
import Menu from "./src/components/Menu";
import Players from "./src/components/Players";

import { GameProvider } from "./src/components/context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <ScrollView>
        <View style={styles.container}>
          <Menu />
          <View style={styles.game}>
            <Players />
            <Characters />
            <Display />
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C144D",
    marginTop: 20,
  },
  game: {
    backgroundColor: "#403682",
  },
});
