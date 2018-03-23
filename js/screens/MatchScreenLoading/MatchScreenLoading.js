/* global require */
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { colors } from "../../config/styles";

import Button from "../../components/Button";
import Loading from "../../components/Loading";

const MatchScreenLoading = ({ contentLoading, buttonLoading }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {contentLoading === false ? (
          <View>
            <Image
              style={styles.imageBubbles}
              source={require("../../assets/images/matching/chatroom-image.png")}
            />
            <Image
              style={{ alignSelf: "center" }}
              source={require("../../assets/icons/other/check-mark.png")}
            />
            <Text style={styles.title}>GROUP FOUND!</Text>
            <Text style={styles.text}>Joining group chat room now…</Text>
          </View>
        ) : (
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/matching/matching-circles.png")}
            />
            <View style={styles.loading}>
              <Loading />
            </View>
            <Text style={styles.title}>ALMOST THERE!</Text>
            <Text style={styles.text}>
              We’re working on matching you with your dream team!
            </Text>
          </View>
        )}
        {buttonLoading === false ? (
          <Button
            color={colors.cornflowerBlue}
            text={"NEXT"}
            disabled={false}
            width={200}
            func={() => {}}
          />
        ) : (
          <Button
            color={colors.cornflowerBlue}
            text={"NEXT"}
            disabled={true}
            width={200}
            func={() => {}}
          />
        )}
      </View>
    </ScrollView>
  );
};

MatchScreenLoading.propTypes = {
  buttonLoading: PropTypes.bool.isRequired,
  contentLoading: PropTypes.bool.isRequired
};

export default MatchScreenLoading;
