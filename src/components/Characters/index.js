import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import largato from "../../../assets/images/lagarto.png";
import papel from "../../../assets/images/papel.png";
import pedra from "../../../assets/images/pedra.png";
import spock from "../../../assets/images/spock.png";
import tesoura from "../../../assets/images/tesoura.png";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const options = ["largato", "papel", "pedra", "spock", "tesoura"];

export default function Characters() {
  const {
    handleActionPlayer,
    handleActionAndroid,
    actionAndroid,
    actionPlayer,
    handleScorePlayer,
    handleScoreAndroid,
  } = useContext(GameContext);

  function rules() {
    if (actionPlayer === actionAndroid) {
      return;
    } else if (
      actionPlayer === "pedra" &&
      (actionAndroid === "largato" || actionAndroid === "tesoura")
    ) {
      handleScorePlayer();
    } else if (
      actionPlayer === "largato" &&
      (actionAndroid === "spock" || actionAndroid === "papel")
    ) {
      handleScorePlayer();
    } else if (
      actionPlayer === "spock" &&
      (actionAndroid === "tesoura" || actionAndroid === "pedra")
    ) {
      handleScorePlayer();
    } else if (
      actionPlayer === "tesoura" &&
      (actionAndroid === "largato" || actionAndroid === "papel")
    ) {
      handleScorePlayer();
    } else if (
      actionPlayer === "papel" &&
      (actionAndroid === "pedra" || actionAndroid === "spock")
    ) {
      handleScorePlayer();
    } else {
      handleScoreAndroid();
    }
  }
  function randomAndroiCharacter() {
    let random = options[Math.floor(options.length * Math.random())];
    handleActionAndroid(random);
  }

  function init(action) {
    handleActionPlayer(action);
    randomAndroiCharacter();
    rules();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          init("pedra");
        }}
      >
        <Image style={styles.character} source={pedra}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          init("spock");
        }}
      >
        <Image style={styles.character} source={spock}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          init("tesoura");
        }}
      >
        <Image style={styles.character} source={tesoura}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          init("largato");
        }}
      >
        <Image style={styles.character} source={largato}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          init("papel");
        }}
      >
        <Image style={styles.character} source={papel}></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
  character: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
