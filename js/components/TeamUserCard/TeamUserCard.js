import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import Cirgoal from "../Cirgoal";
import ProfileLogo from "../../assets/icons/tab-bar-icons/profile/grey.png";

const TeamUserCard = ({ fun, grow, win, profileImage, children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <View style={styles.profileImageWrapper}>
      {Array.isArray(profileImage) ? (
        profileImage.reduce((acc, uri, i) => {
          return acc.length < 4
            ? acc.concat(
                <Image
                  key={i}
                  source={uri ? { uri } : ProfileLogo}
                  style={[
                    !uri && styles.icon,
                    styles[
                      `multiImage-${acc.length + 1}-${(() => {
                        switch (profileImage.length) {
                          case 1: {
                            return "full";
                          }
                          case 2: {
                            return "half";
                          }
                          case 3: {
                            return acc.length + 1 === 3 ? "half" : "quarter";
                          }
                          default: {
                            return "quarter";
                          }
                        }
                      })()}`
                    ]
                  ]}
                />
              )
            : acc;
        }, [])
      ) : (
        <Image
          source={profileImage ? { uri: profileImage } : ProfileLogo}
          style={[!profileImage && styles.icon, styles["single-profileImage"]]}
        />
      )}
    </View>
    <View style={styles.childrenWrapper}>{children}</View>
    <Cirgoal fun={fun} grow={grow} win={win} size={82} />
  </TouchableOpacity>
);

TeamUserCard.propTypes = {
  fun: PropTypes.number.isRequired,
  grow: PropTypes.number.isRequired,
  win: PropTypes.number.isRequired,
  profileImage: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onPress: PropTypes.func.isRequired
};

TeamUserCard.default = {
  profileImage: "",
  children: []
};

export default TeamUserCard;
