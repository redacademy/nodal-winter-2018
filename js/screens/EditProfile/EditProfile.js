/* global require */
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";

import Button from "../../components/Button";

// Styles
import { colors } from "../../config/styles";
import { styles } from "./styles";

const EditProfile = ({ func }) => (
  <ScrollView contentContainerStyle={styles.mainContainer}>
    <TouchableOpacity
      title="great button"
      label={"Select an Image"}
      style={styles.profilePhotoButton}
    >
      <Image
        style={styles.profileIcon}
        source={require("../../assets/icons/tab-bar-icons/profile/grey.png")}
      />
      <Text style={styles.profileCircleText}>
        Edit<Image
          style={styles.profileEditIcon}
          resizeMode="center"
          source={require("../../assets/icons/navigation/edit.png")}
        />
      </Text>
    </TouchableOpacity>
    <View>
      <TextInput style={styles.textInput} placeholder="Full Name" />
      <TextInput
        style={styles.textInput}
        placeholder="Program or Field of Study"
      />
      <TextInput style={styles.textInput} placeholder="School Name" />
    </View>
    <View>
      <Text style={styles.heading}>
        <Text style={styles.screenText}>
          {"Workstyle(Select One)".toUpperCase()}
        </Text>
        <Image
          style={{ height: 18, width: 18 }}
          source={require("../../assets/icons/navigation/info/grey.png")}
        />
      </Text>
      <View style={styles.workstyle}>
        <View style={styles.workstyleIcons}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/icons/workstyle/collaborative/active.png")}
          />
          <Text style={styles.workstyleText}>Collaborative</Text>
        </View>
        <View style={styles.workstyleIcons}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/icons/workstyle/independent/inactive.png")}
          />
          <Text style={styles.workstyleText}>Independent</Text>
        </View>
        <View style={styles.workstyleIcons}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/icons/workstyle/either/inactive.png")}
          />
          <Text style={styles.workstyleText}>Either</Text>
        </View>
      </View>
      <View style={styles.heading}>
        <Text style={styles.screenText}>{"About Me".toUpperCase()}</Text>
        <TextInput
          multiline={true}
          style={styles.largeInput}
          placeholder="0/250"
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.screenText}>{"Skills".toUpperCase()}</Text>
        <TextInput
          multiline={true}
          style={styles.largeInput}
          placeholder="0/250"
        />
      </View>
    </View>
    <Button color={colors.lightBlue} text={"Save"} func={func} />
  </ScrollView>
);
EditProfile.propTypes = {
  func: PropTypes.func.isRequired
};

export default EditProfile;
