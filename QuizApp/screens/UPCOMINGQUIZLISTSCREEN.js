import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UPCOMINGQUIZLISTSCREEN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upcomingQuizListScreen}>
      <Image
        style={styles.upcomingQuizListScreenChild}
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
      <Text style={styles.upcomingQuizzes}>Upcoming Quizzes</Text>
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
      <View style={[styles.searchButton, styles.buttonPosition]}>
        <View style={styles.searchButtonChild} />
        <Text style={styles.search}>Search</Text>
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
      <View style={[styles.toggleButton5, styles.buttonPosition]}>
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
      <View style={[styles.upcomingQuizCard, styles.upcomingCardLayout]}>
        <View style={styles.upcomingCardShadowBox} />
        <Text style={[styles.quizName, styles.textTypo]}>Quiz Name</Text>
        <Text style={styles.surpriseRewardFor}>
          Surprise Reward for Top 3 Winners
        </Text>
        <Text style={[styles.text, styles.textTypo]}>10/09/2024</Text>
        <Text style={[styles.category, styles.amTypo]}>Category</Text>
        <Text style={[styles.am, styles.amTypo]}>10:00 am</Text>
        <Image
          style={styles.devicesIcon}
          contentFit="cover"
          source={require("../assets/devices.png")}
        />
        <Image
          style={[styles.giftIcon, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/gift.png")}
        />
      </View>
      <View style={[styles.upcomingQuizCard1, styles.upcomingCardLayout]}>
        <View style={styles.upcomingCardShadowBox} />
        <Text style={[styles.quizName, styles.textTypo]}>Quiz Name</Text>
        <Text style={styles.surpriseRewardFor}>
          Surprise Reward for Top 3 Winners
        </Text>
        <Text style={[styles.text, styles.textTypo]}>10/09/2024</Text>
        <Text style={[styles.category, styles.amTypo]}>Category</Text>
        <Text style={[styles.am, styles.amTypo]}>10:00 am</Text>
        <Image
          style={styles.devicesIcon}
          contentFit="cover"
          source={require("../assets/devices.png")}
        />
        <Image
          style={[styles.giftIcon, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/gift.png")}
        />
      </View>
      <View style={[styles.upcomingQuizCard2, styles.upcomingCardLayout]}>
        <View style={styles.upcomingCardShadowBox} />
        <Text style={[styles.quizName, styles.textTypo]}>Quiz Name</Text>
        <Text style={styles.surpriseRewardFor}>
          Surprise Reward for Top 3 Winners
        </Text>
        <Text style={[styles.text, styles.textTypo]}>10/09/2024</Text>
        <Text style={[styles.category, styles.amTypo]}>Category</Text>
        <Text style={[styles.am, styles.amTypo]}>10:00 am</Text>
        <Image
          style={styles.devicesIcon}
          contentFit="cover"
          source={require("../assets/devices.png")}
        />
        <Image
          style={[styles.giftIcon, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/gift.png")}
        />
      </View>
      <View style={[styles.upcomingQuizCard3, styles.upcomingCardLayout]}>
        <View style={styles.upcomingCardShadowBox} />
        <Text style={[styles.quizName, styles.textTypo]}>Quiz Name</Text>
        <Text style={styles.surpriseRewardFor}>
          Surprise Reward for Top 3 Winners
        </Text>
        <Text style={[styles.text, styles.textTypo]}>10/09/2024</Text>
        <Text style={[styles.category, styles.amTypo]}>Category</Text>
        <Text style={[styles.am, styles.amTypo]}>10:00 am</Text>
        <Image
          style={styles.devicesIcon}
          contentFit="cover"
          source={require("../assets/devices.png")}
        />
        <Image
          style={[styles.giftIcon, styles.searchItemLayout]}
          contentFit="cover"
          source={require("../assets/gift.png")}
        />
      </View>
      <Image
        style={styles.bottomNavigationBar}
        contentFit="cover"
        source={require("../assets/bottom-navigation-bar2.png")}
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
  buttonLayout: {
    height: 30,
    width: 30,
    top: 55,
    position: "absolute",
  },
  buttonPosition: {
    width: 343,
    left: 16,
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
  upcomingCardLayout: {
    height: 120,
    width: 343,
    left: 16,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.2,
    top: "12.5%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  amTypo: {
    top: "30.83%",
    color: Color.colorGray_100,
    letterSpacing: 0.2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  upcomingQuizListScreenChild: {
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
  upcomingQuizzes: {
    top: 56,
    left: 56,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.3,
    textAlign: "left",
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  search: {
    left: "11.95%",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "30%",
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  searchButtonItem: {
    right: "89.5%",
    left: "4.37%",
    maxWidth: "100%",
    bottom: "28%",
    width: "6.12%",
    height: "42%",
    top: "30%",
  },
  searchButtonInner: {
    right: "4.37%",
    left: "89.5%",
    bottom: "28%",
    width: "6.12%",
    height: "42%",
    top: "30%",
  },
  searchButtonChild1: {
    right: "11.95%",
    left: "81.92%",
    bottom: "28%",
    width: "6.12%",
    height: "42%",
    top: "30%",
  },
  searchButton: {
    top: 115,
    height: 50,
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
    left: "0%",
    maxWidth: "100%",
  },
  toggleButton5Item: {
    height: "40.29%",
    top: "99.63%",
    bottom: "-39.93%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  toggleButton5: {
    top: 195,
    height: 27,
  },
  upcomingCardShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  quizName: {
    left: "20.41%",
    textAlign: "left",
  },
  surpriseRewardFor: {
    top: "67.5%",
    left: "13.12%",
    color: Color.colorGray_100,
    letterSpacing: 0.2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text: {
    left: "71.72%",
    textAlign: "right",
  },
  category: {
    left: "20.41%",
    textAlign: "left",
  },
  am: {
    left: "79.3%",
    textAlign: "center",
    top: "30.83%",
  },
  devicesIcon: {
    height: "37.5%",
    width: "13.12%",
    right: "82.51%",
    bottom: "50%",
    borderRadius: Border.br_8xs,
    top: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "4.37%",
    position: "absolute",
    overflow: "hidden",
  },
  giftIcon: {
    height: "16.67%",
    width: "5.83%",
    top: "66.67%",
    right: "89.8%",
    bottom: "16.67%",
    borderRadius: Border.br_10xs_5,
    left: "4.37%",
    maxWidth: "100%",
  },
  upcomingQuizCard: {
    top: 252,
  },
  upcomingQuizCard1: {
    top: 387,
  },
  upcomingQuizCard2: {
    top: 522,
  },
  upcomingQuizCard3: {
    top: 657,
  },
  bottomNavigationBar: {
    top: 807,
    width: 375,
    height: 60,
    left: 0,
    position: "absolute",
  },
  upcomingQuizListScreen: {
    flex: 1,
    height: 867,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default UPCOMINGQUIZLISTSCREEN;
