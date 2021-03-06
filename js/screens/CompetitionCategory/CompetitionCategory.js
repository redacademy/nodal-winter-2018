/* global require */
import React from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

const CompetitionCategory = ({navigation}) => (
  <ScrollView contentContainerStyle={styles.mainContainer}>
    <Text style={styles.text}>Browse competitions by category: </Text>
    <View style={styles.imageTextWrapper}>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: ""
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/all-large.png")}
        />
        <Text style={styles.title}>ALL COMPETITIONS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "arts"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/art-large.png")}
        />
        <Text style={styles.title}>ARTS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "business"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/business-large.png")}
        />
        <Text style={styles.title}>BUSINESS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "hackathon"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/hackathon-large.png")}
        />
        <Text style={styles.title}>HACKATHON</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "math"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/math-large.png")}
        />
        <Text style={styles.title}>MATH</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "science"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/science-large.png")}
        />
        <Text style={styles.title}>SCIENCE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "spelling bee"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/spelling-bee-large.png")}
        />
        <Text style={styles.title}>SPELLING BEE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageText}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "sports"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/sports-large.png")}
        />
        <Text style={styles.title}>SPORTS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.imageText, { left: -77.5 }]}
        onPress={() =>
          navigation.navigate("CompetitionList", {
            category: "tech"
          })
        }
      >
        <Image
          source={require("../../../js/assets/icons/competitions/tech-large.png")}
        />
        <Text style={styles.title}>TECH</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

export default CompetitionCategory;

CompetitionCategory.propTypes = {
  navigation: PropTypes.object.isRequired
};