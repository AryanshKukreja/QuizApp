import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout1]}>
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
      <Text style={[styles.lastQuiz, styles.rank1Typo]}>LAST QUIZ</Text>
      <Text style={[styles.uiuxDesign, styles.rank1FlexBox]}>UI/UX Design</Text>
      <Text style={[styles.points150, styles.rank1FlexBox]}>Points: 150</Text>
      <Image
        style={styles.goldMedalIcon}
        contentFit="cover"
        source={require("../assets/goldmedal.png")}
      />
      <Text style={[styles.rank1, styles.rank1FlexBox]}>Rank: 1</Text>
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
    </View>
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
  rank1Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rank1FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
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
  lastQuiz: {
    top: 10,
    left: 141,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    position: "absolute",
  },
  uiuxDesign: {
    top: 30,
    left: 124,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.3,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  points150: {
    top: 51,
    left: 139,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  goldMedalIcon: {
    top: 76,
    left: 138,
    borderRadius: Border.br_8xs,
    width: 25,
    height: 25,
    position: "absolute",
  },
  rank1: {
    top: 79,
    left: 163,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
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
    top: 250,
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

export default FrameComponent;
