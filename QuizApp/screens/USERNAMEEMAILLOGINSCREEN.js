import * as React from "react";
import { Image, Button } from "expo-image";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

// WebBrowser makes sure Google login opens in the browser
WebBrowser.maybeCompleteAuthSession();

const USERNAMEEMAILLOGINSCREEN = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '721337172130-b8pqhikt7e4fv9rnenbcp2u2rt8g0ph1.apps.googleusercontent.com', // Replace with your actual client ID
  });

  const navigation = useNavigation();

  // Handle the response after Google authentication
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Navigate to HomeScreen after successful login
      navigation.navigate('HomeScreen');
    }
  }, [response]);

  return (
    <View style={styles.usernameemailLoginScreen}>
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
      <View style={styles.usernameemailLoginScreenChild} />
      <View style={styles.usernameemailLoginScreenItem} />
      <Image
        style={styles.usernameemailLoginScreenInner}
        contentFit="cover"
        source={require("../assets/ellipse-95.png")}
      />
      <Text style={[styles.dontHaveAnContainer, styles.text1Typo1]}>
        <Text style={styles.text1Typo}>{`Don’t have an account! `}</Text>
        <Text style={[styles.signUp, styles.pmTypo]}>Sign up</Text>
      </Text>
      <Text style={styles.unlockFocusedDistractionFrContainer}>
        <Text style={styles.orContinueWithTypo}>
          Unlock Focused, Distraction-free Learning
        </Text>
        <Text style={styles.pmTypo}>Login now</Text>
      </Text>
      <Text style={[styles.welcomeBack, styles.welcomeBackClr]}>
        Welcome Back..!
      </Text>
      <Text style={[styles.forgotPassword, styles.checkboxPosition]}>
        Forgot Password?
      </Text>
      <View style={[styles.rectangleView, styles.textbox1Layout]} />
      <View
        style={[styles.usernameemailLoginScreenChild1, styles.textbox1Layout]}
      />
      <Text style={[styles.orContinueWith, styles.welcomeBackClr]}>
        Or continue with
      </Text>

      {/* Google Button with functionality */}
      <Text
        style={[styles.google, styles.appleTypo]}
        onPress={() => {
          if (request) {
            promptAsync();
          } else {
            Alert.alert("Google login not available");
          }
        }}
      >
        Google
      </Text>

      <Text style={[styles.apple, styles.appleTypo]}>Apple</Text>
      <Text style={[styles.rememberMe, styles.checkboxPosition]}>
        Remember me
      </Text>
      <Image
        style={[
          styles.usernameemailLoginScreenChild2,
          styles.usernameemailChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/group-1297.png")}
      />
      <Image
        style={[
          styles.usernameemailLoginScreenChild3,
          styles.usernameemailChildLayout,
        ]}
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
        <Text style={[styles.text, styles.textTypo]}>Login</Text>
      </View>
      <View style={[styles.textbox1, styles.textbox1Layout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.text1, styles.text1Typo]}>
          Username/Email
        </Text>
      </View>
      <View style={[styles.passwordField, styles.textbox1Layout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.text1, styles.text1Typo]}>Password</Text>
        <Image
          style={styles.passwordFieldItem}
          contentFit="cover"
          source={require("../assets/group-6.png")}
        />
      </View>
      <View style={[styles.checkbox, styles.checkboxPosition]}>
        <View style={styles.checkboxChild} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  groupLayout: {
    width: 18,
    height: 18,
  },
  pmTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text1Typo1: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_xs,
  },
  welcomeBackClr: {
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
    position: "absolute",
  },
  checkboxPosition: {
    top: 491,
    position: "absolute",
  },
  textbox1Layout: {
    height: 40,
    position: "absolute",
  },
  appleTypo: {
    color: Color.colorDarkslategray_100,
    top: 668,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  usernameemailChildLayout: {
    height: 25,
    width: 25,
    top: 664,
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
    left: "0%",
    bottom: "0%",
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
  textTypo: {
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
    top: 0,
    width: 18,
    position: "absolute",
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
    top: 0,
    width: 18,
    position: "absolute",
  },
  groupItem: {
    left: 302,
    top: 0,
    width: 18,
    position: "absolute",
  },
  groupParent: {
    top: 7,
    height: 18,
    width: 343,
    left: 16,
    position: "absolute",
  },
  usernameemailLoginScreenChild: {
    top: 55,
    backgroundColor: Color.colorGray_200,
    height: 757,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 343,
    left: 16,
    position: "absolute",
  },
  usernameemailLoginScreenItem: {
    top: 70,
    width: 375,
    height: 742,
    backgroundColor: Color.colorWhite,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    left: 0,
    position: "absolute",
  },
  usernameemailLoginScreenInner: {
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
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 16,
  },
  forgotPassword: {
    left: 247,
    textDecoration: "underline",
    textAlign: "right",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: FontSize.size_xs,
  },
  rectangleView: {
    width: 164,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 657,
    height: 40,
    backgroundColor: Color.colorWhite,
    left: 16,
  },
  usernameemailLoginScreenChild1: {
    left: 195,
    width: 164,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 657,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  orContinueWith: {
    top: 624,
    left: 136,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  google: {
    left: 90,
  },
  apple: {
    left: 273,
  },
  rememberMe: {
    left: 44,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: FontSize.size_xs,
  },
  usernameemailLoginScreenChild2: {
    left: 243,
  },
  usernameemailLoginScreenChild3: {
    left: 60,
  },
  toggleButton1Child: {
    borderRadius: Border.br_5xs_5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  toggleButton1Item: {
    width: "45.19%",
    right: "54.81%",
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
    color: Color.colorWhite,
  },
  mobileNo: {
    left: "67.06%",
    color: Color.colorGold_100,
  },
  toggleButton1: {
    top: 306,
  },
  primaryButton1Child: {
    shadowColor: "rgba(4, 49, 66, 0.3)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorDarkslategray_200,
    shadowOpacity: 1,
    right: "0%",
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
    top: 559,
  },
  childShadowBox: {
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
    top: 386,
    height: 40,
    width: 343,
    left: 16,
  },
  passwordFieldItem: {
    height: "50%",
    width: "5.83%",
    top: "25%",
    right: "5.83%",
    bottom: "25%",
    left: "88.34%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordField: {
    top: 441,
    height: 40,
    width: 343,
    left: 16,
  },
  checkboxChild: {
    borderRadius: 2,
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1.3,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  checkbox: {
    width: 18,
    height: 18,
    left: 16,
  },
  usernameemailLoginScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGold_100,
  },
});

export default USERNAMEEMAILLOGINSCREEN;
