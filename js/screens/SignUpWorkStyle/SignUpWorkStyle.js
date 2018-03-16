import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { colors } from "../../config/styles";
import collabActive from "../../assets/icons/workstyle/collaborative/active.png";
import collabInactive from "../../assets/icons/workstyle/collaborative/inactive.png";
import indepActive from "../../assets/icons/workstyle/independent/active.png";
import indepInactive from "../../assets/icons/workstyle/independent/inactive.png";
import eitherActive from "../../assets/icons/workstyle/either/active.png";
import eitherInactive from "../../assets/icons/workstyle/either/inactive.png";
const SignUpWorkStyle = ({ current, update, submit, loading, firebaseErr }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>ONE LAST THING:</Text>
    <Text style={styles.description}>
      Teams that have similar work styles work better together. Choose the one
      that best describes you.
    </Text>
    <View style={styles.selectionContainer}>
      <TouchableHighlight
        underlayColor={colors.borealisGreen}
        activeOpacity={1}
        onPress={() => {
          update("collaborative");
        }}
      >
        <View style={styles.selectionWrapper}>
          <Image
            style={styles.selectionImage}
            source={current === "collaborative" ? collabActive : collabInactive}
          />
          <View style={styles.selectionTextWrapper}>
            <Text style={styles.selectionHeading}>COLLABORATIVE</Text>
            <Text style={styles.selectionDescription}>
              You prefer to work together in a team.
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={colors.coralOrange}
        activeOpacity={1}
        onPress={() => {
          update("independent");
        }}
      >
        <View style={styles.selectionWrapper}>
          <Image
            style={styles.selectionImage}
            source={current === "independent" ? indepActive : indepInactive}
          />
          <View style={styles.selectionTextWrapper}>
            <Text style={styles.selectionHeading}>INDEPENDENT</Text>
            <Text style={styles.selectionDescription}>
              You prefer to work individually and then come together.
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={colors.dandelionYellow}
        activeOpacity={1}
        onPress={() => {
          update("either");
        }}
      >
        <View style={styles.selectionWrapper}>
          <Image
            style={styles.selectionImage}
            source={current === "either" ? eitherActive : eitherInactive}
          />
          <View style={styles.selectionTextWrapper}>
            <Text style={styles.selectionHeading}>EITHER</Text>
            <Text style={styles.selectionDescription}>
              You have no preference.
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
    {loading ? (
      <View style={styles.loadingWrapper}>
        <Loading />
      </View>
    ) : (
      <View style={styles.loadingWrapper}>
        <Button
          color={colors.coralOrange}
          text="ALL DONE"
          func={() => {
            submit();
          }}
          disabled={!current.length}
        />
      </View>
    )}
    {firebaseErr.isError && (
      <View style={styles.errorWrapper}>
        <Text style={styles.error}>{firebaseErr.text}</Text>
      </View>
    )}
  </View>
);

SignUpWorkStyle.propTypes = {
  current: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  firebaseErr: PropTypes.object.isRequired
};

export default SignUpWorkStyle;
