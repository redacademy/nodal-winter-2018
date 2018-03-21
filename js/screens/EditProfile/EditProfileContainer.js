import React, { Component } from "react";
import EditProfile from "./EditProfile";
import { updateUserProfile } from "../../helpers/firebaseAuth";
import { updateProfilePic } from "../../helpers/uploadProfilePicHelper";
import { updateWorkStyle } from "../../helpers/firebaseStore";
import ImagePicker from "react-native-image-picker";

class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      program: "",
      schoolName: "",
      aboutMe: "",
      profilePhoto: "",
      chips: [],
      loading: false,
      workstyle: "",
      imagePickerError: ""
    };
  }

  updateProfilePhoto = () => {
    const options = {
      title: "Select Photo",
      allowsEditing: true,
      maxHeight: 400,
      maxWidth: 400,
      cameraType: "front"
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.error) {
        this.setState({
          imagePickerError: response.error
        });
      } else {
        const source = { uri: `data:image/jpeg;base64,${response.data}` };
        this.setState({
          profilePhoto: source,
          imagePickerError: ""
        });
      }
    });
  };

  updateFullname = text => {
    this.setState({
      fullname: text
    });
  };

  updateProgram = text => {
    this.setState({
      program: text
    });
  };

  updateSchoolName = text => {
    this.setState({
      schoolName: text
    });
  };

  updateWS = workstyle => {
    this.setState({
      workstyle
    });
  };

  updateAboutMe = text => {
    this.setState({
      aboutMe: text
    });
  };

  setChips = chips => {
    if (chips && chips.length) {
      this.setState({ chips });
    }
  };

  submit = async () => {
    this.setState({ loading: true });
    await updateUserProfile(
      this.state.fullname,
      this.state.program,
      this.state.schoolName,
      this.state.aboutMe,
      this.state.chips
    );
    await updateProfilePic(this.state.profilePhoto.uri);
    try {
      await updateWorkStyle(this.state.workstyle);
    } catch (e) {
      this.setState({
        firebaseErr: {
          isError: true,
          text: e.message
        },
        loading: false
      });
      return;
    }
    this.setState({
      firebaseErr: {
        isError: false,
        text: ""
      },
      loading: false
    });
  };

  render() {
    return (
      <EditProfile
        imagePickerError={this.state.imagePickerError}
        chips={this.state.chips}
        setChips={this.setChips}
        currentWorkstyle={this.state.workstyle}
        updateWS={this.updateWS}
        profilePhoto={this.state.profilePhoto}
        imagePicker={this.updateProfilePhoto}
        updateFullname={this.updateFullname}
        updateProgram={this.updateProgram}
        updateAboutMe={this.updateAboutMe}
        updateSchoolName={this.updateSchoolName}
        submit={this.submit}
      />
    );
  }
}

export default EditProfileContainer;
