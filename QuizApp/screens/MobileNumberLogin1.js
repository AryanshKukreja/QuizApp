import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MOBILENOLOGINSCREEN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileNoLoginScreen}>
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
          source={require("../assets/group-1422.png")}
        />
      </View>
      <View style={styles.mobileNoLoginScreenChild} />
      <View style={styles.mobileNoLoginScreenItem} />
      <Text style={[styles.dontHaveAnContainer, styles.text1Typo1]}>
        <Text style={styles.text1Typo}>{`Don’t have an account! `}</Text>
        <Text style={[styles.signUp, styles.pmTypo]}>Sign up</Text>
      </Text>
      <Text style={[styles.orContinueWith, styles.welcomeBackClr]}>
        Or continue with
      </Text>
      <Text style={styles.unlockFocusedDistractionFrContainer}>
        <Text
          style={styles.orContinueWithTypo}
        >{`Unlock Focused, Distraction-free Learning
`}</Text>
        <Text style={styles.pmTypo}>Login now</Text>
      </Text>
      <Text style={[styles.welcomeBack, styles.textTypo]}>Welcome Back..!</Text>
      <View style={[styles.mobileNoLoginScreenInner, styles.textbox1Layout]} />
      <View style={[styles.rectangleView, styles.textbox1Layout]} />
      <Text style={[styles.google, styles.appleTypo]}>Google</Text>
      <Text style={[styles.apple, styles.appleTypo]}>Apple</Text>
      <Image
        style={[styles.mobileNoLoginScreenChild1, styles.mobileChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1297.png")}
      />
      <Image
        style={[styles.mobileNoLoginScreenChild2, styles.mobileChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1298.png")}
      />
      <View style={[styles.toggleButton1, styles.buttonLayout]}>
        <View style={[styles.toggleButton1Child, styles.childPosition1]} />
        <View style={[styles.toggleButton1Item, styles.childPosition]} />
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.mobileNo, styles.usernameTypo]}>Mobile No</Text>
      </View>
      <Pressable
        style={[styles.primaryButton1, styles.buttonLayout]}
        onPress={() => navigation.navigate("OTPSCREEN")}
      >
        <View style={[styles.primaryButton1Child, styles.childPosition]} />
        <Text style={[styles.text, styles.textTypo]}>Request OTP</Text>
      </Pressable>
      <View style={[styles.textbox1, styles.textbox1Layout]}>
        <View style={[styles.textbox1Child, styles.childPosition]} />
        <Text style={[styles.text1, styles.text1Typo]}>Mobile No</Text>
      </View>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-95.png")}
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
  pmTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text1Typo1: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  welcomeBackClr: {
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textbox1Layout: {
    height: 40,
    position: "absolute",
  },
  appleTypo: {
    color: Color.colorDarkslategray_100,
    top: 550,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  mobileChildLayout: {
    height: 25,
    width: 25,
    top: 546,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 343,
    left: 16,
    position: "absolute",
  },
  childPosition1: {
    left: "0%",
    width: "100%",
  },
  childPosition: {
    shadowOpacity: 1,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  usernameTypo: {
    letterSpacing: 0.2,
    top: "30%",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupIcon: {
    left: 325,
  },
  pm: {
    width: 48,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    position: "absolute",
    left: 0,
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
  mobileNoLoginScreenChild: {
    top: 55,
    backgroundColor: Color.colorGray_200,
    height: 771,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 343,
    left: 16,
    position: "absolute",
  },
  mobileNoLoginScreenItem: {
    top: 70,
    width: 375,
    height: 742,
    backgroundColor: Color.colorWhite,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    left: 0,
    position: "absolute",
  },
  signUp: {
    color: Color.colorGold_100,
  },
  dontHaveAnContainer: {
    top: 778,
    left: 88,
    textAlign: "center",
  },
  orContinueWith: {
    top: 506,
    left: 136,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  orContinueWithTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  unlockFocusedDistractionFrContainer: {
    top: 234,
    letterSpacing: 0.4,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    width: 343,
    left: 16,
    position: "absolute",
  },
  welcomeBack: {
    top: 205,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
    left: 16,
  },
  mobileNoLoginScreenInner: {
    width: 164,
    borderColor: Color.colorDarkslategray_200,
    top: 539,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    left: 16,
  },
  rectangleView: {
    left: 195,
    width: 164,
    borderColor: Color.colorDarkslategray_200,
    top: 539,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  google: {
    left: 90,
  },
  apple: {
    left: 273,
  },
  mobileNoLoginScreenChild1: {
    left: 243,
  },
  mobileNoLoginScreenChild2: {
    left: 60,
  },
  toggleButton1Child: {
    borderRadius: Border.br_5xs_5,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  toggleButton1Item: {
    width: "45.19%",
    left: "54.81%",
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    borderRadius: Border.br_5xs_5,
    backgroundColor: Color.colorGold_100,
  },
  username: {
    left: "11.66%",
    color: Color.colorGold_100,
  },
  mobileNo: {
    left: "67.06%",
    color: Color.colorWhite,
  },
  toggleButton1: {
    top: 306,
  },
  primaryButton1Child: {
    shadowColor: "rgba(4, 49, 66, 0.3)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorDarkslategray_200,
    left: "0%",
    width: "100%",
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
  },
  text: {
    top: "23%",
    left: "32.36%",
    letterSpacing: 0.5,
    textAlign: "center",
    color: Color.colorWhite,
  },
  primaryButton1: {
    top: 441,
  },
  textbox1Child: {
    borderColor: Color.colorLightgray,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    left: "0%",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: "27.5%",
    left: "5.83%",
    textAlign: "left",
    letterSpacing: 0.3,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textbox1: {
    top: 386,
    height: 40,
    width: 343,
    left: 16,
  },
  ellipseIcon: {
    top: 100,
    left: 150,
    width: 75,
    height: 75,
    position: "absolute",
  },
  mobileNoLoginScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGold_100,
  },
});

export default MOBILENOLOGINSCREEN;
