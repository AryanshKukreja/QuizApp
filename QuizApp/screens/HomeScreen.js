import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.pm, styles.pmTypo]}>5:00 PM</Text>
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
      <Image
        style={[styles.homeScreenChild, styles.homeChildLayout6]}
        contentFit="cover"
        source={require("../assets/group-1969.png")}
      />
      <Image
        style={[styles.homeScreenItem, styles.homeChildLayout6]}
        contentFit="cover"
        source={require("../assets/group-1993.png")}
      />
      <Image
        style={[styles.homeScreenInner, styles.homeChildLayout6]}
        contentFit="cover"
        source={require("../assets/group-1994.png")}
      />
      <Image
        style={[styles.homeScreenChild1, styles.homeChildLayout6]}
        contentFit="cover"
        source={require("../assets/group-1995.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.homeScreenChild2, styles.homeScreenChild2Position]}
      />
      <Text style={[styles.announcements, styles.loremContainerPosition]}>
        Announcements
      </Text>
      <Text style={[styles.post, styles.loremContainerPosition]}>Post</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame-3.png")}
      />
      <View style={[styles.untitled, styles.untitledLayout]} />
      <Text
        style={[styles.loremIpsumDolorContainer, styles.loremContainerPosition]}
      >
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          <Text
            style={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et `}</Text>
          <Text style={styles.text}> ...</Text>
        </Text>
        <Text style={styles.more}>more</Text>
      </Text>
      <View style={[styles.homeScreenChild3, styles.homeChildLayout4]} />
      <Text style={[styles.design, styles.designTypo]}>Design</Text>
      <View style={[styles.homeScreenChild4, styles.homeChildLayout3]} />
      <Text style={[styles.persona, styles.designTypo]}>Persona</Text>
      <View style={[styles.homeScreenChild5, styles.homeChildLayout2]} />
      <Text style={[styles.userFlow, styles.designTypo]}>User Flow</Text>
      <Image
        style={[styles.ellipseIcon, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-98.png")}
      />
      <Image
        style={[styles.homeScreenChild6, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1793.png")}
      />
      <Image
        style={[styles.homeScreenChild7, styles.buttonIconPosition2]}
        contentFit="cover"
        source={require("../assets/group-1991.png")}
      />
      <Image
        style={[styles.homeScreenChild8, styles.buttonIconPosition2]}
        contentFit="cover"
        source={require("../assets/group-19941.png")}
      />
      <Image
        style={[styles.likeButtonIcon, styles.buttonIconPosition2]}
        contentFit="cover"
        source={require("../assets/like-button.png")}
      />
      <Image
        style={[styles.saveButtonIcon, styles.buttonIconPosition2]}
        contentFit="cover"
        source={require("../assets/save-button.png")}
      />
      <Image
        style={[styles.homeScreenChild9, styles.homeScreenChild9Position]}
        contentFit="cover"
        source={require("../assets/ellipse-204.png")}
      />
      <Text style={[styles.alexjames, styles.alexjamesTypo]}>alexjames</Text>
      <Image
        style={[styles.dropDownMenuButton, styles.homeScreenChild9Position]}
        contentFit="cover"
        source={require("../assets/drop-down-menu-button1.png")}
      />
      <View style={[styles.untitled1, styles.untitledLayout]} />
      <Text
        style={[
          styles.loremIpsumDolorContainer1,
          styles.loremContainerPosition,
        ]}
      >
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          <Text
            style={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et `}</Text>
          <Text style={styles.text}> ...</Text>
        </Text>
        <Text style={styles.more}>more</Text>
      </Text>
      <View style={[styles.homeScreenChild10, styles.homeChildPosition1]} />
      <Text style={[styles.design1, styles.design1Typo]}>Design</Text>
      <View style={[styles.homeScreenChild11, styles.homeChildPosition1]} />
      <Text style={[styles.persona1, styles.design1Typo]}>Persona</Text>
      <View style={[styles.homeScreenChild12, styles.homeChildPosition1]} />
      <Text style={[styles.userFlow1, styles.design1Typo]}>User Flow</Text>
      <Image
        style={[styles.homeScreenChild13, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-98.png")}
      />
      <Image
        style={[styles.homeScreenChild14, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1793.png")}
      />
      <Image
        style={[styles.homeScreenChild15, styles.buttonIconPosition1]}
        contentFit="cover"
        source={require("../assets/group-1991.png")}
      />
      <Image
        style={[styles.homeScreenChild16, styles.buttonIconPosition1]}
        contentFit="cover"
        source={require("../assets/group-19941.png")}
      />
      <Image
        style={[styles.likeButtonIcon1, styles.buttonIconPosition1]}
        contentFit="cover"
        source={require("../assets/like-button.png")}
      />
      <Image
        style={[styles.saveButtonIcon1, styles.buttonIconPosition1]}
        contentFit="cover"
        source={require("../assets/save-button.png")}
      />
      <Image
        style={[styles.homeScreenChild17, styles.homeScreenChild17Position]}
        contentFit="cover"
        source={require("../assets/ellipse-204.png")}
      />
      <Text style={[styles.alexjames1, styles.alexjamesTypo]}>alexjames</Text>
      <Image
        style={[styles.dropDownMenuButton1, styles.homeScreenChild17Position]}
        contentFit="cover"
        source={require("../assets/drop-down-menu-button1.png")}
      />
      <View style={[styles.untitled2, styles.untitledLayout]} />
      <Text
        style={[
          styles.loremIpsumDolorContainer2,
          styles.loremContainerPosition,
        ]}
      >
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          <Text
            style={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et `}</Text>
          <Text style={styles.text}> ...</Text>
        </Text>
        <Text style={styles.more}>more</Text>
      </Text>
      <View style={[styles.homeScreenChild18, styles.homeChildPosition]} />
      <Text style={[styles.design2, styles.design2Typo]}>Design</Text>
      <View style={[styles.homeScreenChild19, styles.homeChildPosition]} />
      <Text style={[styles.persona2, styles.design2Typo]}>Persona</Text>
      <View style={[styles.homeScreenChild20, styles.homeChildPosition]} />
      <Text style={[styles.userFlow2, styles.design2Typo]}>User Flow</Text>
      <Image
        style={[styles.homeScreenChild21, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-98.png")}
      />
      <Image
        style={[styles.homeScreenChild22, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1793.png")}
      />
      <Image
        style={[styles.homeScreenChild23, styles.buttonIconPosition]}
        contentFit="cover"
        source={require("../assets/group-1991.png")}
      />
      <Image
        style={[styles.homeScreenChild24, styles.buttonIconPosition]}
        contentFit="cover"
        source={require("../assets/group-19941.png")}
      />
      <Image
        style={[styles.likeButtonIcon2, styles.buttonIconPosition]}
        contentFit="cover"
        source={require("../assets/like-button.png")}
      />
      <Image
        style={[styles.saveButtonIcon2, styles.buttonIconPosition]}
        contentFit="cover"
        source={require("../assets/save-button.png")}
      />
      <Image
        style={[styles.homeScreenChild25, styles.homeScreenChild25Position]}
        contentFit="cover"
        source={require("../assets/ellipse-204.png")}
      />
      <Text style={[styles.alexjames2, styles.alexjamesTypo]}>alexjames</Text>
      <Image
        style={[styles.dropDownMenuButton2, styles.homeScreenChild25Position]}
        contentFit="cover"
        source={require("../assets/drop-down-menu-button1.png")}
      />
      <View
        style={[styles.bottomNavigationBar, styles.homeScreenChild2Position]}
      >
        <View style={styles.bottomNavigationBarChild} />
        <Image
          style={[styles.bottomNavigationBarItem, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1912.png")}
        />
        <Image
          style={[styles.bottomNavigationBarInner, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1913.png")}
        />
        <Image
          style={[styles.bottomNavigationBarChild1, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1914.png")}
        />
        <Image
          style={[styles.bottomNavigationBarChild2, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1915.png")}
        />
        <Image
          style={[styles.bottomNavigationBarChild3, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-184.png")}
        />
        <Image
          style={[styles.bottomNavigationBarChild4, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-185.png")}
        />
        <Image
          style={[styles.bottomNavigationBarChild5, styles.bottomChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1902.png")}
        />
        <Text style={[styles.home, styles.pmTypo]}>Home</Text>
      </View>
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
  pmTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  homeChildLayout6: {
    height: 24,
    width: 24,
    top: 55,
    position: "absolute",
  },
  rectangleViewPosition: {
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
  },
  homeScreenChild2Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  loremContainerPosition: {
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  untitledLayout: {
    height: 175,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    width: 343,
    left: 16,
    position: "absolute",
  },
  homeChildLayout4: {
    height: 30,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_5xs_5,
    top: 607,
    position: "absolute",
  },
  designTypo: {
    letterSpacing: 0.4,
    top: 613,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  homeChildLayout3: {
    width: 72,
    left: 90,
  },
  homeChildLayout2: {
    width: 80,
    left: 172,
  },
  homeChildLayout1: {
    width: 30,
    left: 319,
    height: 30,
    position: "absolute",
  },
  homeChildLayout: {
    height: 20,
    width: 20,
    left: 324,
    position: "absolute",
  },
  buttonIconPosition2: {
    top: 527,
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeScreenChild9Position: {
    top: 297,
    width: 30,
    height: 30,
    position: "absolute",
  },
  alexjamesTypo: {
    fontSize: FontSize.size_sm,
    left: 53,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    position: "absolute",
  },
  homeChildPosition1: {
    top: 1347,
    height: 30,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_5xs_5,
    position: "absolute",
  },
  design1Typo: {
    top: 1353,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  buttonIconPosition1: {
    top: 1267,
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeScreenChild17Position: {
    top: 1037,
    width: 30,
    height: 30,
    position: "absolute",
  },
  homeChildPosition: {
    top: 977,
    height: 30,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_5xs_5,
    position: "absolute",
  },
  design2Typo: {
    top: 983,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  buttonIconPosition: {
    top: 897,
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeScreenChild25Position: {
    top: 667,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bottomChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    left: 325,
  },
  pm: {
    width: 48,
    left: 0,
    textAlign: "center",
    color: Color.colorWhite,
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
  homeScreenChild: {
    left: 16,
  },
  homeScreenItem: {
    left: 335,
  },
  homeScreenInner: {
    left: 247,
  },
  homeScreenChild1: {
    left: 291,
  },
  rectangleView: {
    top: 109,
    backgroundColor: Color.colorGray_200,
    height: 1383,
    width: 343,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    left: 16,
    position: "absolute",
  },
  homeScreenChild2: {
    top: 124,
    backgroundColor: Color.colorWhite,
    height: 1368,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
  },
  announcements: {
    top: 144,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  post: {
    top: 253,
    letterSpacing: 0.5,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frameIcon: {
    top: 183,
    width: 359,
    height: 50,
    left: 16,
    position: "absolute",
  },
  untitled: {
    top: 337,
  },
  loremIpsumDolor: {
    color: Color.colorDarkslategray_100,
  },
  text: {
    color: Color.colorGray_100,
  },
  loremIpsumDolorSitAmetCo: {
    fontFamily: FontFamily.poppinsRegular,
  },
  more: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
  },
  loremIpsumDolorContainer: {
    top: 561,
    letterSpacing: 0.2,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    width: 343,
  },
  homeScreenChild3: {
    width: 64,
    left: 16,
  },
  design: {
    left: 26,
  },
  homeScreenChild4: {
    height: 30,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_5xs_5,
    top: 607,
    position: "absolute",
  },
  persona: {
    left: 100,
  },
  homeScreenChild5: {
    height: 30,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_5xs_5,
    top: 607,
    position: "absolute",
  },
  userFlow: {
    left: 182,
  },
  ellipseIcon: {
    top: 347,
  },
  homeScreenChild6: {
    top: 352,
  },
  homeScreenChild7: {
    left: 50,
  },
  homeScreenChild8: {
    left: 84,
  },
  likeButtonIcon: {
    left: 16,
  },
  saveButtonIcon: {
    left: 335,
  },
  homeScreenChild9: {
    left: 16,
  },
  alexjames: {
    top: 302,
  },
  dropDownMenuButton: {
    left: 329,
  },
  untitled1: {
    top: 1077,
  },
  loremIpsumDolorContainer1: {
    top: 1301,
    letterSpacing: 0.2,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    width: 343,
  },
  homeScreenChild10: {
    width: 64,
    left: 16,
  },
  design1: {
    left: 26,
  },
  homeScreenChild11: {
    width: 72,
    left: 90,
  },
  persona1: {
    left: 100,
  },
  homeScreenChild12: {
    width: 80,
    left: 172,
  },
  userFlow1: {
    left: 182,
  },
  homeScreenChild13: {
    top: 1087,
  },
  homeScreenChild14: {
    top: 1092,
  },
  homeScreenChild15: {
    left: 50,
  },
  homeScreenChild16: {
    left: 84,
  },
  likeButtonIcon1: {
    left: 16,
  },
  saveButtonIcon1: {
    left: 335,
  },
  homeScreenChild17: {
    left: 16,
  },
  alexjames1: {
    top: 1042,
  },
  dropDownMenuButton1: {
    left: 329,
  },
  untitled2: {
    top: 707,
  },
  loremIpsumDolorContainer2: {
    top: 931,
    letterSpacing: 0.2,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    width: 343,
  },
  homeScreenChild18: {
    width: 64,
    left: 16,
  },
  design2: {
    left: 26,
  },
  homeScreenChild19: {
    width: 72,
    left: 90,
  },
  persona2: {
    left: 100,
  },
  homeScreenChild20: {
    width: 80,
    left: 172,
  },
  userFlow2: {
    left: 182,
  },
  homeScreenChild21: {
    top: 717,
  },
  homeScreenChild22: {
    top: 722,
  },
  homeScreenChild23: {
    left: 50,
  },
  homeScreenChild24: {
    left: 84,
  },
  likeButtonIcon2: {
    left: 16,
  },
  saveButtonIcon2: {
    left: 335,
  },
  homeScreenChild25: {
    left: 16,
  },
  alexjames2: {
    top: 672,
  },
  dropDownMenuButton2: {
    left: 329,
  },
  bottomNavigationBarChild: {
    height: "70.59%",
    top: "29.41%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkslategray_200,
    position: "absolute",
    width: "100%",
  },
  bottomNavigationBarItem: {
    right: "66.67%",
    left: "25.33%",
    bottom: "17.65%",
    top: "47.06%",
    width: "8%",
    height: "35.29%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  bottomNavigationBarInner: {
    right: "45.87%",
    left: "46.13%",
    bottom: "17.65%",
    top: "47.06%",
    width: "8%",
    height: "35.29%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  bottomNavigationBarChild1: {
    right: "25.07%",
    left: "66.93%",
    bottom: "17.65%",
    top: "47.06%",
    width: "8%",
    height: "35.29%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  bottomNavigationBarChild2: {
    right: "4.27%",
    left: "87.73%",
    bottom: "17.65%",
    top: "47.06%",
    width: "8%",
    height: "35.29%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  bottomNavigationBarChild3: {
    height: "58.82%",
    width: "13.33%",
    top: "0%",
    right: "85.07%",
    bottom: "41.18%",
    left: "1.6%",
  },
  bottomNavigationBarChild4: {
    height: "47.06%",
    width: "10.67%",
    top: "5.88%",
    right: "86.4%",
    bottom: "47.06%",
    left: "2.93%",
  },
  bottomNavigationBarChild5: {
    height: "23.53%",
    width: "5.33%",
    top: "17.65%",
    right: "89.07%",
    bottom: "58.82%",
    left: "5.6%",
  },
  home: {
    top: "64.71%",
    left: "3.2%",
    letterSpacing: 0.2,
  },
  bottomNavigationBar: {
    top: 1407,
    height: 85,
  },
  homeScreen: {
    backgroundColor: Color.colorGold_100,
    flex: 1,
    height: 1492,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
