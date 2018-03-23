import React from "react";
import { View, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import SliderComponent from "../../components/Slider";
import Button from "../../components/Button";
import { colors } from "../../config/styles";
import Cirgoal from "../../components/Cirgoal";

const JoinTeamModal = ({
  fun,
  grow,
  win,
  pointsLeft,
  updateFun,
  updateGrow,
  updateWin
}) => (
  <View style={styles.container}>
    <Text
      style={styles.instructions}
    >{`Why do you want to join?\n(This will help us match you)`}</Text>
    <Text style={styles.pointsLabel}>
      POINTS REMAINING:
      <Text style={styles.points}>{` ${pointsLeft}`}</Text>
    </Text>{" "}
    <View>
      <Text style={styles.label}>To have fun</Text>
      <SliderComponent
        sliderColor={colors.dandelionYellow}
        value={fun}
        update={updateFun}
        max={fun + pointsLeft > 5 ? 5 : fun + pointsLeft}
        maxBG={colors.lightDandelionYellow}
        sli
      />
      <Text style={styles.label}>To grow</Text>
      <SliderComponent
        sliderColor={colors.borealisGreen}
        value={grow}
        update={updateGrow}
        max={grow + pointsLeft > 5 ? 5 : grow + pointsLeft}
        maxBG={colors.lightBorealisGreen}
      />
      <Text style={styles.label}>To win</Text>
      <SliderComponent
        sliderColor={colors.coralOrange}
        value={win}
        update={updateWin}
        max={win + pointsLeft > 5 ? 5 : win + pointsLeft}
        maxBG={colors.lightCoralOrange}
      />
    </View>
    <View style={styles.cirgoalWrapper}>
      <Cirgoal
        fun={fun}
        grow={grow}
        win={win}
        size={Dimensions.get("window").width > 320 ? 180 : 80}
      />
    </View>
    <Button
      color={colors.cornflowerBlue}
      width={140}
      disabled={pointsLeft !== 0}
      text="SUBMIT"
      func={() => {}}
    />
  </View>
);

JoinTeamModal.propTypes = {
  fun: PropTypes.number.isRequired,
  grow: PropTypes.number.isRequired,
  win: PropTypes.number.isRequired,
  pointsLeft: PropTypes.number.isRequired,
  updateFun: PropTypes.func.isRequired,
  updateGrow: PropTypes.func.isRequired,
  updateWin: PropTypes.func.isRequired
};

export default JoinTeamModal;
