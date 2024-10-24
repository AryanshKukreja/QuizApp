import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ONBOARDINGSCREEN3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingScreen9}>
      <Image
        style={styles.onboardingScreen9Child}
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
        style={[styles.onboardingScreen9Item, styles.g1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-155.png")}
      />
      <Image
        style={styles.onboardingScreen9Inner}
        contentFit="cover"
        source={require("../assets/ellipse-156.png")}
      />
      <View style={[styles.g1, styles.g1Position]}>
        <Image
          style={[styles.g1Child, styles.g2ItemPosition]}
          contentFit="cover"
          source={require("../assets/group-16583.png")}
        />
        <Text style={styles.yourJourneyTo}>
          Your journey to focused, distraction-free learning starts here.
          Discover a platform designed to enhance your knowledge and keep you
          engaged.
        </Text>
        <Text style={[styles.welcomeToScaleup, styles.welcomeToScaleupTypo]}>
          Welcome to ScaleUp!
        </Text>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ONBOARDINGSCREEN1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1678.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.g2, styles.g1Position]}>
        <Text style={styles.yourJourneyTo}>
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
          style={styles.wrapper}
          contentFit="cover"
          source={require("../assets/group-16791.png")}
        />
        <Image
          style={[styles.g2Item, styles.g2ItemPosition]}
          contentFit="cover"
          source={require("../assets/group-16591.png")}
        />
      </View>
      <View style={[styles.g2, styles.g1Position]}>
        <Text style={styles.yourJourneyTo}>
          Dive into a variety of interactive modules, quizzes, and community
          discussions. We make learning fun and interactive, ensuring you stay
          on track.
        </Text>
        <Text
          style={[styles.interactiveEngaging, styles.welcomeToScaleupTypo]}
        >{`Interactive & Engaging Features`}</Text>
        <Image
          style={styles.wrapper}
          contentFit="cover"
          source={require("../assets/group-1680.png")}
        />
        <Image
          style={[styles.g2Item, styles.g2ItemPosition]}
          contentFit="cover"
          source={require("../assets/group-16603.png")}
        />
      </View>
      <View style={[styles.g2, styles.g1Position]}>
        <Text style={styles.yourJourneyTo}>
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
          style={[styles.g2Item, styles.g2ItemPosition]}
          contentFit="cover"
          source={require("../assets/group-16613.png")}
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
    top: 104,
    position: "absolute",
  },
  g2ItemPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  welcomeToScaleupTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0.3,
    fontSize: FontSize.size_xl,
    top: 363,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    position: "absolute",
  },
  onboardingScreen9Child: {
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
    top: 7,
    height: 18,
    width: 343,
    left: 16,
    position: "absolute",
  },
  onboardingScreen9Item: {
    left: 38,
    width: 300,
    height: 300,
  },
  onboardingScreen9Inner: {
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
    overflow: "hidden",
  },
  yourJourneyTo: {
    top: 398,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    width: 343,
    position: "absolute",
  },
  welcomeToScaleup: {
    left: 60,
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
  g1: {
    right: 16,
    bottom: 116,
    left: 16,
    top: 104,
  },
  personalizedLearningPaths: {
    left: 23,
  },
  g2Item: {
    height: 343,
    width: 343,
  },
  g2: {
    height: 592,
    display: "none",
    width: 343,
    left: 16,
    top: 104,
  },
  interactiveEngaging: {
    left: 2,
  },
  trackYourProgress: {
    left: 66,
  },
  onboardingScreen9: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ONBOARDINGSCREEN3;
