/* global require */
import React from "react";
import { Image, ScrollView, View, Text } from "react-native";
import PropTypes from "prop-types";
import ReadMore from "react-native-read-more-text";

import Button from "../../components/Button";
import { formatCompetitionTime } from "../../helpers/timestampHelpers";
import { teamSize, entryFee } from "../../helpers/competitionScreenHelpers";

import { styles } from "./styles";
import {colors} from '../../config/styles';

const Competition = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={styles.all}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.subtitle}>{data.host}</Text>
      <Image source={{ uri: data.hero }} style={styles.hero} />
      <Button
        text="Find A Group"
        color={colors.coralOrange}
        func={
          //TODO: Navigate to find group page once that screen is built
          () => console.log("button clicked!")
        }
      />
      <View style={styles.iconTextWrapper}>
        <Image
          source={require("../../assets/icons/competition-details/date-and-time.png")}
          style={styles.icon}
        />
        <Text style={styles.competitionDesText}>
          {formatCompetitionTime(data.startTime, data.endTime)}
        </Text>
      </View>
      <View style={styles.iconTextWrapper}>
        <Image
          source={require("../../assets/icons/competition-details/location.png")}
          style={styles.icon}
        />
        <Text style={styles.competitionDesText}>
          {data.street}
          {"\n"}
          {data.cityPostalCode}
        </Text>
      </View>
      <View style={styles.iconTextWrapper}>
        <Image
          source={require("../../assets/icons/competition-details/team-size.png")}
          style={styles.icon}
        />
        <Text style={styles.competitionDesText}>
          {teamSize(data.minTeamNum, data.maxTeamNum)}
        </Text>
      </View>
      <View style={styles.iconTextWrapper}>
        <Image
          source={require("../../assets/icons/competition-details/prize.png")}
          style={styles.icon}
        />
        <Text style={styles.competitionDesText}>{data.award}</Text>
      </View>
      <View style={styles.iconTextWrapper}>
        <Image
          source={require("../../assets/icons/competition-details/fee.png")}
          style={styles.icon}
        />
        <Text style={styles.competitionDesText}>{entryFee(data.entry)}</Text>
      </View>
      <View style={styles.blurbWrapper}>
        <ReadMore
          numberOfLines={5}
          renderTruncatedFooter={handlePress => (
            <Text
              onPress={handlePress}
              style={styles.readMore}
            >
              Read More
            </Text>
          )}
          renderRevealedFooter={handlePress => (
            <Text
              style={styles.readMore}
              onPress={handlePress}
            >
              Show Less
            </Text>
          )}
        >
          <Text style={styles.blurb}>{data.blurb}</Text>
        </ReadMore>
      </View>
      <Text style={styles.secondaryTitle}>PAST COMPETITIONS</Text>
      <ScrollView horizontal={true} style={styles.imageGallery}>
        {data.images.map((image, i) => (
          <Image
            key={i}
            source={{ uri: image }}
            style={styles.singleImage}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <Button
        text="Find A Group"
        color={colors.coralOrange}
        func={
          //TODO: Navigate to find group page once that screen is built
          () => console.log("button clicked!")
        }
      />
    </ScrollView>
  );
};

export default Competition;

Competition.propTypes = {
  data: PropTypes.object.isRequired
};
