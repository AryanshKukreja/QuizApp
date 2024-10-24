import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LeaderBoardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leaderboardScreen}>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.pm, styles.nameTypo1]}>5:00 PM</Text>
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
      <Text style={styles.leaderboard}>Leaderboard</Text>
      <View style={styles.leaderboardScreenChild} />
      <View style={styles.leaderboardScreenItem} />
      <Text style={[styles.text, styles.textLayout]}>4</Text>
      <View style={[styles.leaderboardScreenInner, styles.leaderboardLayout]} />
      <View style={[styles.rectangleView, styles.leaderboardLayout]} />
      <View
        style={[styles.leaderboardScreenChild1, styles.leaderboardLayout]}
      />
      <Text style={[styles.today, styles.textTypo1]}>Today</Text>
      <Text style={[styles.allTime, styles.nameClr]}>All Time</Text>
      <Text style={[styles.weekly, styles.nameClr]}>Weekly</Text>
      <View
        style={[styles.leaderboardScreenChild2, styles.leaderboardChildLayout2]}
      />
      <View
        style={[styles.leaderboardScreenChild3, styles.leaderboardChildLayout2]}
      />
      <View
        style={[styles.leaderboardScreenChild4, styles.leaderboardChildLayout2]}
      />
      <Image
        style={styles.p2Icon}
        contentFit="cover"
        source={require("../assets/p2.png")}
      />
      <Text style={[styles.points, styles.pointsClr]}>Points</Text>
      <Text style={[styles.name, styles.nameClr]}>Name</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-169.png")}
      />
      <Image
        style={[styles.p7Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/p7.png")}
      />
      <Text style={[styles.points1, styles.pointsClr]}>Points</Text>
      <Text style={styles.name1}>Name</Text>
      <Image
        style={[styles.leaderboardScreenChild5, styles.leaderboardChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-171.png")}
      />
      <Image
        style={[styles.p6Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/p6.png")}
      />
      <Text style={[styles.points2, styles.pointsClr]}>Points</Text>
      <Text style={[styles.name2, styles.nameClr]}>Name</Text>
      <Image
        style={[styles.leaderboardScreenChild6, styles.leaderboardChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-170.png")}
      />
      <Text style={[styles.points3, styles.pointsLayout]}>Points</Text>
      <Image
        style={[styles.p8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p8.png")}
      />
      <Text style={[styles.name3, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.lineIcon, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text1, styles.text1Typo]}>8</Text>
      <Text style={[styles.points4, styles.text1Typo]}>Points</Text>
      <Image
        style={[styles.p5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p5.png")}
      />
      <Text style={[styles.name4, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation1, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.leaderboardScreenChild7, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text2, styles.text2Typo]}>7</Text>
      <Text style={[styles.points5, styles.text2Typo]}>Points</Text>
      <Image
        style={[styles.p11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p11.png")}
      />
      <Text style={[styles.name5, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation2, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.leaderboardScreenChild8, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text3, styles.text3Typo]}>6</Text>
      <Text style={[styles.points6, styles.text3Typo]}>Points</Text>
      <Image
        style={[styles.p10Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p10.png")}
      />
      <Text style={[styles.name6, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation3, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.leaderboardScreenChild9, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text4, styles.text4Typo]}>5</Text>
      <Text style={[styles.points7, styles.text4Typo]}>Points</Text>
      <Image
        style={[styles.p9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p9.png")}
      />
      <Text style={[styles.name7, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation4, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.leaderboardScreenChild10, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text5, styles.text5Typo]}>9</Text>
      <Text style={[styles.points8, styles.text5Typo]}>Points</Text>
      <Image
        style={[styles.p4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p4.png")}
      />
      <Text style={[styles.name8, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation5, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.leaderboardScreenChild11, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text6, styles.text6Typo]}>10</Text>
      <Text style={[styles.points9, styles.text6Typo]}>Points</Text>
      <Image
        style={[styles.p3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/p3.png")}
      />
      <Text style={[styles.name9, styles.nameTypo]}>Name</Text>
      <Text style={[styles.designation6, styles.nameTypo]}>Designation</Text>
      <Image
        style={[styles.leaderboardScreenChild12, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.text7, styles.textTypo]}>1</Text>
      <Text style={[styles.text8, styles.textTypo]}>2</Text>
      <Text style={[styles.text9, styles.textTypo]}>3</Text>
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
  nameTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textLayout: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  leaderboardLayout: {
    height: 40,
    width: 103,
    borderRadius: Border.br_5xs_5,
    top: 160,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
  },
  nameClr: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  leaderboardChildLayout2: {
    width: 114,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: "absolute",
  },
  pointsClr: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  iconLayout1: {
    height: 75,
    width: 75,
    position: "absolute",
  },
  leaderboardChildLayout1: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  pointsLayout: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  iconLayout: {
    height: 50,
    width: 50,
    left: 51,
    position: "absolute",
  },
  nameTypo: {
    width: 173,
    letterSpacing: 0.4,
    left: 111,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  leaderboardChildLayout: {
    maxHeight: "100%",
    width: 375,
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    top: 950,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2Typo: {
    top: 870,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3Typo: {
    top: 790,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text4Typo: {
    top: 710,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text5Typo: {
    top: 1030,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text6Typo: {
    top: 1110,
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  buttonLayout: {
    height: 30,
    width: 30,
    top: 55,
    position: "absolute",
  },
  groupIcon: {
    left: 325,
  },
  pm: {
    width: 48,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
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
  leaderboard: {
    top: 56,
    left: 56,
    textAlign: "left",
    letterSpacing: 0.3,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  leaderboardScreenChild: {
    top: 115,
    backgroundColor: Color.colorGray_200,
    height: 1085,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 343,
    left: 16,
    position: "absolute",
  },
  leaderboardScreenItem: {
    top: 130,
    height: 1070,
    width: 375,
    backgroundColor: Color.colorWhite,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    left: 0,
    position: "absolute",
  },
  text: {
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    top: 630,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  leaderboardScreenInner: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    backgroundColor: Color.colorDarkslategray_200,
    left: 16,
  },
  rectangleView: {
    left: 256,
    backgroundColor: Color.colorWhite,
    width: 103,
    borderRadius: Border.br_5xs_5,
    top: 160,
  },
  leaderboardScreenChild1: {
    left: 136,
    backgroundColor: Color.colorWhite,
    width: 103,
    borderRadius: Border.br_5xs_5,
    top: 160,
  },
  today: {
    left: 44,
    letterSpacing: 0.2,
    top: 170,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    color: Color.colorWhite,
  },
  allTime: {
    left: 278,
    letterSpacing: 0.2,
    top: 170,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  weekly: {
    left: 161,
    letterSpacing: 0.2,
    top: 170,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  leaderboardScreenChild2: {
    top: 397,
    left: 130,
    backgroundColor: "rgba(245, 190, 0, 0.75)",
    height: 190,
  },
  leaderboardScreenChild3: {
    top: 447,
    backgroundColor: "rgba(245, 190, 0, 0.5)",
    height: 140,
    left: 16,
  },
  leaderboardScreenChild4: {
    top: 497,
    left: 245,
    backgroundColor: "rgba(245, 190, 0, 0.25)",
    height: 90,
  },
  p2Icon: {
    top: 248,
    left: 138,
    width: 100,
    height: 100,
    position: "absolute",
  },
  points: {
    top: 374,
    left: 169,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkgray_200,
    letterSpacing: 0.2,
    textAlign: "center",
    position: "absolute",
  },
  name: {
    top: 352,
    left: 166,
    letterSpacing: 0.2,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ellipseIcon: {
    top: 230,
    left: 170,
    width: 35,
    height: 35,
    position: "absolute",
  },
  p7Icon: {
    top: 323,
    left: 35,
  },
  points1: {
    top: 424,
    left: 54,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkgray_200,
    letterSpacing: 0.2,
    textAlign: "center",
    position: "absolute",
  },
  name1: {
    top: 402,
    left: 51,
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.2,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  leaderboardScreenChild5: {
    top: 310,
    left: 60,
  },
  p6Icon: {
    top: 373,
    left: 264,
  },
  points2: {
    top: 474,
    left: 283,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkgray_200,
    letterSpacing: 0.2,
    textAlign: "center",
    position: "absolute",
  },
  name2: {
    top: 452,
    left: 280,
    letterSpacing: 0.2,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  leaderboardScreenChild6: {
    top: 360,
    left: 289,
  },
  points3: {
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    top: 630,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  p8Icon: {
    top: 617,
  },
  name3: {
    top: 622,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation: {
    top: 643,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  lineIcon: {
    top: 682,
  },
  text1: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  points4: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  p5Icon: {
    top: 937,
  },
  name4: {
    top: 942,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation1: {
    top: 963,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  leaderboardScreenChild7: {
    top: 1002,
  },
  text2: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  points5: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  p11Icon: {
    top: 857,
  },
  name5: {
    top: 862,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation2: {
    top: 883,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  leaderboardScreenChild8: {
    top: 922,
  },
  text3: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  points6: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  p10Icon: {
    top: 777,
  },
  name6: {
    top: 782,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation3: {
    top: 803,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  leaderboardScreenChild9: {
    top: 842,
  },
  text4: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  points7: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  p9Icon: {
    top: 697,
  },
  name7: {
    top: 702,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation4: {
    top: 723,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  leaderboardScreenChild10: {
    top: 762,
  },
  text5: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  points8: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  p4Icon: {
    top: 1017,
  },
  name8: {
    top: 1022,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation5: {
    top: 1043,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  leaderboardScreenChild11: {
    top: 1082,
  },
  text6: {
    width: 20,
    color: Color.colorGold_100,
    textAlign: "center",
    left: 16,
  },
  points9: {
    width: 60,
    textAlign: "right",
    left: 299,
    color: Color.colorDarkslategray_200,
  },
  p3Icon: {
    top: 1097,
  },
  name9: {
    top: 1102,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
  },
  designation6: {
    top: 1123,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_xs,
  },
  leaderboardScreenChild12: {
    top: 1162,
  },
  text7: {
    top: 234,
    left: 185,
    letterSpacing: 0.3,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text8: {
    top: 313,
    left: 69,
    letterSpacing: 0.2,
    fontSize: FontSize.size_sm,
  },
  text9: {
    top: 363,
    left: 297,
    letterSpacing: 0.2,
    fontSize: FontSize.size_sm,
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
  leaderboardScreen: {
    backgroundColor: Color.colorGold_100,
    flex: 1,
    height: 1200,
    overflow: "hidden",
    width: "100%",
  },
});

export default LeaderBoardScreen;
