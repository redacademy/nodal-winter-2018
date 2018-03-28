/* global require */
import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import collaborative from "../../assets/icons/workstyle/collaborative/active.png";
import independent from "../../assets/icons/workstyle/independent/active.png";
import either from "../../assets/icons/workstyle/either/active.png";
import Button from "../../components/Button";

import { styles } from "./styles";
import { colors } from "../../config/styles";

const Profile = ({ user, openEditProfile, signOut }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={openEditProfile}>
          <Image
            style={styles.profileEditIcon}
            resizeMode="contain"
            source={require("../../assets/icons/navigation/edit.png")}
          />
        </TouchableOpacity>
        {user.profilePhoto ? (
          <Image
            style={styles.profilePhoto}
            source={{ uri: user.profilePhoto }}
          />
        ) : (
          <TouchableOpacity
            label={"Select an Image"}
            style={styles.profilePhotoButton}
          >
            <Image
              style={styles.profileIcon}
              source={require("../../assets/icons/tab-bar-icons/profile/grey.png")}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.nameText}>{user.fullname}</Text>
        <Text style={styles.paragraphText}>{user.program}</Text>
        <Text style={styles.paragraphText}>{user.schoolName}</Text>
        <Text style={styles.titleText}>{"Workstyle".toUpperCase()}</Text>
        <View>
          {(() => {
            switch (user.workstyle) {
              case "collaborative":
                return (
                  <View>
                    <Image
                      style={styles.workstyleIcons}
                      source={collaborative}
                    />
                    <Text style={styles.workstyleText}>Collaborative</Text>{" "}
                  </View>
                );
              case "independent":
                return (
                  <View>
                    <Image style={styles.workstyleIcons} source={independent} />
                    <Text style={styles.workstyleText}>Indepedent</Text>
                  </View>
                );
              case "either":
                return (
                  <View>
                    <Image style={styles.workstyleIcons} source={either} />
                    <Text style={styles.workstyleText}>Either</Text>
                  </View>
                );
              default:
                return;
            }
          })()}
        </View>

        <Text style={styles.titleText}>{"About Me".toUpperCase()}</Text>
        <Text style={styles.paragraphText}>{user.aboutMe}</Text>
        <Text style={styles.titleText}>{"Skills".toUpperCase()}</Text>
        <View style={styles.chipsContainer}>
          {user.chips &&
            user.chips.map((chip, index) => {
              return (
                <View style={styles.chip} key={index}>
                  <View>
                    <Text style={styles.chipValue}>{chip}</Text>
                  </View>
                </View>
              );
            })}
        </View>
        {/* <Text style={styles.titleText}>{"My Competitions".toUpperCase()}</Text> */}
      </View>
      <Button color={colors.cornflowerBlue} text={"Sign Out"} func={signOut} />
    </ScrollView>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  openEditProfile: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Profile;
