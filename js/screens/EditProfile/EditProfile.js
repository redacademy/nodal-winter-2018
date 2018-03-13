import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import ImagePicker from "react-native-image-picker";
import PropTypes from "prop-types";
import firebase from "firebase";
import { firebaseRef } from "../../config/firebaseConfig";
import Button from "../../components/Button";
import { colors } from "../../config/styles";

import { styles } from "./styles";

const options = {
  title: "Select Profile Photo",
  customButtons: [{ name: "file", title: "Choose Photo from File" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

function chooseimage() {
  ImagePicker.showImagePicker(options, response => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      let source = { uri: response.uri };
      this.setState({
        avatarSource: source
      });
      console.log(source);
    }
  });
}

openFileDialog = () => document.getElementById("image").click();

uploadFile = input => {
  // const ref = firebase.storage().ref();

  const file = input.target.files[0];
  const name = `${+new Date()}-${file.name}`;
  const metadata = {
    contentType: file.type
  };
  const task = firebaseRef.child(name).put(file, metadata);
  task
    .then(s => {
      const url = s.downloadURL;
      // set the url in the redux storage
      // this.props.updateImageField(url);
      console.log(url);
      // let the user proceed to the Next step
      // this.props.toggleImageSelected(false);
    })
    .catch(error => error.message);
};

const EditProfile = ({ func }) => (
  <ScrollView contentContainerStyle={styles.mainContainer}>
    <TouchableOpacity
      title="great button"
      label={"Select an Image"}
      onPress={chooseimage}
      style={styles.profilePhotoButton}
    >
      <Image
        style={styles.profileIcon}
        // resizeMode="center"
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
        <Text style={styles.titleText}>
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
        <Text style={styles.titleText}>{"About Me".toUpperCase()}</Text>
        <TextInput
          multiline={true}
          style={styles.largeInput}
          placeholder="0/250"
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.titleText}>{"Skills".toUpperCase()}</Text>
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

export default EditProfile;
