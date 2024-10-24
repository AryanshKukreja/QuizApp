import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectangleParent, styles.frameChildLayout1]}
      onPress={() => navigation.navigate("UPCOMINGQUIZLISTSCREEN")}
    >
      <View style={[styles.frameChild, styles.frameChildLayout1]} />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-178.png")}
      />
      <Image
        style={[styles.frameInner, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-178.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-176.png")}
      />
      <Image
        style={[styles.frameChild1, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1791.png")}
      />
      <Image
        style={[styles.frameChild2, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-176.png")}
      />
      <Text style={styles.viewAllQuizzes}>View All Quizzes</Text>
      <Image
        style={[styles.frameChild3, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-178.png")}
      />
      <Image
        style={[styles.frameChild4, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-176.png")}
      />
      <Image
        style={[styles.frameChild5, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-176.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChildLayout1: {
    height: 111,
    width: 343,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameLayout: {
    height: 93,
    width: 96,
    position: "absolute",
  },
  frameChildLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    backgroundColor: Color.colorGold_100,
    top: 0,
  },
  frameItem: {
    top: 46,
    left: -44,
  },
  frameInner: {
    top: 56,
    left: 319,
  },
  ellipseIcon: {
    top: 64,
    left: -27,
  },
  frameChild1: {
    left: 296,
    top: 0,
  },
  frameChild2: {
    top: -21,
    left: 299,
  },
  viewAllQuizzes: {
    top: 44,
    left: 103,
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  frameChild3: {
    top: -12,
    left: -69,
  },
  frameChild4: {
    top: 88,
    left: 267,
  },
  frameChild5: {
    top: -48,
    left: -5,
  },
  rectangleParent: {
    top: 581,
    left: 16,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default FrameComponent2;
