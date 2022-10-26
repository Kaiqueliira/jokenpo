import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import buttonOn from "../../../assets/images/botao.png";
import { GameContext } from "../context/GameContext";

export default function Menu() {
  const image = {
    spock: require("../../../assets/images/spock.png"),
    tesoura: require("../../../assets/images/tesoura.png"),
  };

  const { clearScore, handleRulesImg } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleRulesImg()}>
        <Text style={styles.title}>GAME</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearScore}>
        <Image style={styles.image} source={buttonOn} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
