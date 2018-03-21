/* global require */
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import Chips from "../../components/Chips/";
import collabActive from "../../assets/icons/workstyle/collaborative/active.png";
import collabInactive from "../../assets/icons/workstyle/collaborative/inactive.png";
import indepActive from "../../assets/icons/workstyle/independent/active.png";
import indepInactive from "../../assets/icons/workstyle/independent/inactive.png";
import eitherActive from "../../assets/icons/workstyle/either/active.png";
import eitherInactive from "../../assets/icons/workstyle/either/inactive.png";

// Styles
import { colors } from "../../config/styles";
import { styles } from "./styles";

const EditProfile = ({
  profilePhoto,
  imagePicker,
  updateFullname,
  updateProgram,
  updateSchoolName,
  updateAboutMe,
  submit,
  currentWorkstyle,
  updateWS,
  setChips,
  chips,
  imagePickerError
}) => (
  <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="position">
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <TouchableOpacity
        onPress={imagePicker}
        label={"Select an Image"}
        style={styles.profilePhotoButton}
      >
        {profilePhoto ? (
          <Image style={styles.profilePhoto} source={profilePhoto} />
        ) : (
          <View>
            <Image
              style={styles.profileIcon}
              source={require("../../assets/icons/tab-bar-icons/profile/grey.png")}
            />

            <Text style={styles.profileCircleText}>
              Edit<Image
                style={styles.profileEditIcon}
                resizeMode="contain"
                source={require("../../assets/icons/navigation/edit.png")}
              />
            </Text>
          </View>
        )}
        {imagePickerError && (
          <Text style={styles.imagePickerError}>
            Error aquiring photo from file.
          </Text>
        )}
      </TouchableOpacity>
      <View>
        <TextInput
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={updateFullname}
          placeholder="Fullname"
        />
        <TextInput
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={updateProgram}
          placeholder="Program or Field of Study"
        />
        <TextInput
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={updateSchoolName}
          placeholder="School Name"
        />
      </View>
      <View>
        <Text style={styles.heading}>
          <Text style={styles.screenText}>
            {"Workstyle (Select One)".toUpperCase()}
          </Text>
        </Text>
        <View style={styles.workstyle}>
          <TouchableHighlight
            underlayColor={colors.borealisGreen}
            activeOpacity={1}
            onPress={() => {
              updateWS("collaborative");
            }}
          >
            <View style={styles.workstyleIcons}>
              <Image
                style={{ height: 80, width: 80 }}
                source={
                  currentWorkstyle === "collaborative"
                    ? collabActive
                    : collabInactive
                }
              />
              <Text style={styles.workstyleText}>Collaborative</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={colors.coralOrange}
            activeOpacity={1}
            onPress={() => {
              updateWS("independent");
            }}
          >
            <View style={styles.workstyleIcons}>
              <Image
                style={{ height: 80, width: 80 }}
                source={
                  currentWorkstyle === "independent"
                    ? indepActive
                    : indepInactive
                }
              />
              <Text style={styles.workstyleText}>Independent</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={colors.dandelionYellow}
            activeOpacity={1}
            onPress={() => {
              updateWS("either");
            }}
          >
            <View style={styles.workstyleIcons}>
              <Image
                style={{ height: 80, width: 80 }}
                source={
                  currentWorkstyle === "either" ? eitherActive : eitherInactive
                }
              />
              <Text style={styles.workstyleText}>Either</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.heading}>
          <Text style={styles.screenText}>{"About Me".toUpperCase()}</Text>
          <TextInput
            multiline={true}
            style={styles.largeInput}
            onChangeText={updateAboutMe}
            placeholder="0/250"
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.screenText}>{"Skills".toUpperCase()}</Text>
          <View style={styles.largeInputChips}>
            <Chips
              chips={chips}
              setChips={setChips}
              placeholder="Add a tag..."
            />
          </View>
        </View>
      </View>
      <Button color={colors.lightBlue} text={"Save"} func={submit} />
    </ScrollView>
  </KeyboardAvoidingView>
);

EditProfile.propTypes = {
  imagePicker: PropTypes.func.isRequired,
  profilePhoto: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  updateFullname: PropTypes.func.isRequired,
  updateProgram: PropTypes.func.isRequired,
  updateSchoolName: PropTypes.func.isRequired,
  updateAboutMe: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  currentWorkstyle: PropTypes.string.isRequired,
  updateWS: PropTypes.func.isRequired,
  setChips: PropTypes.func.isRequired,
  chips: PropTypes.array.isRequired,
  imagePickerError: PropTypes.string.isRequired
};

export default EditProfile;
