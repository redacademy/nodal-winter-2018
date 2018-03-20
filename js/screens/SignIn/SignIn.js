import React from "react";
import { KeyboardAvoidingView, View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import ValidatedTextInput from "../../components/ValidatedTextInput";
import Loading from "../../components/Loading";

import styles from "./styles";
import nodalIcon from "../../assets/logos/glyph.png";
import nodalWord from "../../assets/logos/workmark.png";
import Button from "../../components/Button";
import { colors } from "../../config/styles";
const SignIn = ({
  updateEmail,
  updatePassword,
  email,
  password,
  emailErr,
  passwordErr,
  checkEmail,
  checkPassword,
  showPassword,
  togglePasswordView,
  submit,
  loading,
  firebaseErr
}) => (
  <KeyboardAvoidingView
    keyboardVerticalOffset={60}
    behavior="position"
    style={styles.container}
  >
    <View style={styles.imageWrapper}>
      <Image source={nodalIcon} style={styles.icon} />
      <Image source={nodalWord} style={styles.iconText} />
    </View>
    <ValidatedTextInput
      text={email}
      error={emailErr}
      update={updateEmail}
      check={checkEmail}
      placeholder="Email Address"
      type="email"
    />
    <ValidatedTextInput
      text={password}
      error={passwordErr}
      update={updatePassword}
      check={checkPassword}
      hidden={!showPassword}
      toggleShowHide={togglePasswordView}
      placeholder="Password"
      type="password"
    />
    {loading ? (
      <View style={styles.loadingWrapper}>
        <Loading />
      </View>
    ) : (
      <View style={styles.loadingWrapper}>
        <Button
          color={colors.coralOrange}
          text="SIGN IN"
          func={() => {
            submit();
          }}
          disabled={
            !email.length ||
            !password.length ||
            emailErr.isError ||
            passwordErr.isError
          }
        />
      </View>
    )}
    {firebaseErr.isError && (
      <View style={styles.errorWrapper}>
        <Text style={styles.error}>{firebaseErr.text}</Text>
      </View>
    )}
  </KeyboardAvoidingView>
);

SignIn.propTypes = {
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailErr: PropTypes.object.isRequired,
  passwordErr: PropTypes.object.isRequired,
  checkEmail: PropTypes.func.isRequired,
  checkPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  togglePasswordView: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  firebaseErr: PropTypes.object.isRequired
};

export default SignIn;
