import { Image, StyleSheet, Text, View } from "react-native";
import nomes from "../../../assets/images/nomes.png";
import vs from "../../../assets/images/vs.png";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const actions = {
  pedra: require("../../../assets/images/pedra.png"),
  largato: require("../../../assets/images/lagarto.png"),
  papel: require("../../../assets/images/papel.png"),
  spock: require("../../../assets/images/spock.png"),
  tesoura: require("../../../assets/images/tesoura.png"),
};

export default function Display() {
  const { scorePlayer, scoreAndroid, actionPlayer, actionAndroid } =
    useContext(GameContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.nomes} source={nomes} />
        <View style={styles.actions}>
          <Image
            style={styles.actionImage}
            source={actions[actionPlayer] || actions["pedra"]}
          ></Image>
          <Image style={styles.actionImage} source={vs}></Image>
          <Image
            style={styles.actionImage}
            source={actions[actionAndroid] || actions["spock"]}
          ></Image>
        </View>
        <View style={styles.scoreDisplay}>
          <View style={styles.scoreItem}>
            <Text style={styles.score}>{scorePlayer}</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text style={styles.score}>{scoreAndroid}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    borderColor: "#000",
    borderWidth: 3,
    backgroundColor: "#fff",
  },
  nomes: {
    width: " 100%",
    resizeMode: "contain",
    height: 50,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  actionImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: "contain",
  },
  scoreDisplay: {
    flexDirection: "row",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  scoreItem: {
    backgroundColor: "#413682",
    paddingVertical: 10,
    width: 100,
    borderRadius: 50,
  },
  score: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
