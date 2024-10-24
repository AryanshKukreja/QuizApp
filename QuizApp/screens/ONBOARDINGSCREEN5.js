import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ONBOARDINGSCREEN1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingScreen10}>
      <Image
        style={styles.onboardingScreen10Child}
        contentFit="cover"
        source={require("../assets/ellipse-154.png")}
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
          source={require("../assets/group-1423.png")}
        />
      </View>
      <Image
        style={styles.onboardingScreen10Item}
        contentFit="cover"
        source={require("../assets/ellipse-155.png")}
      />
      <Image
        style={styles.onboardingScreen10Inner}
        contentFit="cover"
        source={require("../assets/ellipse-156.png")}
      />
      <View style={styles.g2Position}>
        <Text style={[styles.setYourGoals, styles.yourTypo]}>
          Set your goals and interests to receive tailored course
          recommendations. We curate content just to help you stay motivated and
          achieve your objectives.
        </Text>
        <Text
          style={[
            styles.personalizedLearningPaths,
            styles.welcomeToScaleupTypo,
          ]}
        >
          Personalized Learning Paths
        </Text>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ONBOARDINGSCREEN2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-16791.png")}
          />
        </Pressable>
        <Image
          style={[styles.g2Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/group-16592.png")}
        />
      </View>
      <View style={[styles.g3, styles.g2Position]}>
        <Text style={[styles.setYourGoals, styles.yourTypo]}>
          Dive into a variety of interactive modules, quizzes, and community
          discussions. We make learning fun and interactive, ensuring you stay
          on track.
        </Text>
        <Text
          style={[styles.interactiveEngaging, styles.g1ItemPosition]}
        >{`Interactive & Engaging Features`}</Text>
        <Image
          style={styles.wrapper}
          contentFit="cover"
          source={require("../assets/group-1680.png")}
        />
        <Image
          style={[styles.g2Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/group-16602.png")}
        />
      </View>
      <View style={[styles.g3, styles.g2Position]}>
        <Text style={[styles.setYourGoals, styles.yourTypo]}>
          Use our analytics tools to monitor your learning journey, get detailed
          feedback, insights, celebrate your achievements and identify areas for
          improvement.
        </Text>
        <Text style={[styles.trackYourProgress, styles.welcomeToScaleupTypo]}>
          Track Your Progress
        </Text>
        <Image
          style={styles.wrapper}
          contentFit="cover"
          source={require("../assets/group-1681.png")}
        />
        <Image
          style={[styles.g2Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/group-16612.png")}
        />
      </View>
      <View style={styles.g1}>
        <Image
          style={[styles.g1Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/group-16582.png")}
        />
        <Text style={[styles.yourJourneyTo, styles.yourTypo]}>
          Your journey to focused, distraction-free learning starts here.
          Discover a platform designed to enhance your knowledge and keep you
          engaged.
        </Text>
        <Text style={[styles.welcomeToScaleup, styles.welcomeToScaleupTypo]}>
          Welcome to ScaleUp!
        </Text>
        <Image
          style={[styles.g1Item, styles.g1ItemPosition]}
          contentFit="cover"
          source={require("../assets/group-16781.png")}
        />
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
  yourTypo: {
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  welcomeToScaleupTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_200,
    textAlign: "center",
  },
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  g2Position: {
    height: 592,
    top: 104,
    width: 343,
    left: 16,
    position: "absolute",
  },
  g1ItemPosition: {
    left: 2,
    position: "absolute",
  },
  onboardingScreen10Child: {
    top: -87,
    left: -215,
    width: 805,
    height: 986,
    position: "absolute",
  },
  groupIcon: {
    left: 325,
  },
  pm: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_100,
    width: 48,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
    height: 18,
    left: 16,
    width: 343,
    top: 7,
    position: "absolute",
  },
  onboardingScreen10Item: {
    left: 38,
    width: 300,
    height: 300,
    top: 104,
    position: "absolute",
  },
  onboardingScreen10Inner: {
    top: 154,
    left: 88,
    width: 200,
    height: 200,
    position: "absolute",
  },
  setYourGoals: {
    top: 398,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
    width: 343,
  },
  personalizedLearningPaths: {
    left: 23,
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 142,
    top: 532,
    width: 60,
    height: 60,
    position: "absolute",
  },
  g2Child: {
    height: 343,
    width: 343,
  },
  interactiveEngaging: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
  },
  g3: {
    display: "none",
  },
  trackYourProgress: {
    left: 66,
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
    fontWeight: "700",
    position: "absolute",
  },
  g1Child: {
    right: 0,
    bottom: 4,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  yourJourneyTo: {
    fontSize: FontSize.size_12xs_2,
    width: 6,
    top: 7,
    color: Color.colorDarkslategray_200,
  },
  welcomeToScaleup: {
    top: 6,
    left: 1,
    fontSize: FontSize.size_12xs_3,
    position: "absolute",
  },
  g1Item: {
    top: 9,
    width: 1,
    height: 1,
  },
  g1: {
    top: 396,
    right: 392,
    bottom: 406,
    left: -23,
    position: "absolute",
  },
  onboardingScreen10: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ONBOARDINGSCREEN1;
