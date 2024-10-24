import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const QUIZMAINSCREEN1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizMainScreen}>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.pm, styles.pmFlexBox]}>5:00 PM</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1411.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1421.png")}
        />
      </View>
      <Text style={[styles.quiz, styles.quizFlexBox]}>Quiz</Text>
      <View style={styles.quizMainScreenChild} />
      <View
        style={[styles.quizMainScreenItem, styles.quizMainScreenItemPosition]}
      />
      <View style={[styles.quizMainScreenInner, styles.frameChildShadowBox]} />
      <View style={[styles.rectangleParent, styles.frameChildLayout2]}>
        <View style={[styles.frameChild, styles.frameChildLayout2]} />
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
        <Text style={[styles.featured, styles.rank1Typo]}>FEATURED</Text>
        <Text style={styles.amazingQuizzesLined}>
          Amazing Quizzes lined up for you all in Upcoming Months
        </Text>
        <Text style={[styles.stayTuned, styles.rank1Typo]}>Stay Tuned..!</Text>
        <View style={styles.rectangleView} />
        <Text style={[styles.turnOnNotifications, styles.rank1Typo]}>
          Turn on Notifications
        </Text>
      </View>
      <Text style={[styles.text, styles.textPosition]}>20</Text>
      <Text style={[styles.worldRanking, styles.pointEarnedTypo]}>
        World Ranking
      </Text>
      <Image
        style={[styles.rewardIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/reward.png")}
      />
      <Text style={[styles.text1, styles.text1Position]}>12000</Text>
      <Text style={[styles.pointEarned, styles.text1Position]}>
        Point earned
      </Text>
      <Image
        style={[styles.favouritesIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/favourites.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild2, styles.rectangleLayout]} />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-178.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-178.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1791.png")}
        />
        <Image
          style={[styles.frameChild7, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
        <Text style={[styles.lastQuiz, styles.rank1Typo]}>LAST QUIZ</Text>
        <Text style={[styles.uiuxDesign, styles.uiuxDesignTypo]}>
          UI/UX Design
        </Text>
        <Text style={[styles.points150, styles.rank1Typo]}>Points: 150</Text>
        <Image
          style={[styles.goldMedalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/goldmedal.png")}
        />
        <Text style={[styles.rank1, styles.rank1Typo]}>Rank: 1</Text>
        <Image
          style={[styles.frameChild8, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-178.png")}
        />
        <Image
          style={[styles.frameChild9, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
        <Image
          style={[styles.frameChild10, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("UPCOMINGQUIZLISTSCREEN")}
      >
        <View style={[styles.frameChild2, styles.rectangleLayout]} />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-178.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-178.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1791.png")}
        />
        <Image
          style={[styles.frameChild7, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
        <Text style={[styles.viewAllQuizzes, styles.uiuxDesignTypo]}>
          View All Quizzes
        </Text>
        <Image
          style={[styles.frameChild8, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-178.png")}
        />
        <Image
          style={[styles.frameChild9, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
        <Image
          style={[styles.frameChild10, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-176.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.backButton, styles.buttonLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <Image
        style={[styles.dropDownMenuButton, styles.buttonLayout]}
        contentFit="cover"
        source={require("../assets/drop-down-menu-button.png")}
      />
      <Image
        style={[styles.bottomNavigationBar, styles.quizMainScreenItemPosition]}
        contentFit="cover"
        source={require("../assets/bottom-navigation-bar1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 18,
    top: 0,
    height: 18,
    position: "absolute",
  },
  pmFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  quizFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  quizMainScreenItemPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameChildShadowBox: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(4, 49, 66, 0.3)",
  },
  frameChildLayout2: {
    height: 190,
    width: 343,
    position: "absolute",
  },
  rank1Typo: {
    letterSpacing: 0.2,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textPosition: {
    width: 99,
    left: 69,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  pointEarnedTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 200,
    fontSize: FontSize.size_xs,
  },
  iconLayout: {
    height: 25,
    width: 25,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  text1Position: {
    left: 242,
    width: 99,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleLayout: {
    height: 111,
    borderRadius: Border.br_3xs,
    width: 343,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 93,
    width: 96,
    position: "absolute",
  },
  frameChildLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  uiuxDesignTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0.3,
    color: Color.colorWhite,
    position: "absolute",
  },
  buttonLayout: {
    width: 30,
    top: 55,
    height: 30,
    position: "absolute",
  },
  groupIcon: {
    left: 325,
  },
  pm: {
    width: 48,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 279,
  },
  groupItem: {
    left: 302,
  },
  groupParent: {
    top: 7,
    height: 18,
    width: 343,
    left: 16,
    position: "absolute",
  },
  quiz: {
    left: 56,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.3,
    textAlign: "left",
    top: 56,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  quizMainScreenChild: {
    top: 115,
    backgroundColor: Color.colorGray_200,
    height: 698,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 343,
    left: 16,
    position: "absolute",
  },
  quizMainScreenItem: {
    backgroundColor: Color.colorWhite,
    height: 683,
    top: 130,
    width: 375,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
  },
  quizMainScreenInner: {
    top: 160,
    height: 75,
    width: 343,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(4, 49, 66, 0.3)",
    left: 16,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(4, 49, 66, 0.3)",
    left: 0,
    top: 0,
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
    color: Color.colorGold_100,
    left: 141,
    letterSpacing: 0.2,
    textAlign: "center",
    top: 30,
  },
  amazingQuizzesLined: {
    top: 50,
    justifyContent: "center",
    width: 311,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    letterSpacing: 0.3,
    textAlign: "center",
    color: Color.colorWhite,
    left: 16,
    position: "absolute",
  },
  stayTuned: {
    top: 102,
    left: 131,
    textAlign: "left",
    color: Color.colorWhite,
  },
  rectangleView: {
    left: 92,
    borderRadius: Border.br_5xs_5,
    width: 160,
    height: 30,
    top: 130,
    position: "absolute",
    backgroundColor: Color.colorGold_100,
  },
  turnOnNotifications: {
    top: 137,
    left: 107,
    textAlign: "center",
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 376,
    left: 16,
    overflow: "hidden",
  },
  text: {
    top: 178,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  worldRanking: {
    width: 99,
    left: 69,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rewardIcon: {
    left: 34,
    top: 185,
    width: 25,
    borderRadius: Border.br_8xs,
  },
  text1: {
    top: 178,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  pointEarned: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 200,
    fontSize: FontSize.size_xs,
  },
  favouritesIcon: {
    left: 207,
    top: 185,
    width: 25,
    borderRadius: Border.br_8xs,
  },
  lineIcon: {
    left: 188,
    maxWidth: "100%",
    height: 40,
    top: 178,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild2: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorGold_100,
  },
  frameChild3: {
    top: 46,
    left: -44,
  },
  frameChild4: {
    left: 319,
    top: 56,
    height: 93,
    width: 96,
  },
  frameChild5: {
    top: 64,
    left: -27,
  },
  frameChild6: {
    left: 296,
    top: 0,
    height: 71,
    width: 71,
  },
  frameChild7: {
    top: -21,
    left: 299,
  },
  lastQuiz: {
    top: 10,
    color: Color.colorDarkslategray_200,
    left: 141,
    letterSpacing: 0.2,
    textAlign: "center",
  },
  uiuxDesign: {
    left: 124,
    fontSize: FontSize.size_sm,
    top: 30,
  },
  points150: {
    top: 51,
    left: 139,
    textAlign: "left",
    color: Color.colorWhite,
  },
  goldMedalIcon: {
    top: 76,
    left: 138,
  },
  rank1: {
    top: 79,
    left: 163,
    textAlign: "left",
    color: Color.colorWhite,
  },
  frameChild8: {
    top: -12,
    left: -69,
  },
  frameChild9: {
    top: 88,
    left: 267,
  },
  frameChild10: {
    top: -48,
    left: -5,
  },
  rectangleGroup: {
    top: 250,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 111,
    shadowOpacity: 1,
    left: 16,
    overflow: "hidden",
  },
  viewAllQuizzes: {
    top: 44,
    left: 103,
    fontSize: FontSize.size_base,
  },
  rectangleContainer: {
    top: 581,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 111,
    shadowOpacity: 1,
    left: 16,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backButton: {
    left: 16,
  },
  dropDownMenuButton: {
    left: 329,
  },
  bottomNavigationBar: {
    top: 752,
    height: 60,
  },
  quizMainScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGold_100,
  },
});

export default QUIZMAINSCREEN1;
