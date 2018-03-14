import React, { Component } from "react";
import { Image, View, Text } from "react-native";

import {timestampConvertion} from '../../helpers/timestampHelper';

import { styles } from "./styles";

const CompetitionList = ({ list }) => {
  return (
    <View style={styles.main}>
      {list.map((el, i) => {
        return (
          <View key={i} style={styles.element}>
            <View style={styles.left}>
            <Image source={{ uri: el.hero }} style={styles.image} />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{el.name.toUpperCase()}</Text>
              <Text style={styles.text}>{el.host}</Text>
            </View>
            </View>
            <View>
              <Text style={styles.time}>{timestampConvertion(el.registrationDeadline)}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CompetitionList;
