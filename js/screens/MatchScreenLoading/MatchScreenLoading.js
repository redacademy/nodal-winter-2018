/* global require */
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { colors } from "../../config/styles";

import Button from "../../components/Button";
import Loading from "../../components/Loading";

const MatchScreenLoading = ({ loading, navigation, noMatch }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {!loading ? (
          <View>
            <Image
              style={styles.imageBubbles}
              source={require("../../assets/images/matching/chatroom-image.png")}
            />
            {noMatch ? (
              <Text style={[styles.text, { paddingHorizontal: 15 }]}>
                {
                  "Looks like you're the first one here.\nDo you want to create your own group?"
                }
              </Text>
            ) : (
              <View>
                <Image
                  style={{ alignSelf: "center" }}
                  source={require("../../assets/icons/other/check-mark.png")}
                />
                <Text style={styles.title}>{"GROUP FOUND!"}</Text>
                <Text style={styles.text}>Joining group chat room now…</Text>
              </View>
            )}
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
              {"We're working on matching you with your dream team!"}
            </Text>
          </View>
        )}
        <View style={styles.buttonView}>
          <Button
            color={colors.cornflowerBlue}
            text={noMatch ? "Create New Group" : "NEXT"}
            disabled={loading}
            width={noMatch ? 220 : 140}
            func={() => {
              navigation.goBack();
            }}
          />
          {noMatch && (
            <Text style={styles.noThanks}>
              {"No Thanks, I'll come back later"}
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

MatchScreenLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  noMatch: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};

export default MatchScreenLoading;
