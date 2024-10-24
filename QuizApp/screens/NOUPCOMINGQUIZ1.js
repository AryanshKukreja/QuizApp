import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const NoUpComingQuiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.noUpcomingQuiz}>
      <Image
        style={styles.noUpcomingQuizChild}
        contentFit="cover"
        source={require("../assets/ellipse-160.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={styles.pm}>5:00 PM</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-141.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-142.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={styles.pm1}>5:00 PM</Text>
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
      <Text style={styles.chats}>Chats</Text>
      <Pressable
        style={[styles.backButton, styles.buttonLayout1]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <Image
        style={[styles.dropDownMenuButton, styles.buttonLayout1]}
        contentFit="cover"
        source={require("../assets/drop-down-menu-button.png")}
      />
      <View style={[styles.searchButton, styles.buttonLayout]}>
        <View style={[styles.searchButtonChild, styles.childPosition]} />
        <Text style={[styles.search, styles.searchTypo]}>Search</Text>
        <Image
          style={[styles.searchButtonItem, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/group-1821.png")}
        />
        <Image
          style={[styles.searchButtonInner, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/group-1823.png")}
        />
        <Image
          style={[styles.searchButtonChild1, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/group-1824.png")}
        />
      </View>
      <View style={styles.toggleButton5}>
        <Text style={styles.upcoming}>UPCOMING</Text>
        <Text style={[styles.completed, styles.activeTypo]}>COMPLETED</Text>
        <Text style={[styles.active, styles.activeTypo]}>ACTIVE</Text>
        <Image
          style={[styles.toggleButton5Child, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/line-15.png")}
        />
        <Image
          style={[styles.toggleButton5Item, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
      </View>
      <Image
        style={styles.noUpcomingQuizItem}
        contentFit="cover"
        source={require("../assets/group-2011.png")}
      />
      <Text style={[styles.youreAllSet, styles.searchTypo]}>
        You're all set for now! No quizzes are scheduled. Keep exploring and
        stay sharp!
      </Text>
      <Text style={styles.noUpcomingQuizzes}>No Upcoming Quizzes</Text>
      <View style={[styles.primaryButton1, styles.buttonLayout]}>
        <View style={[styles.primaryButton1Child, styles.childPosition]} />
        <Text style={styles.text}>Explore Content</Text>
      </View>
      <Image
        style={styles.bottomNavigationBar}
        contentFit="cover"
        source={require("../assets/bottom-navigation-bar.png")}
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
  buttonLayout1: {
    height: 30,
    width: 30,
    top: 55,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 343,
    left: 16,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  searchTypo: {
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  searchItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  activeTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    top: "0%",
    textAlign: "center",
    position: "absolute",
  },
  noUpcomingQuizChild: {
    top: -165,
    left: -100,
    width: 575,
    height: 330,
    position: "absolute",
  },
  groupIcon: {
    left: 325,
  },
  pm: {
    color: Color.colorDarkslategray_100,
    width: 48,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "center",
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
  pm1: {
    color: Color.colorWhite,
    width: 48,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chats: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  backButton: {
    left: 16,
    height: 30,
    width: 30,
    top: 55,
  },
  dropDownMenuButton: {
    left: 329,
  },
  searchButtonChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    bottom: "0%",
    top: "0%",
  },
  search: {
    left: "11.95%",
    letterSpacing: 0.4,
    top: "30%",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  searchButtonItem: {
    right: "89.5%",
    left: "4.37%",
    bottom: "28%",
    width: "6.12%",
    height: "42%",
    maxWidth: "100%",
    top: "30%",
  },
  searchButtonInner: {
    right: "4.37%",
    left: "89.5%",
    bottom: "28%",
    width: "6.12%",
    height: "42%",
    maxWidth: "100%",
    top: "30%",
  },
  searchButtonChild1: {
    right: "11.95%",
    left: "81.92%",
    bottom: "28%",
    width: "6.12%",
    height: "42%",
    maxWidth: "100%",
    top: "30%",
  },
  searchButton: {
    top: 115,
  },
  upcoming: {
    left: "4.96%",
    color: Color.colorGold_100,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    top: "0%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  completed: {
    left: "71.14%",
  },
  active: {
    left: "42.57%",
  },
  toggleButton5Child: {
    height: "18.32%",
    width: "33.24%",
    top: "87.91%",
    right: "66.76%",
    bottom: "-6.23%",
    maxWidth: "100%",
    left: "0%",
  },
  toggleButton5Item: {
    height: "40.29%",
    top: "99.63%",
    bottom: "-39.93%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  toggleButton5: {
    top: 195,
    height: 27,
    width: 343,
    left: 16,
    position: "absolute",
  },
  noUpcomingQuizItem: {
    top: 252,
    left: 47,
    width: 282,
    height: 275,
    position: "absolute",
  },
  youreAllSet: {
    top: 592,
    letterSpacing: 0.2,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    width: 343,
    left: 16,
  },
  noUpcomingQuizzes: {
    top: 557,
    left: 75,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  primaryButton1Child: {
    shadowColor: "rgba(4, 49, 66, 0.3)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorDarkslategray_200,
  },
  text: {
    top: "23%",
    left: "27.7%",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  primaryButton1: {
    top: 654,
  },
  bottomNavigationBar: {
    top: 752,
    width: 375,
    height: 60,
    left: 0,
    position: "absolute",
  },
  noUpcomingQuiz: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default NoUpComingQuiz;
