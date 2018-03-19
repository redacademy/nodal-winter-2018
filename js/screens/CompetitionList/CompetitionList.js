import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { timestampConvertion } from "../../helpers/timestampHelpers";

import { styles } from "./styles";

const CompetitionList = ({ list, navigation }) => {
  return (
    <View style={styles.main}>
      {list.map((competition, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={styles.element}
            onPress={() =>
              navigation.navigate("Competition", {
                data: competition
              })
            }
          >
            <View style={styles.left}>
              <Image source={{ uri: competition.hero }} style={styles.image} />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{competition.name.toUpperCase()}</Text>
                <Text style={styles.text}>{competition.host}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.time}>
                {timestampConvertion(competition.registrationDeadline)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CompetitionList;

CompetitionList.propTypes = {
  list: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};
