import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ONBOARDINGSCREEN = () => {
  return (
    <View style={styles.onboardingScreen12}>
      <Image
        style={styles.onboardingScreen12Child}
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
        style={styles.onboardingScreen12Item}
        contentFit="cover"
        source={require("../assets/ellipse-155.png")}
      />
      <Image
        style={styles.onboardingScreen12Inner}
        contentFit="cover"
        source={require("../assets/ellipse-156.png")}
      />
      <View style={[styles.g1, styles.g1Position]}>
        <Image
          style={[styles.g1Child, styles.itemPosition]}
          contentFit="cover"
          source={require("../assets/group-16581.png")}
        />
        <Text style={[styles.yourJourneyTo, styles.diveIntoATypo]}>
          Your journey to focused, distraction-free learning starts here.
          Discover a platform designed to enhance your knowledge and keep you
          engaged.
        </Text>
        <Text style={[styles.welcomeToScaleup, styles.welcomeToScaleupTypo]}>
          Welcome to ScaleUp!
        </Text>
        <Image
          style={styles.g1Item}
          contentFit="cover"
          source={require("../assets/group-1678.png")}
        />
      </View>
      <View style={[styles.g2, styles.g2Layout]}>
        <Text style={[styles.yourJourneyTo, styles.diveIntoATypo]}>
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
        <Image
          style={styles.g1Item}
          contentFit="cover"
          source={require("../assets/group-16791.png")}
        />
        <Image
          style={[styles.g2Item, styles.itemPosition]}
          contentFit="cover"
          source={require("../assets/group-16591.png")}
        />
      </View>
      <View style={[styles.g4, styles.g2Layout]}>
        <Text style={[styles.yourJourneyTo, styles.diveIntoATypo]}>
          Use our analytics tools to monitor your learning journey, get detailed
          feedback, insights, celebrate your achievements and identify areas for
          improvement.
        </Text>
        <Text style={[styles.trackYourProgress, styles.welcomeToScaleupTypo]}>
          Track Your Progress
        </Text>
        <Image
          style={styles.g1Item}
          contentFit="cover"
          source={require("../assets/group-1681.png")}
        />
        <Image
          style={[styles.g2Item, styles.itemPosition]}
          contentFit="cover"
          source={require("../assets/group-16611.png")}
        />
      </View>
      <View style={[styles.g3, styles.g3Layout]}>
        <Text style={[styles.diveIntoA, styles.g3Layout]}>
          Dive into a variety of interactive modules, quizzes, and community
          discussions. We make learning fun and interactive, ensuring you stay
          on track.
        </Text>
        <Text
          style={[styles.interactiveEngaging, styles.welcomeToScaleupTypo]}
        >{`Interactive & Engaging Features`}</Text>
        <Image
          style={styles.g3Child}
          contentFit="cover"
          source={require("../assets/group-16801.png")}
        />
        <Image
          style={[styles.g3Item, styles.g3Layout]}
          contentFit="cover"
          source={require("../assets/group-16601.png")}
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
  g1Position: {
    display: "none",
    top: 104,
  },
  itemPosition: {
    top: 0,
    left: 0,
  },
  diveIntoATypo: {
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
  },
  welcomeToScaleupTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    position: "absolute",
  },
  g2Layout: {
    height: 592,
    width: 343,
    left: 16,
    position: "absolute",
  },
  g3Layout: {
    width: 6,
    position: "absolute",
  },
  onboardingScreen12Child: {
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
    width: 343,
    left: 16,
    top: 7,
    position: "absolute",
  },
  onboardingScreen12Item: {
    left: 38,
    width: 300,
    height: 300,
    top: 104,
    position: "absolute",
  },
  onboardingScreen12Inner: {
    top: 154,
    left: 88,
    width: 200,
    height: 200,
    position: "absolute",
  },
  g1Child: {
    right: 0,
    bottom: 249,
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  yourJourneyTo: {
    top: 398,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
    width: 343,
    position: "absolute",
  },
  welcomeToScaleup: {
    left: 60,
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
    fontWeight: "700",
  },
  g1Item: {
    top: 532,
    left: 142,
    width: 60,
    height: 60,
    position: "absolute",
  },
  g1: {
    right: 16,
    bottom: 116,
    left: 16,
    display: "none",
    position: "absolute",
  },
  personalizedLearningPaths: {
    left: 23,
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
    fontWeight: "700",
  },
  g2Item: {
    height: 343,
    left: 0,
    width: 343,
    position: "absolute",
  },
  g2: {
    display: "none",
    top: 104,
  },
  trackYourProgress: {
    left: 66,
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
    fontWeight: "700",
  },
  g4: {
    top: 16,
  },
  diveIntoA: {
    fontSize: FontSize.size_12xs_2,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    top: 7,
    width: 6,
  },
  interactiveEngaging: {
    top: 6,
    fontSize: FontSize.size_12xs_3,
    left: 0,
  },
  g3Child: {
    top: 9,
    left: 2,
    width: 1,
    height: 1,
    position: "absolute",
  },
  g3Item: {
    height: 6,
    left: 0,
    top: 0,
  },
  g3: {
    top: 401,
    left: -16,
    height: 10,
  },
  onboardingScreen12: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ONBOARDINGSCREEN;
