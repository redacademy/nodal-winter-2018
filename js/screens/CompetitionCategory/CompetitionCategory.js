import React, { Component } from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

class CompetitionCategory extends Component {
  render() {
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.text}>Browse competitions by category: </Text>
        <View style={styles.imageTextWrapper}>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
            <Image
              source={require("../../../js/assets/icons/competitions/all-large.png")}
            />
            <Text style={styles.title}>ALL COMPETITIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
            <Image
              source={require("../../../js/assets/icons/competitions/art-large.png")}
            />
            <Text style={styles.title}>ARTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
          <Image
            source={require("../../../js/assets/icons/competitions/business-large.png")}
          />
           <Text style={styles.title}>BUSINESS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
          <Image
            source={require("../../../js/assets/icons/competitions/hackathon-large.png")}
          />
           <Text style={styles.title}>HACKATHON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
          <Image
            source={require("../../../js/assets/icons/competitions/math-large.png")}
          />
           <Text style={styles.title}>MATH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
          <Image
            source={require("../../../js/assets/icons/competitions/science-large.png")}
          />
          <Text style={styles.title}>SCIENCE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
          <Image
            source={require("../../../js/assets/icons/competitions/spelling-bee-large.png")}
          />
          <Text style={styles.title}>SPELLING BEE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
          >
          <Image
            source={require("../../../js/assets/icons/competitions/sports-large.png")}
          />
          <Text style={styles.title}>SPORTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageText}
          // onPress={// navigation helper func goes here}
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