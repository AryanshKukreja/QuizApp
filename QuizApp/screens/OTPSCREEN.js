import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OTPSCREEN = () => {
  return (
    <View style={styles.otpScreen}>
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
      <View style={styles.otpScreenChild} />
      <View style={styles.otpScreenItem} />
      <Image
        style={styles.otpScreenInner}
        contentFit="cover"
        source={require("../assets/ellipse-95.png")}
      />
      <Text style={[styles.dontHaveAnContainer, styles.containerTypo]}>
        <Text style={styles.text1Typo}>{`Don’t have an account! `}</Text>
        <Text style={[styles.signUp, styles.pmTypo]}>Sign up</Text>
      </Text>
      <Text style={styles.weHaveSent}>
        We have sent the OTP to your Mobile Number
      </Text>
      <Text style={[styles.otp, styles.otpClr]}>OTP</Text>
      <Text style={[styles.orContinueWith, styles.otpClr]}>
        Or continue with
      </Text>
      <Text style={[styles.didntReceiveOtpContainer, styles.containerTypo]}>
        <Text style={styles.text1Typo}>{`Didn’t receive OTP? `}</Text>
        <Text style={[styles.resendCode, styles.pmTypo]}>Resend Code</Text>
      </Text>
      <View style={[styles.rectangleView, styles.textboxLayout]} />
      <View style={[styles.otpScreenChild1, styles.textboxLayout]} />
      <Text style={[styles.google, styles.appleTypo]}>Google</Text>
      <Text style={[styles.apple, styles.appleTypo]}>Apple</Text>
      <Image
        style={[styles.otpScreenChild2, styles.otpChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1297.png")}
      />
      <Image
        style={[styles.otpScreenChild3, styles.otpChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1298.png")}
      />
      <View style={[styles.toggleButton1, styles.buttonLayout]}>
        <View style={styles.toggleButton1Child} />
        <View style={[styles.toggleButton1Item, styles.button1Position]} />
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.mobileNo, styles.usernameTypo]}>Mobile No</Text>
      </View>
      <View style={[styles.primaryButton1, styles.buttonLayout]}>
        <View style={[styles.primaryButton1Child, styles.button1Position]} />
        <Text style={[styles.text, styles.otpTypo]}>Login</Text>
      </View>
      <View style={[styles.textbox1, styles.textboxLayout]}>
        <View style={styles.textbox1ShadowBox} />
        <Text style={[styles.text1, styles.text1Typo]}>Mobile No</Text>
      </View>
      <View style={[styles.textbox11, styles.textboxLayout]}>
        <View style={styles.textbox1ShadowBox} />
        <Text style={[styles.text1, styles.text1Typo]}>OTP</Text>
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  containerTypo: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  otpClr: {
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
    position: "absolute",
  },
  textboxLayout: {
    height: 40,
    position: "absolute",
  },
  appleTypo: {
    color: Color.colorDarkslategray_100,
    top: 647,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  otpChildLayout: {
    height: 25,
    width: 25,
    top: 643,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 343,
    left: 16,
    position: "absolute",
  },
  button1Position: {
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
  otpTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
    left: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  otpScreenChild: {
    top: 55,
    backgroundColor: Color.colorGray_200,
    height: 757,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 343,
    left: 16,
    position: "absolute",
  },
  otpScreenItem: {
    top: 70,
    width: 375,
    height: 742,
    backgroundColor: Color.colorWhite,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    left: 0,
    position: "absolute",
  },
  otpScreenInner: {
    top: 100,
    left: 150,
    width: 75,
    height: 75,
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
  weHaveSent: {
    top: 234,
    letterSpacing: 0.4,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: 343,
    left: 16,
    position: "absolute",
  },
  otp: {
    top: 205,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 16,
  },
  orContinueWith: {
    top: 603,
    left: 136,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  resendCode: {
    textDecoration: "underline",
    color: Color.colorGold_100,
  },
  didntReceiveOtpContainer: {
    top: 470,
    left: 151,
    textAlign: "right",
  },
  rectangleView: {
    width: 164,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 636,
    height: 40,
    backgroundColor: Color.colorWhite,
    left: 16,
  },
  otpScreenChild1: {
    left: 195,
    width: 164,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 636,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  google: {
    left: 90,
  },
  apple: {
    left: 273,
  },
  otpScreenChild2: {
    left: 243,
  },
  otpScreenChild3: {
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
    width: "100%",
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
    top: 285,
  },
  primaryButton1Child: {
    shadowColor: "rgba(4, 49, 66, 0.3)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorDarkslategray_200,
    shadowOpacity: 1,
    left: "0%",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  text: {
    top: "23%",
    left: "42.27%",
    letterSpacing: 0.5,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  primaryButton1: {
    top: 538,
  },
  textbox1ShadowBox: {
    borderColor: Color.colorLightgray,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
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
    top: 365,
    height: 40,
    width: 343,
    left: 16,
  },
  textbox11: {
    top: 420,
    height: 40,
    width: 343,
    left: 16,
  },
  otpScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGold_100,
  },
});

export default OTPSCREEN;
