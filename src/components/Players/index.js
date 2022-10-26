import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { GameContext } from "../context/GameContext";

export default function Players() {
  const { rulesImg } = useContext(GameContext);
  console.log(rulesImg);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          rulesImg
            ? require("../../../assets/images/regras.png")
            : require("../../../assets/images/jogadores.png")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderColor: "#000",
    borderWidth: 3,
    resizeMode: "contain",
  },
});
