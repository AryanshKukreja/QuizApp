import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Image
        style={styles.frameItem}
        contentFit="cover"
        source={require("../assets/ellipse-180.png")}
      />
      <Image
        style={styles.frameInner}
        contentFit="cover"
        source={require("../assets/ellipse-179.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.frameChild1}
        contentFit="cover"
        source={require("../assets/ellipse-182.png")}
      />
      <Text style={[styles.featured, styles.featuredTypo]}>FEATURED</Text>
      <Text style={[styles.amazingQuizzesLined, styles.stayTunedClr]}>
        Amazing Quizzes lined up for you all in Upcoming Months
      </Text>
      <Text style={[styles.stayTuned, styles.stayTunedClr]}>Stay Tuned..!</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.turnOnNotifications, styles.stayTunedClr]}>
        Turn on Notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 190,
    width: 343,
    position: "absolute",
  },
  featuredTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  stayTunedClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    shadowColor: "rgba(4, 49, 66, 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
  },
  frameItem: {
    top: 171,
    left: 1,
    width: 207,
    height: 127,
    position: "absolute",
  },
  frameInner: {
    top: -113,
    left: 203,
    width: 206,
    height: 155,
    position: "absolute",
  },
  ellipseIcon: {
    top: 166,
    left: -102,
    width: 213,
    height: 132,
    position: "absolute",
  },
  frameChild1: {
    top: -132,
    left: 116,
    width: 190,
    height: 160,
    position: "absolute",
  },
  featured: {
    top: 30,
    left: 141,
    color: Color.colorGold_100,
    textAlign: "center",
    position: "absolute",
  },
  amazingQuizzesLined: {
    top: 50,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.3,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 311,
    textAlign: "center",
    left: 16,
  },
  stayTuned: {
    top: 102,
    left: 131,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rectangleView: {
    top: 130,
    left: 92,
    borderRadius: Border.br_5xs_5,
    backgroundColor: Color.colorGold_100,
    width: 160,
    height: 30,
    position: "absolute",
  },
  turnOnNotifications: {
    top: 137,
    left: 107,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rectangleParent: {
    top: 376,
    overflow: "hidden",
    left: 16,
  },
});

export default FrameComponent1;
