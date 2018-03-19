/* global require */
import React, { Component } from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";
import { headerBarStyle } from "../../config/styles";
import Slider from "../../components/Slider";

class CompetitionCategory extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "COMPETITIONS",
    ...headerBarStyle(navigation),
    headerLeft: null
  });

  render() {
    return (
      <ScrollView style={styles.main}>
        <Slider sliderColor="red"/>
        <Text style={styles.text}>Browse competitions by category: </Text>
        <View style={styles.imageTextWrapper}>
          <TouchableOpacity
            style={styles.imageText}
            onPress={() =>
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
              this.props.navigation.navigate("CompetitionList", {
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
            style={styles.imageText}
            onPress={() =>
              this.props.navigation.navigate("CompetitionList", {
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
  }
}

export default CompetitionCategory;

CompetitionCategory.propTypes = {
  navigation: PropTypes.object.isRequired
};
